///// Section-1 CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    console.log(next);
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  // var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

  function carouselSwitcher() {
    now = $('.carousel-item').filter('.active');
    now.attr('class', 'carousel-item');
    // console.log(next);
    if(now.next('.carousel-item').length) now.next('.carousel-item').addClass('active');
    else $('.carousel-item').first().addClass('active');
  }

  var bannerTimer = setInterval(carouselSwitcher, 5000);

///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){
    
//     e.preventDefault();
        
//     var target = $(this).attr('href');
        
//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });