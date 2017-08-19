/*
* Function runs on the doc, checking if a scroll action has happened. 
* If the page scrolls down, fade.
* If the page scrolls up, appear.
* @return void
*/

(function ($) {
    $(document).ready(function () {
        var prevScrollTop = 0;
        const scrollDelta = 50; //pixels

        $(window).scroll(function (event) {
            var currScrollTop = $(this).scrollTop();
            var scrollDiff = currScrollTop - prevScrollTop;

            if (currScrollTop < prevScrollTop) {
                $('.navbar').fadeIn();
                prevScrollTop = currScrollTop;

            }
            if (Math.abs(scrollDiff) > scrollDelta) {
                console.log(scrollDiff);
                if (currScrollTop > prevScrollTop) {
                    $('.navbar').fadeOut();
                }
                else {
                    $('.navbar').fadeIn();
                }
                prevScrollTop = currScrollTop;
            }

        });
    });
}(jQuery));


