document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  });
  