$(document).ready(function () {
  $("#form1").on("submit", function (event) {
    event.preventDefault();
    let dados = $(this).serialize();

    $.ajax({
      url: "controller.php",
      method: "post",
      dataType: "json",
      data: dados,
      success: function (response) {
        $("#result").html(response);
      },
    });
  });
});
