document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('resume-button');
    const resume = document.getElementById('resume-content');
    
    btn.addEventListener('click', function() {
        const isHidden = resume.style.display !== 'block';
        
        if (isHidden) {
            resume.style.display = 'block';
            btn.textContent = 'Hide Resume';
            setTimeout(() => {
                resume.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        } else {
            resume.style.display = 'none';
            btn.textContent = 'View Resume';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
