document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const clone = slider.innerHTML; // Clone the images
    slider.innerHTML += clone; // Append the clone to the slider
  
    let scrollAmount = 0; // Track the current scroll position
    const speed = 1; // Set the speed of sliding (pixels per frame)
  
    function slideImages() {
        scrollAmount += speed; // Increment scroll position
        if (scrollAmount >= slider.scrollWidth / 2) {
            scrollAmount = 0; // Reset to the start when reaching halfway
        }
        slider.scrollLeft = scrollAmount; // Apply the scroll position
        requestAnimationFrame(slideImages); // Continuously call this function
    }
  
    slideImages(); // Start sliding
  });