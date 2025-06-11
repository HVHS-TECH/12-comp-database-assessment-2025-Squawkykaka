// This lazy loads the firebase api's
const { get, ref, set } = await import("firebase/database");
const { getAuth } = await import("firebase/auth");

import { fb_authenticate, FB_GAMEDB } from "../firebase";
import { type User } from "firebase/auth";
import { writeStatusMessage } from "../util";

// Steps i need to do
// First get user's prefered usename and gender maybe ✅
// Then when the sign up with google button is pr`e`ssed, check if the user filled up the form
// and if the username has not been taken✅
// then save the name + email,✅
// username and gender to the database, then redirect.

// If logging in, check if the user has setup an account, and if they havnt send an error.

export function setupSignUpListener() {
  const form = document.getElementById("loginForm") as HTMLFormElement;

  if (form === null) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData: Record<string, string> = {};

    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") {
        formData[key] = value.toLowerCase();
      }
    });

    authenticateUser(formData);
  });
}

async function authenticateUser(formData: Record<string, string>) {
  try {
    console.log("Authenticating");

    const auth_result = await fb_authenticate();
    verifyUsername(formData);

    // TODO save this and check so we dont have to reauth.
    document.cookie = `auth=${auth_result}`;
  } catch (error) {
    console.log("Login failed: " + error);
  }
}

async function verifyUsername(formData: Record<string, string>) {
  console.log("Verifying User");

  // Get public data
  const public_data = await get(ref(FB_GAMEDB, `/panel/public/`));
  const snapshot: object = public_data.val();

  // Get current user
  const user = getCurrentUser();

  // Checks if the user has made an account.
  const made_account = !Object.prototype.hasOwnProperty.call(
    snapshot,
    user.uid
  );

  if (made_account) {
    createUserAccount(formData);
  } else {
    // showAccountExistError();
    console.log("That account already exists");
    // TODO make this show an error saying that accotunt already exists.
  }
}

// Now set the users data in firebase.
function createUserAccount(formData: Record<string, string>) {
  console.log("Creating User Account");

  let user: User;

  try {
    user = getCurrentUser();
  } catch (error) {
    console.error(error);
    return;
  }

  const uid = user.uid;

  const public_data: Record<string, string> = {
    username: formData.username,
    photourl: user.photoURL || "",
  };

  const private_data: Record<string, string> = {
    email: user.email || "",
    realName: user.displayName || "",
  };

  async function setdata(
    public_data: Record<string, string>,
    private_data: Record<string, string>
  ) {
    try {
      set(ref(FB_GAMEDB, `/panel/public/${uid}`), public_data);
      set(ref(FB_GAMEDB, `/panel/users/${uid}`), private_data);
    } catch (error) {
      console.error(error);
    }
  }

  setdata(public_data, private_data);
  writeStatusMessage("Thank you for making an account, you may login!");
}

function getCurrentUser(): User {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is currently signed in.");
  }

  return user;
}
