/*
* Function runs on the doc, checking if a scroll action has happened. 
* If the page scrolls down, fade.
* If the page scrolls up, appear.
* @return void
*/

(function ($) {
    $(document).ready(function () {
        var prevScrollTop = 0;
        const scrollDelta = 5;
        $(window).scroll(function (event) {
            var currScrollTop = $(this).scrollTop();
            var scrollDiff = currScrollTop - prevScrollTop;
            if (currScrollTop > prevScrollTop) {
                $('.navbar').fadeOut();
            } else {
                $('.navbar').fadeIn();
            }
            prevScrollTop = currScrollTop;
        });
    });
}(jQuery));

document.getElementById('parallaxBanner1').ondragstart = function () { return false; };
