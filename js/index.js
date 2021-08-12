let target = document.getElementById("header-content");
let button = document.getElementById("hamburger");

button.addEventListener("click", function (event) {
  target.classList.toggle("header-content_active");
});
