$(document).ready(function () {
  var inputbtn = $(".input");
  console.log(inputbtn);
  $("button").click(function () {
    var buttonclicked = $(this).html();
    console.log(buttonclicked);


    
    $(".input").val(buttonclicked);



    var prevalue= $(".input").val(buttonclicked);
    var currentval=;
  });
});
