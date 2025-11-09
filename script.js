// Navigation tab switching logic
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});
