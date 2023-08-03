function minus(e) {
  var target = e.parentNode.querySelector("input");
  target.stepDown(1);
}

function plus(e) {
  var target = e.parentNode.querySelector("input");
  target.stepUp(1);
}