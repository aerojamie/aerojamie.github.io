(function() {
  // Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav select -> navigate
  const select = document.getElementById('section-switcher');
  if (select) {
    select.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val) window.location.href = val;
    });
  }

  // Improve keyboard focus visibility on clickable icons
  document.querySelectorAll('a, button, select').forEach(el => {
    el.addEventListener('focus', () => el.classList.add('focus-ring'));
    el.addEventListener('blur',  () => el.classList.remove('focus-ring'));
  });
})();
