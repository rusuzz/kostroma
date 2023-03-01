const btn = document.querySelector(".header__burger-btn");
const header = document.querySelector(".header");
// const open = document.querySelector('.open');

btn.addEventListener("click", () => {
  header.classList.toggle("open");
});
