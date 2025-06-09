import { get, ref, set } from "firebase/database";
import { fb_authenticate, FB_GAMEDB } from "./firebase.mjs";
import { getAuth, type User } from "firebase/auth";

// Steps i need to do
// First get user's prefered usename and gender maybe ✅
// Then when the sign up with google button is pr`e`ssed, check if the user filled up the form
// and if the username has not been taken✅
// then save the name + email,✅
// username and gender to the database, then redirect.

// If logging in, check if the user has setup an account, and if they havnt send an error.

function setupSignUpListener() {
  const form = document.getElementById("loginForm") as HTMLFormElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData: Record<string, string> = {};

    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") {
        formData[key] = value.toLowerCase();
      }
    });

    console.log(formData);

    authenticateUser(formData);
  });
}


async function authenticateUser(formData: Record<string, string>) {
  try {
    const auth_result = await fb_authenticate();
    console.log(auth_result);

    verifyUsername(formData);

    document.cookie = `auth=${auth_result}`;
  } catch (error) {
    console.log("Login failed: " + error);
  }
}

async function verifyUsername(formData: Record<string, string>) {
  // Get public users
  const public_data = await get(ref(FB_GAMEDB, `/panel/public/`));
  const snapshot = public_data.val();
  console.log(snapshot);

  // Get auth
  const user = getCurrentUser()

  // Checks if the user has made an account.
  var made_account = snapshot.hasOwnProperty(user.uid);

  if (made_account) {
    createUserAccount(formData);
  } else {
    // showAccountExistError();
  }
}

// Now set the users data in firebase.
function createUserAccount(formData: Record<string, string>) {
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
      await set(ref(FB_GAMEDB, `/panel/public/${uid}`), public_data);
      await set(ref(FB_GAMEDB, `/panel/users/${uid}`), private_data);
    } catch (error) {
      console.error(error);
    }
  }

  setdata(public_data, private_data);
}


function getCurrentUser(): User {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is currently signed in.");
  }

  return user;
}

export { setupSignUpListener };
