import $ from 'jquery';
import slick from 'slick-carousel';

$('.reviews__slider-list').slick({
  dots: true,
  prevArrow: '.reviews__slider-btn--prev',
  nextArrow: '.reviews__slider-btn--next',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        adaptiveHeight: true
      }
    }
  ]
});
