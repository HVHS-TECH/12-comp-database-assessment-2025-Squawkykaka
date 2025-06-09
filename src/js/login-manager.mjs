import { fb_authenticate } from "./firebase.mjs";
import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { FB_GAMEDB } from "./firebase.mjs";
import { redirectToHome } from "./utils.mjs";

// Steps i need to do
// First get user's prefered usename and gender maybe ✅
// Then when the sign up with google button is pr`e`ssed, check if the user filled up the form
// and if the username has not been taken✅
// then save the name + email,✅
// username and gender to the database, then redirect.

// If logging in, check if the user has setup an account, and if they havnt send an error.

function setupSignUpListener() {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    // Make it so the firn has to be loogged in.
    event.preventDefault();

    const formData = {};

    // Go over the form and save the data to an object
    new FormData(form).forEach((value, key) => {
      formData[key] = value.toLowerCase();
    });

    authenticateUser(formData);
  });
}

async function authenticateUser(formData) {
  try {
    const auth_result = await fb_authenticate();
    verifyUsername(formData, auth_result);

    document.cookie = `auth=${auth_result}`;
  } catch (error) {
    console.log("Login failed: " + error);
  }
}

async function verifyUsername(formData, auth_result) {
  // Get public users
  const public_data = await get(ref(FB_GAMEDB, `/panel/public/`));
  const snapshot = public_data.val();
  console.log(snapshot);

  // Checks if the user has made an account.
  var made_account = snapshot.hasOwnProperty(auth_result.uid);

  if (made_account) {
    createUserAccount(formData);
  } else {
    showAccountExistError();
  }
}

// Now set the users data in firebase.
function createUserAccount(formData, auth_result) {
  // get the current users uid
  const uid = auth_result.uid;

  // Create a new object containing public data
  // This would only be username for first login.
  // username, score, photurl
  var public_data = {};
  public_data.username = formData.username;
  public_data.photourl = user.photoURL;

  // Create a new object containig private data.
  // emaail, name
  var private_data = {};
  private_data.email = user.email;
  private_data.realName = user.displayName;

  // Set data.
  async function setdata(public_data, private_data) {
    try {
      const setPublic = await set(
        ref(FB_GAMEDB, `/panel/public/${uid}`),
        public_data
      );

      const setPrivate = await set(
        ref(FB_GAMEDB, `/panel/users/${uid}`),
        private_data
      );
    } catch (error) {
      console.error(error);
    }
  }

  setdata(public_data, private_data);
}

export { setupSignUpListener };
