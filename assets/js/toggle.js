"use strict";

// target element
// const body = document.getElementsByTagName('body')[0];
const toggleOn = document.getElementsByClassName("toggle-on")[0];
const toggleOff = document.getElementsByClassName("toggle-off")[0];
const toggleMode = document.getElementsByClassName("toggle-mode")[0];

document.addEventListener('DOMContentLoaded', (e) => {
    setSystemDefaultTheme()
})

toggleOff.addEventListener("click", (e) => {
  toggleOff.classList.add("hidden");
  toggleOn.classList.remove("hidden");
  setDarkLightMode()
});

toggleOn.addEventListener("click", (e) => {
  toggleOn.classList.add("hidden");
  toggleOff.classList.remove("hidden");
  setDarkLightMode()
});

function setDarkLightMode() {
  const rootElement = document.documentElement;

  // Toggle the dark class
  if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    localStorage.setItem("theme", "light"); // Save preference
    toggleMode.innerHTML = localStorage.getItem('theme');
  } else {
    rootElement.classList.add("dark");
    localStorage.setItem("theme", "dark"); // Save preference
    toggleMode.innerHTML = localStorage.getItem('theme');
  }
}


function setSystemDefaultTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
        toggleMode.innerHTML = localStorage.getItem('theme');
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light"); 
        toggleMode.innerHTML = localStorage.getItem('theme');
        document.documentElement.classList.add("light");
      }
}