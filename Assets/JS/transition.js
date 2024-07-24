document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    const pageContainer = document.querySelector('.page-container');
    const introText = document.querySelector('.intro-text');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Add fade-out class to text content
            introText.classList.add('fade-out');

            // Wait for the fade-out transition to complete
            setTimeout(() => {
                fetch(link.href)
                    .then(response => response.text())
                    .then(data => {
                        // Parse the new page content
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(data, 'text/html');
                        const newText = doc.querySelector('.intro-text').innerHTML;

                        // Update the current page with new content
                        introText.innerHTML = newText;

                        // Prepare for fade-in
                        introText.classList.remove('fade-out');
                        introText.classList.add('fade-in');

                        // Ensure reflow to start transition
                        void introText.offsetWidth;

                        // Start fade-in transition
                        introText.classList.add('loaded');
                    });
            }, 500); // Match the duration of the transition
        });
    });

    // Ensure new page transition
    window.addEventListener('load', () => {
        if (introText) {
            introText.classList.add('fade-in');
            setTimeout(() => {
                introText.classList.add('loaded');
            }, 0);
        }
    });
});
