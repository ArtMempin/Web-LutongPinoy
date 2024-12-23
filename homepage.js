/*Homepage*/
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
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow-container .slide");
    let currentSlide = 0;
  
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
      showSlide(currentSlide);
  }
  
  // Initialize the first slide
  showSlide(currentSlide);
  
  // Automatically change slides every 5 seconds
  setInterval(nextSlide, 5000);
  });