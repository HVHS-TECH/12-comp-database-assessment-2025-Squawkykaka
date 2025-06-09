import { fb_initialise } from "./firebase";
import { setupSignUpListener } from "./login-manager";


document.addEventListener("DOMContentLoaded", () => {
    setupSignUpListener()
    fb_initialise()
});
