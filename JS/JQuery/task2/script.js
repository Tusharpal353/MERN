//DROPDOWN ALERT
$(document).ready(function () {
  var one = $("#list");
  console.log(one);
  var two = $(`#list`);

  $(`#list`).change(function () {
    var three = $("#list option:selected").text();
    alert(`Text selected is ${three}`);
  });
});
