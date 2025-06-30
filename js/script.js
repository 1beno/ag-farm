// Navbar Active Link on Scroll
const navLinks = document.querySelectorAll("nav a[data-nav]");
const sections = Array.from(navLinks).map((link) =>
  document.getElementById(link.getAttribute("href").replace("#", ""))
);

function setActiveNav() {
  let index = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    if (rect.top <= 80) index = i;
  }
  navLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });
}
window.addEventListener("scroll", setActiveNav);
window.addEventListener("DOMContentLoaded", setActiveNav);
// ...existing code...

// Lightbox Galeri
document.querySelectorAll("#galeri img").forEach(function (img) {
  img.addEventListener("click", function () {
    document.getElementById("lightbox-img").src = this.src;
    document.getElementById("lightbox-modal").classList.remove("hidden");
  });
});
document.getElementById("lightbox-close").onclick = function () {
  document.getElementById("lightbox-modal").classList.add("hidden");
  document.getElementById("lightbox-img").src = "";
};
// Tutup modal jika klik di luar gambar
document
  .getElementById("lightbox-modal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
      document.getElementById("lightbox-img").src = "";
    }
  });

// JavaScript for Mobile Menu Toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// JavaScript for Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("form-status");

    let isValid = true;

    // Clear previous error messages
    document.getElementById("name-error").classList.add("hidden");
    document.getElementById("email-error").classList.add("hidden");
    document.getElementById("message-error").classList.add("hidden");
    formStatus.classList.add("hidden");
    formStatus.textContent = "";
    formStatus.classList.remove("text-green-300", "text-red-300");

    // Validate Name
    if (nameInput.value.trim() === "") {
      document.getElementById("name-error").classList.remove("hidden");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      emailInput.value.trim() === "" ||
      !emailRegex.test(emailInput.value.trim())
    ) {
      document.getElementById("email-error").classList.remove("hidden");
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      document.getElementById("message-error").classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // In a real application, you would send this data to a server
      // using Fetch API or XMLHttpRequest.
      // For this example, we'll just simulate a successful submission.
      formStatus.textContent =
        "Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.";
      formStatus.classList.remove("hidden");
      formStatus.classList.add("text-green-300");

      // Clear the form
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      console.log("Form Submitted (client-side):", {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      });
    } else {
      formStatus.textContent = "Mohon periksa kembali isian form Anda.";
      formStatus.classList.remove("hidden");
      formStatus.classList.add("text-red-300");
    }
  });

// Kontak form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("form-status");
    let isValid = true;
    document.getElementById("name-error").classList.add("hidden");
    document.getElementById("message-error").classList.add("hidden");
    formStatus.classList.add("hidden");
    formStatus.textContent = "";
    formStatus.classList.remove("text-green-300", "text-red-300");
    if (nameInput.value.trim() === "") {
      document.getElementById("name-error").classList.remove("hidden");
      isValid = false;
    }
    if (messageInput.value.trim() === "") {
      document.getElementById("message-error").classList.remove("hidden");
      isValid = false;
    }
    if (isValid) {
      const waNumber = "6282125611692";
      const text = encodeURIComponent(
        `Halo Peternakan Kambing Agus Gabriel,\nSaya *${nameInput.value.trim()}* ingin bertanya:\n${messageInput.value.trim()}`
      );
      window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    } else {
      formStatus.textContent = "Mohon periksa kembali isian form Anda.";
      formStatus.classList.remove("hidden");
      formStatus.classList.add("text-red-300");
    }
  });

// Footer Year Update
document.getElementById("year").textContent = new Date().getFullYear();
