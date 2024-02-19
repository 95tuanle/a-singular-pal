$(document).ready(function () {
  $("#image-container").width('23.33%');
  setInterval(function () {
    $("#image-container").fadeOut(function () {
      if ($("#image-container").attr("src") === "images/1.png") {
        $("#image-container").attr("src", "images/2.png");
        $("#image-container").width('23.33%');
        if ($("#button").text() === "Hide Description") {
          if ($("#image-container").attr("src") === "images/1.png") {
            $("#description").html("Clean your hands");
          } else if ($("#image-container").attr("src") === "images/2.png") {
            $("#description").html("Keep a safe distance");
          } else {
            $("#description").html("Stay home");
          }
        }
      } else if ($("#image-container").attr("src") === "images/2.png") {
        $("#image-container").attr("src", "images/3.png");
        $("#image-container").width('23.33%');
        if ($("#button").text() === "Hide Description") {
          if ($("#image-container").attr("src") === "images/1.png") {
            $("#description").html("Clean your hands");
          } else if ($("#image-container").attr("src") === "images/2.png") {
            $("#description").html("Keep a safe distance");
          } else {
            $("#description").html("Stay home");
          }
        }
      } else {
        $("#image-container").attr("src", "images/1.png");
        $("#image-container").width('23.33%');
        if ($("#button").text() === "Hide Description") {
          if ($("#image-container").attr("src") === "images/1.png") {
            $("#description").html("Clean your hands");
          } else if ($("#image-container").attr("src") === "images/2.png") {
            $("#description").html("Keep a safe distance");
          } else {
            $("#description").html("Stay home");
          }
        }
      }
    }).fadeIn();
  }, 3333);
  $("#button").click(function () {
    if ($("#button").text() === "Show Description") {
      $("#button").html("Hide Description");
      if ($("#image-container").attr("src") === "images/1.png") {
        $("#description").html("Clean your hands");
      } else if ($("#image-container").attr("src") === "images/2.png") {
        $("#description").html("Keep a safe distance");
      } else {
        $("#description").html("Stay home");
      }
    } else {
      $("#button").html("Show Description");
      $("#description").html("");
    }
  });
});