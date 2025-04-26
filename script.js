document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resume-button');
    const resumeContent = document.getElementById('resume-content');
    
    // Initially hide the resume content
    resumeContent.style.display = 'none';
    
    resumeButton.addEventListener('click', function() {
        if (resumeContent.style.display === 'none' || resumeContent.style.display === '') {
            // Show resume
            resumeContent.style.display = 'block';
            resumeButton.textContent = 'Hide Resume';
            
            // Smooth scroll to resume section
            setTimeout(() => {
                resumeContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 10);
        } else {
            // Hide resume
            resumeContent.style.display = 'none';
            resumeButton.textContent = 'View Resume';
            
            // Scroll back to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
