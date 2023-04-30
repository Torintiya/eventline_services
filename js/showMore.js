$(document).ready(function () {
  var list = $(".services_card .card");
  var numToShow = 6; //сколько показывать элементов
  var button = $(".show_more");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});
