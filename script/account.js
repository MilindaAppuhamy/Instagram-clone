//Account page
const postTab = document.querySelector(".posts-tab");
const reelTab = document.querySelector(".reels-tab");
const taggedTab = document.querySelector(".tagged-tab");

const postsBoard = document.querySelector(".posts-board");
const reelsBoard = document.querySelector(".reels-board");
const taggedBoard = document.querySelector(".tagged-board");

const loginButton = document.querySelector(".login");

postTab.addEventListener("click", () => {
  reelTab.classList.remove("active");
  taggedTab.classList.remove("active");
  postTab.classList.add("active");

  reelsBoard.classList.remove("active");
  taggedBoard.classList.remove("active");
  postsBoard.classList.add("active");
});

reelTab.addEventListener("click", () => {
  taggedTab.classList.remove("active");
  postTab.classList.remove("active");
  reelTab.classList.add("active");

  taggedBoard.classList.remove("active");
  postsBoard.classList.remove("active");
  reelsBoard.classList.add("active");
});

taggedTab.addEventListener("click", () => {
  reelTab.classList.remove("active");
  postTab.classList.remove("active");
  taggedTab.classList.add("active");

  reelsBoard.classList.remove("active");
  postsBoard.classList.remove("active");
  taggedBoard.classList.add("active");
});

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});
