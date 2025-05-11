document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.portfolio-content');
    const tabContentContainer = document.getElementById('tab-content-container');

    function switchTab(targetTabId) {
        // Hide all content sections and remove 'active' from tabs
        contentSections.forEach(section => {
            // Check if it's the section to show
            if (section.id === targetTabId) {
                section.style.display = 'block';
                // Force reflow to enable transition when adding class
                void section.offsetHeight;
                section.classList.add('show');
            } else {
                section.classList.remove('show');
                // Wait for opacity transition to finish before setting display to none
                // Ensure this timeout matches your CSS opacity transition duration (0.3s = 300ms)
                setTimeout(() => {
                    // Double check it wasn't immediately clicked again to be shown
                    if (!section.classList.contains('show')) {
                        section.style.display = 'none';
                    }
                }, 300);
            }
        });

        // Set the 'active' class on the clicked tab
        tabs.forEach(tab => {
            // dataset.tab will be "resume", "photography", etc.
            // targetTabId will be "resume-content", "photography-content", etc.
            if (tab.dataset.tab === targetTabId.replace('-content', '')) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Optional: Scroll to the top of the tab content or navigation
        if (tabContentContainer) {
             const navElement = document.querySelector('.portfolio-nav');
             if (navElement && targetTabId) { // Only scroll if a tab is being shown
                // Scroll to just above the nav tabs or the content container
                // to ensure the start of the content (or tabs) is visible
                window.scrollTo({
                    top: navElement.offsetTop - 20, // 20px buffer above nav
                    behavior: 'smooth'
                });
             }
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTabName = tab.dataset.tab; // e.g., "resume"
            const targetContentId = targetTabName + '-content'; // e.g., "resume-content"
            
            // Only switch if the clicked tab is not already active
            if (!tab.classList.contains('active')) {
                switchTab(targetContentId);
            } else {
                // If already active, maybe just ensure it's scrolled into view correctly
                 const navElement = document.querySelector('.portfolio-nav');
                 if (navElement) {
                    window.scrollTo({
                        top: navElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                 }
            }
        });
    });

    // Initialize: Ensure only the default active tab's content is visible
    // The HTML already sets "resume-content" with "show" and the "resume" tab with "active"
    // This loop ensures any non-default (non-'show') content is explicitly set to display:none initially.
    contentSections.forEach(section => {
        if (!section.classList.contains('show')) {
            section.style.display = 'none';
        } else {
            // If it's meant to be shown, ensure display is block
            section.style.display = 'block'; 
        }
    });
});
