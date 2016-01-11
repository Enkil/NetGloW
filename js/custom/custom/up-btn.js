

var upBtn = (function() {

    // declare private variables and/or functions

    var html = document.documentElement;
    var body = document.body;
    var upBtnSelector = document.querySelector('.up-btn');

    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

    var timerId = setTimeout(function scrollCheck() {
        if (scrollTop > 600) {
            upBtnSelector.classList.add('up-btn--isVisible');
        }
        timerId = setTimeout(scrollCheck, 200);
    }, 200);

    return {
        // declare public variables and/or functions
        scrollToTop: setTimeout(function scrollCheck() {
            if (scrollTop > 600) {
                upBtnSelector.classList.add('up-btn--isVisible');
            }
            timerId = setTimeout(scrollCheck, 200);
        }, 200)

    };

})();

