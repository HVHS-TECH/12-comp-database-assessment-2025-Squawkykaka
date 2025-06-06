import { fb_initialise, fb_authenticate } from "./firebase.mjs";
import { setupSignUpListener } from "./login-manager.mjs";

window.fb_authenticate = fb_authenticate;

fb_initialise();
setupSignUpListener();
