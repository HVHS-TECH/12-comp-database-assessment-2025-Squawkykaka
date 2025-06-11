import { fb_initialise } from "./firebase.ts";
import { setupLoginListener } from "./login/login.ts";
import { setupSignUpListener } from "./login/signup.ts";

document.addEventListener("DOMContentLoaded", () => {
  setupSignUpListener();
  setupLoginListener();
  fb_initialise();
});
