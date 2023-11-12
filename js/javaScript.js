function setupSlider(sliderClass, sliderBlock, prevBtn, nextBtn) {
    const slider = document.querySelector(sliderClass);
    const prevButton = document.querySelector(prevBtn);
    const nextButton = document.querySelector(nextBtn);
    const slides = Array.from(slider.querySelectorAll(sliderBlock));
    const slideCount = slides.length;
    let slideIndex = 0;
  
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
  
    function showPreviousSlide() {
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      updateSlider();
    }
  
    function showNextSlide() {
      slideIndex = (slideIndex + 1) % slideCount;
      updateSlider();
    }
  
    function updateSlider() {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.style.display = 'flex';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    updateSlider();
  }
  
  setupSlider('.header-slider', '.header__slider-block', '.header__prev-button', '.header__next-button');
  setupSlider('.guarantees-slider', '.guarantees__slider-block', '.guarantees__prev-button', '.guarantees__next-button');