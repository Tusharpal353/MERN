$(document).ready(function () {
  $("P").before("<h2> NOTES: </h2>");
  $("P").after("<a href='#'>Read more</a>");

  $("#btn1").click(function () {
    $(".p1").remove(); //to remove paragraph
  });

  $("#attr").click(function () {
    $("a").removeAttr("href"); //to remove link
  });

  $(".btn-add").click(function () {
    $("h1").addClass("page-header"); //add css class
    $("p").addClass("hint");
  });
  $(".btn-rmv").click(function () {
    $("h1").removeClass("page-header"); //remove css class
    $("p").removeClass("hint");
  });

  //   $("ul li").first().addClass("highlight");
  //   $("ul li").last().addClass("highlight");
  $("ul li").eq(3).addClass("highlight"); //to select specific number

  $("ul li").filter(":even").addClass("highlight");

  $("#brd").click(function () {
    $(".p1").css({ border: "solid 2px red" });
  });
});
