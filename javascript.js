function navShow() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
}