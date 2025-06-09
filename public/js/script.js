const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

// Toggle menu
toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Mencegah event bubbling
  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Tutup saat klik di luar menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu =
    menu.contains(e.target) || toggleBtn.contains(e.target);
  if (!isClickInsideMenu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});
