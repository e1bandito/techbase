import $ from "jquery";

$('.burger').on('click', function () {
  $(this).toggleClass('burger--open');
  $('.header__wrap').toggleClass('header__wrap--open');
  $('body').toggleClass('body-lock');
});
