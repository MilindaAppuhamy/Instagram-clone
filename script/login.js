//Login page
const loginButton = document.querySelector(".login-button");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (username.value.trim() === "" || password.value.trim() === "") {
    username.value.trim() === ""
      ? (username.style.border = "1px solid red")
      : (username.style.border = "none");

    password.value.trim() === ""
      ? (password.style.border = "1px solid red")
      : (password.style.border = "none");

    return;
  }

  window.location.href = "feed.html";
});
