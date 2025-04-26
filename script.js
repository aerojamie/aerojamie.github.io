// Debugging version - will show alerts to confirm each step
document.addEventListener('DOMContentLoaded', function() {
    alert('Script loaded!'); // Debugging check 1
    
    const btn = document.getElementById('resume-button');
    const resume = document.getElementById('resume-content');
    
    if (!btn) alert('Could not find button!');
    if (!resume) alert('Could not find resume content!');
    
    if (btn && resume) {
        alert('Both elements found!'); // Debugging check 2
        
        btn.addEventListener('click', function() {
            alert('Button clicked!'); // Debugging check 3
            
            if (resume.style.display === 'block') {
                // Hide resume
                resume.style.display = 'none';
                btn.textContent = 'View Resume';
                window.scrollTo({ top: 0, behavior: 'smooth' });
                alert('Resume hidden!'); // Debugging check 4
            } else {
                // Show resume
                resume.style.display = 'block';
                btn.textContent = 'Hide Resume';
                setTimeout(() => {
                    resume.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    alert('Resume shown!'); // Debugging check 5
                }, 50);
            }
        });
    }
});
