document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resume-button');
    const resumeContent = document.getElementById('resume-content');
    
    resumeButton.addEventListener('click', function() {
        if (resumeContent.classList.contains('show')) {
            // Hide resume
            resumeContent.classList.remove('show');
            resumeButton.textContent = 'View Resume';
            
            // Scroll to top after animation completes
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                resumeContent.style.display = 'none';
            }, 300);
        } else {
            // Show resume
            resumeContent.style.display = 'block';
            setTimeout(() => {
                resumeContent.classList.add('show');
                resumeButton.textContent = 'Hide Resume';
                
                // Scroll to resume
                resumeContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 10);
        }
    });
});
