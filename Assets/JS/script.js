window.addEventListener("load", function() {
    console.log("Page fully loaded");
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Set a delay of 2 seconds before hiding the loading screen and showing the main content
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000); // 2000 milliseconds = 2 seconds
});
