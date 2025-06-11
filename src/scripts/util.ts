export function writeStatusMessage(message: string) {
  const loginStatusMessage = document.getElementById("loginStatusMessage");
  if (loginStatusMessage) {
    loginStatusMessage.innerHTML = message;
  }
}
