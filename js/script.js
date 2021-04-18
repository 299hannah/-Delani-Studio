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

$(".product-img").click(function(){
  $(this).hide();
  $(".product").toggle();
});
$(".product").click(function(){
  $(this).hide();
  $(".product-img").toggle();
});

$(document).ready(function(){
  $(".img1").mouseover(function(){
    $("#port").show();
  }).mouseout(function(){
    $("#port").hide();
  });
});

