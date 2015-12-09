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
        lazyLoad: 'progressive',
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

    // Google Map
    findMapAndInit('map');
};


// Set map
function initMap(mapIDCurrent) {
    var myLatlng = new google.maps.LatLng(60.000186, 30.315975); // Marker coordinates
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
