//CHECK BOX SUBMIT BUTTON
$(document).ready(function () {
  var value0 = $("#box");
  // var value1 = $("#box").val();
  var value2 = $("#box").is(":checked");
  var set = [0].disabled;

  $("#box").change(function () {
    if ($(this).is(":checked")) {
      $("#btn").removeAttr("disabled");
    } else {
      $("#btn").attr("disabled", "disabled");
    }
  });

  // console.log(value0);
  // console.log(`value1 ${value1}`);
  // console.log(`checked ${value2}`);

  // if (value2 === true) {
  //   console.log("can submit");
  //   $("#btn").attr(set);
  // } else {
  //   $("#btn").attr(set);
  //$("#btn").html("<button disabled >Submit</button>");
  //console.log("cannot submit");
  // }

  //BTN

  // var btnval3 = $("#btn").is(":enabled");

  // console.log(btnval3);
});
// $(document).ready(function () {
//   $("#btn").click(function () {
//     $("#btn").attr({
//       class: "btn1",
//     });
//   });
// });

// console.log($("#btn"));
