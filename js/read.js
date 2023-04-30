$(document).ready(function () {
  $(".item_text").after("<div class='services_button'>Показать ещё</div>");

  $(".services_button").on("click", function () {
    let bodyDrop = $(this).prev(".item_text");
    bodyDrop.toggleClass("open");
    if (bodyDrop.hasClass("open")) {
      bodyDrop.css("-webkit-line-clamp", "100");
      $(this).text("Свернуть");
    } else {
      setTimeout(function () {
        bodyDrop.css("-webkit-line-clamp", "4");
      }, 800);
      $(this).text("Показать ещё");
    }
  });
});
