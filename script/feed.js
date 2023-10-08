//Feed page
const icons = document.querySelectorAll(".post-header-left");

icons.forEach((icon) => {
  console.log(icon);
  icon.addEventListener("click", () => {
    window.location.href = "account.html";
  });
});
