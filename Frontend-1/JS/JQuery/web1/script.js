$(document).ready(function () {
  {
    $("#heading").css("background", "Blue");
    $(".heading1").css("background", "green");
    $("h2").css("background", "red");
  }

  $(".btn-hide").click(function () {
    $(".np").hide(500);
  });
  $(".btn-show").click(function () {
    $(".np").show(500);
  });
  $(".btn-toogle").click(function () {
    $(".np").toggle(500);
  });
  $(".read-more").click(function () {});
});
