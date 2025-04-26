document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resume-button');
    const resumeContent = document.getElementById('resume-content');
    
    // Initially hide the resume content
    resumeContent.style.display = 'none';
    
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
            }, 300);
        } else {
            // Show resume
            resumeContent.classList.add('show');
            resumeButton.textContent = 'Hide Resume';
            
            // Scroll to resume after a slight delay to allow display change
            setTimeout(() => {
                resumeContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 50);
        }
    });
    
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill');
    interactiveElements.forEach(el => {
        el.style.transition = 'all 0.3s ease';
    });
});
