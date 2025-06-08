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
// then save the name + email,
// username and gender to the database, then redirect.

// If logging in, check if the user has setup an account, and if they havnt send an error.

function setupSignUpListener() {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {};

    new FormData(form).forEach((value, key) => {
      formData[key] = value.toLowerCase();
    });

    console.log(formData);

    fb_authenticate(() => {
      verifyUsername(formData);
    });
  });
}

function verifyUsername(formData) {
  get(ref(FB_GAMEDB, `/panel/public/`)).then((snapshot) => {
    var public_data = snapshot.val();

    var username_valid = true;

    console.log(public_data);

    for (const user in public_data) {
      if (public_data[user].username === formData.username) {
        showUsernameError();
        username_valid = false;
        break;
      }
    }

    if (!username_valid) return;

    createUserAccount(formData);
  });
}

// Now set the users data in firebase.
function createUserAccount(formData) {
  // get the current users uid
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;

  console.log(user);

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
