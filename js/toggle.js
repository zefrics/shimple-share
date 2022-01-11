window.onload = function(){

  var i; 

  // 메뉴 Accordion

  var acc = document.getElementsByClassName("accordion");
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("selected");
      var sub = this.nextElementSibling;
      if (sub.style.maxHeight) {
        sub.style.maxHeight = null;
      } else {
        sub.style.maxHeight = sub.scrollHeight + "px";
      } 
    });
  }
}


