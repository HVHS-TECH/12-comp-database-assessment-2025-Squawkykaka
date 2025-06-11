// import { fb_authenticate } from "../firebase";

export function setupLoginListener() {
  document.getElementById("loginButton")!.addEventListener("click", login);
}

async function login(event: Event) {
  //   const auth = await fb_authenticate();

  console.log(event);
  window.location.href = "./games";
}
