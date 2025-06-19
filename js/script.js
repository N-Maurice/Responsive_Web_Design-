function downloadResume() {
    const link = document.createElement('a');
    link.href = 'doc/My_Resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function toggleTheme() {
  var body = document.body;
  var button = document.getElementById('themeToggle');

  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
      button.textContent = 'Dark Mode';
  } else {
      button.textContent = 'Light Mode';
  }
}

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add interactivity to the "Know More" button
  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Create scroll to top button dynamically
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
