import { fb_initialise } from "./firebase.ts";

document.addEventListener("DOMContentLoaded", () => {
  console.log("page loaded");

  fb_initialise();
});
