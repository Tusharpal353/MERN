$(document).ready(function () {
  $(".btn-fadeOut").click(function () {
    $("p").fadeOut(2000);
  });
  $(".btn-fadeIn").click(function () {
    $("p").fadeIn(2000);
  });
  $(".btn-fadeToggle").click(function () {
    $("p").fadeToggle(2000);
  });

  //slide
  $(".btn-slideUp").click(function () {
    $("p").slideUp(2000);
  });
  $(".btn-slideOut").click(function () {
    $("p").slideDown(2000);
  });
  $(".btn-slideToggle").click(function () {
    $("p").slideToggle(2000);
  });
});
