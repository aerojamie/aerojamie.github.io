document.addEventListener('DOMContentLoaded', function() {
    const sectionSwitcher = document.getElementById('section-switcher');

    // Function to set the dropdown to the current page
    function setActiveDropdownOption() {
        if (!sectionSwitcher) return;

        // Get the current page's filename (e.g., "resume.html", "index.html")
        let currentPageFile = window.location.pathname.split("/").pop();
        if (currentPageFile === "" || !currentPageFile.includes(".html")) { // Handles root path
            currentPageFile = "index.html";
        }

        // Find the option that matches the current page and select it
        for (let i = 0; i < sectionSwitcher.options.length; i++) {
            if (sectionSwitcher.options[i].value === currentPageFile) {
                sectionSwitcher.selectedIndex = i;
                break;
            }
        }
    }

    if (sectionSwitcher) {
        // Set the active option on page load
        setActiveDropdownOption();

        // Add event listener for when the dropdown selection changes
        sectionSwitcher.addEventListener('change', function() {
            if (this.value) { // Ensure a value (a filename) is selected
                window.location.href = this.value; // Navigate to the selected HTML page
            }
        });
    }
});
