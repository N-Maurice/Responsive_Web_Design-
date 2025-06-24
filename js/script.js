// Download Resume
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'doc/My_Resume.pdf';
  link.download = 'Maurice_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// send email script

(function () {
  emailjs.init("VLomLX9S-PoOBqxlS");
})();

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function sendEmail(form) {
  const email = form.email.value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  emailjs.sendForm("maurice", "template_28piqug", form)
    .then(() => alert("Message sent successfully!"))
    .catch(error => alert("Sending failed: " + JSON.stringify(error)));

  return false;
}
// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('themeToggle');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Load theme preference from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('themeToggle').textContent = 'Dark Mode';
  }
});

// Smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll to "About" on Know More button
const knowMoreBtn = document.querySelector('.btn');
if (knowMoreBtn) {
  knowMoreBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆';
scrollBtn.id = 'scrollTopBtn';
scrollBtn.style.display = 'none';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.border = 'none';
scrollBtn.style.background = '#ff9933';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

