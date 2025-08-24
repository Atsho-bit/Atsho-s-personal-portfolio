function welcomeMessage() {
  alert("Welcome to my personal website! Enjoy browsing 😃");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return false;
  } else {
    alert("Thank you for contacting me, " + name + "!");
    return true;
  }
}
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
      // Create overlay
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      // Create enlarged image
      const bigImage = document.createElement("img");
      bigImage.src = img.src;
      bigImage.classList.add("enlarged");

      // Append
      overlay.appendChild(bigImage);
      document.body.appendChild(overlay);

      // Close on click
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
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
    alert("⚠️ Please fill out all fields before submitting.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return false;
  }

  // Success Message
  alert("✅ Thank you, " + name + "! Your message has been received.");
  return false; // Prevents page refresh
}

// ===============================
// Responsive Mobile Navigation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");

  // Create hamburger button
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.innerHTML = "☰"; // hamburger icon
  document.querySelector("nav").prepend(burger);

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
});
