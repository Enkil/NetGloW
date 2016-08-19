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