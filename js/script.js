$(".dev-img").click(function () {
  $(this).hide();
  $(".development").toggle();
});

$(".development").click(function () {
  $(this).hide();
  $(".dev-img").toggle();
});

$(".design-img").click(function () {
  $(this).hide();
  $(".design").toggle();
});

$(".design").click(function () {
  $(this).hide();
  $(".design-img").toggle();
});

$(".product-img").click(function () {
  $(this).hide();
  $(".product").toggle();
});

$(".product").click(function () {
  $(this).hide();
  $(".product-img").toggle();
});

$(document).ready(function () {
  $(".img1").mouseover(function () {
    $("#port").show();
  }).mouseout(function () {
    $("#port").hide();
  });
});
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[1] = 'FNAME';
  ftypes[1] = 'text';
  fnames[2] = 'LNAME';
  ftypes[2] = 'text';
  fnames[3] = 'MESSAGE';
  ftypes[3] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);