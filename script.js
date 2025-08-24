// ===============================
// Welcome Button (Home Page)
// ===============================
function welcomeMessage() {
  alert("Welcome to my personal website! 😊");
}

// ===============================
// Gallery Image Enlarger
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      const bigImage = document.createElement("img");
      bigImage.src = img.src;
      bigImage.classList.add("enlarged");

      overlay.appendChild(bigImage);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });
});

// ===============================
// Contact Form Validation
// ===============================
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠ Please fill out all fields before submitting.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("⚠ Please enter a valid email address.");
    return false;
  }

  alert("✅ Thank you, " + name + "! Your message has been received.");
  return false; // prevents page refresh
}

// ===============================
// Responsive Mobile Navigation
// ===============================
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}