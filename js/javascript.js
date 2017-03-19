document.addEventListener("DOMContentLoaded", function(event) { 

var items = document.querySelectorAll(".whoosh");
var tooltipper = document.querySelectorAll(".mobile-fab-tip");
 
window.addEventListener("scroll", callbackFunc);

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
      items[i].classList.add("in-view");
      tooltipper[i].classList.add("in-view");
  };
}

});
