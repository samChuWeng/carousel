///// Carousel CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function carouselSwitcher() {
    now = $('.carousel-item').filter('.active');
    now.attr('class', 'carousel-item');
    // console.log(next);
    if(now.next('.carousel-item').length) now.next('.carousel-item').addClass('active');
    else $('.carousel-item').first().addClass('active');
  }

  var bannerTimer = setInterval(carouselSwitcher, 5000);