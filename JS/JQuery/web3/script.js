// $(document).ready(function () {
//   $("img").click(function () {
//     $("img").animate({
//       height: "200px",
//       width: "100px",
//       marginLeft: "200px",
//       marginRight: "300px",
//       marginTop: "400px",
//       marginBottom: "500px",
//     });
//   });
// });

//ANIMATE
// $(document).ready(function () {
//   $("img").click(function () {
//     $("img").animate({ height: "200px" });
//     $("img").animate({ width: "100px" });
//     $("img").animate({ marginLeft: "200px" });
//     $("img").animate({ marginRight: "200px" });
//     $("img").animate({ marginBottom: "200px" });
//     $("img").animate({ marginTop: "200px" });
//     $("img").animate({ height: "200px" });
//   });
// });

// GETTER SETTER
// $(document).ready(function () {
//   console.log($("h2").html());
//   $("body").html("<h1>HEllo</h1>");
// });

//ATTR()
//after click the class will be assigned to it
// $(document).ready(function () {
//   $("img").click(function () {
//     $("img").attr({
//       class: "frame",
//     });
//   });
// });

$(document).ready(function () {
  $(".btn-submit").click(function () {
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    console.log(`full name = ${fullname}`);
    console.log(`Email = ${email}`);
  });
});

// $(document).ready(function () {
//   $("button").click(function () {
//     var txt = $(this).text();
//     $("#content".val(txt));
//   });
// });
