document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('resume-button');
    const resume = document.getElementById('resume-content');
    
    btn.addEventListener('click', function() {
        if (resume.classList.contains('show')) {
            // Hide resume
            resume.classList.remove('show');
            setTimeout(() => {
                resume.style.display = 'none';
                btn.textContent = 'View Resume';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 300);
        } else {
            // Show resume
            resume.style.display = 'block';
            // Force reflow before adding class
            void resume.offsetHeight;
            resume.classList.add('show');
            btn.textContent = 'Hide Resume';
            setTimeout(() => {
                resume.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    });
});
