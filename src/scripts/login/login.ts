import type { MouseEvent } from "react";
import { fb_authenticate } from "../firebase.ts";

export function login(event: MouseEvent<HTMLButtonElement>) {
  console.log(event);

  fb_authenticate()
    .then(() => {
      window.location.href = "../games";
    })
    .catch((error) => {
      console.log(error);
    });
}
