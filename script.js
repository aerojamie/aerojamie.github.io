document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resume-button');
    const resumeContent = document.getElementById('resume-content');
    
    // Simple toggle function
    function toggleResume() {
        if (resumeContent.classList.contains('visible')) {
            // Hide resume
            resumeContent.classList.remove('visible');
            setTimeout(() => {
                resumeContent.style.display = 'none';
                resumeButton.textContent = 'View Resume';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 300); // Match this with CSS transition time
        } else {
            // Show resume
            resumeContent.style.display = 'block';
            // Trigger reflow
            void resumeContent.offsetWidth;
            resumeContent.classList.add('visible');
            resumeButton.textContent = 'Hide Resume';
            setTimeout(() => {
                resumeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }

    // Add click event
    resumeButton.addEventListener('click', toggleResume);
});
