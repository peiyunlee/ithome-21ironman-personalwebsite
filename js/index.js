let tar = document.getElementById("header-content");
let ham = document.getElementById("hamburger");

ham.addEventListener("click", function (event) {
  tar.classList.toggle("header-content_active");
});
