window.onload = function(){

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     *
     *  TODO: незабыть в мануал написать про использование
     */
    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original" // original-set
    });

    // Top menu toggler
    var toggler = document.querySelector('.js-top-toggler');
    var menuLinks = document.querySelectorAll('.top-menu__link');
    toggler.onclick = function(e){
        e.preventDefault();
        toggler.classList.toggle('top-menu__toggler--close');
        for (i=0; i < menuLinks.length; i++) {
            menuLinks[i].classList.toggle('top-menu__link--mobile-open');
        }
    };

    // Set up Slick carousel to index top slider
    $('.js-top-slider').slick({
        //lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    // Set up Slick carousel to index speakers slider
    $('.js-speakers-slider').slick({
        lazyLoad: 'progressive',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        //variableWidth: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev" title="Previous Speaker"></button>',
        nextArrow: '<button type="button" class="slick-next" title="Next Speaker"></button>'
    });

    // Set up Slick carousel to index programm slider
    $('.js-programm-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //variableWidth: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev" title="Previous Programm date"></button>',
        nextArrow: '<button type="button" class="slick-next" title="Next Programm date"></button>'
    });

    // Set up Slick carousel to programm slider
    $('.js-programmpage-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="programm-slider__prev" title="Previous Programm date">1.07.2016</button>',
        nextArrow: '<button type="button" class="programm-slider__next" title="Next Programm date">3.07.2016</button>'
    });

    // Google Map
    findMapAndInit('map');

    form = $("form");

    form.each( function() {
        $(this).validate({});
    } );

    form.submit (function(event) {
        if (form.valid())
        {
            $('.submission').hide();
            $('.aftersubmit').show();

            $.ajax({
                type: form.attr("method"), // use method specified in form attributes
                url: form.attr("action"), // use action specified in form attributes
                data: form.serialize(), // encodes set of form elements as string for submission
                success: function(data) {
                    // get response from servlet and display on page via jQuery
                }
            });
        }
        event.preventDefault(); // stop form from redirecting to java servlet page
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });

    $(".visible").click(function(){
        $(this).siblings().toggleClass("show");
    });
    //upBtn.scrollToTop();

    $('.speech').click(function(){
        $(this).find('.speech__anounce').toggleClass('speech__anounce--open');
    });
};


// Set map
function initMap(mapIDCurrent) {
    var myLatlng = new google.maps.LatLng(59.949700, 30.396418); // Marker coordinates
    var myOptions = { // Map settings
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //styles:[{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };

    var image = 'img/map-marker.png'; //  image

    var marker = new google.maps.Marker({ // Init marker
        position: myLatlng,
        map: map,
        title:"Networks in the Global World",
        icon: image
    });

    var map = new google.maps.Map(mapIDCurrent, myOptions); // Init map
    marker.setMap(map);
}

function findMapAndInit(mapID) {
    if (document.getElementById(mapID)) {
        var mapIDCurrent = document.getElementById(mapID);
        if (mapIDCurrent){
            initMap(mapIDCurrent);
        }
    }
}

//google.maps.event.addDomListener(window, "load", findMapAndInit(mapID));

$("p.visible").click(function(){
   $(this).siblings().show();
});


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


 // Video
$('.gallery-video-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.gallery-video-thumbs'
});
$('.gallery-video-thumbs').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.gallery-video-main',
  centerPadding: '0',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
 // Photo
$('.gallery-photo-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.gallery-photo-thumbs'
});
$('.gallery-photo-thumbs').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.gallery-photo-main',
  centerPadding: '0',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true
});