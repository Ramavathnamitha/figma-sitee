// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = "Thanks! Your message was sent (demo).";
  e.target.reset();
});
