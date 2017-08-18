//basics of hiding nav bar, gotta figure it out my self further for hide on scroll down, show on scroll up.
//gonna have to math it

(function ($) {
  $(document).ready(function(){
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 10) {
				$('.navbar').fadeOut();
			} else {
				$('.navbar').fadeIn();
			}
		});

	
	});

});
  }(jQuery));

  document.getElementById('parallaxBanner1').ondragstart = function () { return false; };
