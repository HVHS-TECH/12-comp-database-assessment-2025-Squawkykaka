import { fb_initialise } from "./firebase.mts";
import { setupSignUpListener } from "./login-manager.mts";


document.addEventListener("DOMContentLoaded", () => {
    setupSignUpListener()
    fb_initialise()
});
