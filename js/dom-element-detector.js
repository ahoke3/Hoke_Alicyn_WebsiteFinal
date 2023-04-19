
/**
 * ========================================================
 * this function execute when DOM element ready
 * ===========================================================
 */

$(document).ready(function () {

    // animation  start
    // when trigged specific section
    $(function () {
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            function domElemDetector(el) {
                if ($(el).length) {
                    let elemOffsetTop = el.offset().top - 400;
                    let elemHeight = el.outerHeight();
                    let windowHeight = $(window).outerHeight();
                    if (scrollTop >= (elemOffsetTop - (windowHeight / 2))) {
                        setTimeout(function () {
                            el.addClass('active');
                        }, 100);
                    } 
                    /*
                    else {
                        el.removeClass('active');
                    }
                    */
                }
            }
            /* Add animations here */
            domElemDetector($('.fade--up'));
            domElemDetector($('.scale--up'));
            domElemDetector($('.fade--into-right'));
            domElemDetector($('.fade--into-left'));
            domElemDetector($('.fade--into-right2'));
            domElemDetector($('.fade--into-left2'));
            domElemDetector($('.fade--in-4'));
            domElemDetector($('.fade--in-5'));
            domElemDetector($('.fade--in-6'));
        });
    });


});


