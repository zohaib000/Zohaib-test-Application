console.log("Test app loaded");

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    toggleIcon.textContent = '🌙';
  }
}

function toggleTheme() {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleIcon.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleIcon.textContent = '🌙';
  }
}

initTheme();

themeToggle.addEventListener('click', toggleTheme);
