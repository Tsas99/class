const usernameInput = document.getElementById("usernameInput");
const passwordInputfirst = document.getElementById("passwordInputFirst");
const passwordInputSecond = document.getElementById("passwordInputSecond");
const registerButton = document.getElementById("register");

registerButton.addEventListener("click", () => {
  if (
    !usernameInput.value ||
    !passwordInputfirst.value ||
    !passwordInputSecond.value
  ) {
    alert("Ali neg ni hooson baina");
    return;
  }
  if (passwordInputfirst.value != passwordInputSecond.value) {
    alert("Hoyor password ni taaraxgvi bn");
    return;
  }

  window.localStorage.setItem(usernameInput.value, passwordInputfirst.value);
  alert("success");

  window.location.href = "./login.html";
});
