document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('resume-button');
    const resume = document.getElementById('resume-content');
    
    // Debugging checks
    if (!btn) console.error('Resume button not found!');
    if (!resume) console.error('Resume content not found!');
    
    if (btn && resume) {
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
                // Force reflow
                void resume.offsetHeight;
                resume.classList.add('show');
                btn.textContent = 'Hide Resume';
                setTimeout(() => {
                    resume.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
            }
        });
    } else {
        // Fallback - add onclick directly to button
        const fallbackBtn = document.querySelector('#resume-button');
        if (fallbackBtn) {
            fallbackBtn.onclick = function() {
                const content = document.getElementById('resume-content');
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    this.textContent = 'View Resume';
                } else {
                    content.style.display = 'block';
                    this.textContent = 'Hide Resume';
                }
            };
        }
    }
});
