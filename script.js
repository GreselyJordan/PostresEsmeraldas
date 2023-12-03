const openMenu = document.querySelector("#openMenu");
const ulMenu = document.querySelector("#ulMenu");
const exitMenu = document.querySelector("#exitMenu");

openMenu.addEventListener("click", function () {
  ulMenu.classList.toggle("activate");
});


exitMenu.addEventListener("click", function () {
  ulMenu.classList.toggle("activate");
});

