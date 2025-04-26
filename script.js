document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('resume-button');
    const resume = document.getElementById('resume-content');
    
    // Simple toggle with fade effect
    btn.addEventListener('click', function() {
        if (resume.classList.contains('show')) {
            // Hide resume with fade out
            resume.classList.remove('show');
            setTimeout(() => {
                resume.style.display = 'none';
                btn.textContent = 'View Resume';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 300); // Matches CSS transition time
        } else {
            // Show resume with fade in
            resume.style.display = 'block';
            // Force reflow to enable transition
            void resume.offsetHeight;
            resume.classList.add('show');
            btn.textContent = 'Hide Resume';
            setTimeout(() => {
                resume.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    });
});
