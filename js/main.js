"use strict";

// Variable declaration
const theme = document.getElementById("theme");

// Function to change the theme
function changeTheme() {
  document.body.classList.toggle("dark");
  theme.children[0].classList.toggle("hide");
  theme.children[1].classList.toggle("hide");
}

// Event listener
theme.addEventListener("click", changeTheme);
