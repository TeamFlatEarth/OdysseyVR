document.addEventListener("DOMContentLoaded", function(event) { 


var items = document.querySelectorAll(".whoosh");
 
// code for the isElementInViewport function
 


window.addEventListener("scroll", callbackFunc);

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
      items[i].classList.add("in-view");
  };
}

});
