import { fb_authenticate } from "./firebase.mjs";
import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { FB_GAMEDB } from "./firebase.mjs";

// Steps i need to do
// First get user's prefered usename and gender maybe ✅
// Then when the sign up with google button is pressed, check if the user filled up the form
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

    verifyUsername(formData);
  });
}

function verifyUsername(formData) {
  get(ref(FB_GAMEDB, `/game/public/`)).then((snapshot) => {
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

    createUserAccount(public_data);
  });
}

export { setupSignUpListener };
