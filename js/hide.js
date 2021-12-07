function weekly() {
  var x = document.querySelector("#weekly");
  var y = document.querySelector("#monthly");
  x.classList.remove("hide");
  y.classList.add("hide");
}
function monthly() {
  var x = document.querySelector("#weekly");
  var y = document.querySelector("#monthly");
  x.classList.add("hide");
  y.classList.remove("hide");
}

function date() {
  var x = document.querySelectorAll(".past-month .type-group");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("hide");
  }

  var y = document.querySelector(".pastview");
  y.classList.toggle("active");
}

function rateMonth() {
  var x = document.querySelectorAll(".calendar-month .rate");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("hide");
  }

  var y = document.querySelector(".rateview-month");
  y.classList.toggle("active");
}

function rateWeek() {
  var a = document.querySelectorAll(".room-contents .block");
  var x = document.querySelectorAll(".room-contents .room-customer");
  var y = document.querySelectorAll(".room-contents .rate");
  var i;
  for (i = 0; i < a.length; i++) {
    a[i].classList.toggle("hide");
  }
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("hide");
  }
  for (i = 0; i < y.length; i++) {
    y[i].classList.toggle("hide");
  }

  var z = document.querySelector(".rateview-week");
  z.classList.toggle("active");
}

function checkWeek() {
  var a = document.querySelector("#check-row");
  a.classList.toggle("hide");

  var x = document.querySelector(".checkview-week");
  x.classList.toggle("active");
  var y = document.querySelectorAll(".on-week .block");
  for (i = 0; i < y.length; i++) {
    y[i].classList.toggle("hide");
  }
  var z = document.querySelectorAll(".on-week .room-checkbox");
  for (i = 0; i < z.length; i++) {
    z[i].classList.toggle("hide");
  }
}


function roomChange() {
  var x = document.querySelectorAll(".spare");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("hide");
  }
  var y = document.querySelector(".room-move");
  y.classList.toggle("active");

  var z = document.querySelector("#bt-roommove");
  z.classList.toggle("hide");
}


//Modal



function modalRCreateOpen() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-create");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
  var z = document.querySelector("#modal-r-create select");
  z.focus();
}
function modalRCreateClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-create");
  x.classList.add("hide");
}

function modalRModifyOpen() {
  var x = document.querySelector("#modal-r-modify");
  x.classList.remove("hide");
  var y = document.querySelector("#modal-r-read");
  y.classList.add("hide");
}
function modalRModifyClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-modify");
  x.classList.add("hide");
}
function modalRReadOpen() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-read");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
}
function modalRReadClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-read");
  x.classList.add("hide");
}
function modalCReadOpen() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-c-read");
  x.classList.remove("hide");
}
function modalCReadClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-c-read");
  x.classList.add("hide");
}

function modalCCreateOpen() {
  var x = document.querySelector("#modal-c-create");
  x.classList.remove("hide");
}
function modalCCreateClose() {
  var x = document.querySelector("#modal-c-create");
  x.classList.add("hide");
}

function modalCModifyOpen() {
  var x = document.querySelector("#modal-c-modify");
  x.classList.remove("hide");
  var y = document.querySelector("#modal-c-read");
  y.classList.add("hide");
}
function modalCModifyClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-c-modify");
  x.classList.add("hide");
}

function modalRoomblockOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#modal-roomblock");
  y.classList.remove("hide");
}
function modalRoomblockClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#modal-roomblock");
  y.classList.add("hide");
}


// Popup

function popupListOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-list");
  y.classList.remove("hide");
}
function popupListClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-list");
  y.classList.add("hide");
}
function popupRoomopenOpen() {
  var y = document.querySelector("#popup-roomopen");
  y.classList.remove("hide");
  var z = document.querySelector("#modal-roomblock");
  z.classList.add("hide");
}
function popupRoomopenClose() {
  var y = document.querySelector("#popup-roomopen");
  y.classList.add("hide");
}
function popupRoomblockOpen() {
  var y = document.querySelector("#popup-roomblock");
  y.classList.remove("hide");
  var z = document.querySelector("#modal-roomblock");
  z.classList.add("hide");
}
function popupRoomblockClose() {
  var y = document.querySelector("#popup-roomblock");
  y.classList.add("hide");
}
function popupRoommoveClose() {
  var y = document.querySelector("#popup-roommove");
  y.classList.add("hide");
}

function hoverIn() {
  var x = document.querySelector(".type-hover");
  x.classList.remove("hide");
}

function hoverOut() {
  var x = document.querySelector(".type-hover");
  x.classList.add("hide");
}






// Bottom Popup
function btRoomblockOpen() {
  var count = 0;
  var x = document.querySelectorAll(".room-checkbox input");
  var y = document.querySelector("#bt-roomblock");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].checked == true) {
      count++;
    }
  }
  if (count > 0) {
    y.classList.remove("hide");
  } else {
    y.classList.add("hide");
  }
}

function aaaa() {
  confirm("dddd");
}
