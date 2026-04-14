// Theme toggle
const body = document.body;
const saved = localStorage.getItem('resume-theme') || 'light';
if (saved === 'dark') body.classList.add('dark');

document.getElementById('theme-toggle').addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('resume-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Print
document.getElementById('print-btn').addEventListener('click', () => window.print());

// Animate cert bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.cert-fill').forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = target; }, 300);
  });
});
