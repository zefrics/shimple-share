function selectBox() {
  var x = document.querySelector(".selectbox");
  // var y = document.querySelector("#monthly");
  x.classList.toggle("hide");
}

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


// 예약 생성 열고 닫기
function modalRCreateOpen1() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-create1");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
  var z = document.querySelector("#modal-r-create1 select");
  z.focus();
}
function modalRCreateClose1() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-create1");
  x.classList.add("hide");
}
function modalRCreateOpen2() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-create2");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
  var z = document.querySelector("#modal-r-create2 select");
  z.focus();
}
function modalRCreateClose2() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-create2");
  x.classList.add("hide");
}

function modalRCreateOpen3() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-create3");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
  var z = document.querySelector("#modal-r-create3 select");
  z.focus();
}
function modalRCreateClose3() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-create3");
  x.classList.add("hide");
}

// 예약 수정 열고 닫기
function modalRModifyOpen1() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-modify1");
  x.classList.remove("hide");
  var y = document.querySelector("#modal-r-read1");
  y.classList.add("hide");
}
function modalRModifyClose1() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-modify1");
  x.classList.add("hide");
}
function modalRModifyOpen2() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-modify2");
  x.classList.remove("hide");
  var y = document.querySelector("#modal-r-read2");
  y.classList.add("hide");
}
function modalRModifyClose2() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-modify2");
  x.classList.add("hide");
}
function modalRModifyOpen3() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-modify3");
  x.classList.remove("hide");
  var y = document.querySelector("#modal-r-read3");
  y.classList.add("hide");
}
function modalRModifyClose3() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-modify3");
  x.classList.add("hide");
}

// 예약 조회 열고 닫기
function modalRReadOpen1() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-read1");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
}
function modalRReadClose1() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-read1");
  x.classList.add("hide");
}
function modalRReadOpen2() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-read2");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
}
function modalRReadClose2() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-read2");
  x.classList.add("hide");
}
function modalRReadOpen3() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-r-read3");
  x.classList.remove("hide");
  var y = document.querySelector(".type-hover");
  y.classList.add("hide");
}
function modalRReadClose3() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-r-read3");
  x.classList.add("hide");
}



function modalCReadOpen1() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-c-read1");
  x.classList.remove("hide");
}
function modalCReadClose1() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-c-read1");
  x.classList.add("hide");
}
function modalCReadOpen2() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-c-read2");
  x.classList.remove("hide");
}
function modalCReadClose2() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-c-read2");
  x.classList.add("hide");
}

function modalCCreateOpen() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-c-create");
  x.classList.remove("hide");
}
function modalCCreateClose() {
  document.body.classList.remove("not_scroll");
  var x = document.querySelector("#modal-c-create");
  x.classList.add("hide");
}

function modalCModifyOpen() {
  document.body.classList.add("not_scroll");
  var x = document.querySelector("#modal-c-modify");
  x.classList.remove("hide");
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


// 반자동 SMS
function popupSMS1Open() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-sms1");
  y.classList.remove("hide");
}
function popupSMS1Close() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-sms1");
  y.classList.add("hide");
}

// 수동 SMS
function popupSMS2Open() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-sms2");
  y.classList.remove("hide");
}
function popupSMS2Close() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-sms2");
  y.classList.add("hide");
}

// 문의 사항 작성
function popupQuestionOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-question");
  y.classList.remove("hide");
}
function popupQuestionClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-question");
  y.classList.add("hide");
}




// 질문
function popupAskOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-ask");
  y.classList.remove("hide");
}
function popupAskClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-ask");
  y.classList.add("hide");
}

// 성공
function popupSuccessOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-success");
  y.classList.remove("hide");
}
function popupSuccessClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-success");
  y.classList.add("hide");
}

// 실패
function popupErrorOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-error");
  y.classList.remove("hide");
}
function popupErrorClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-error");
  y.classList.add("hide");
}

// 탈출
function popupEscapeOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-escape");
  y.classList.remove("hide");
}
function popupEscapeClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-escape");
  y.classList.add("hide");
}

// 알림
function popupNoticeOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-notice");
  y.classList.remove("hide");
}
function popupNoticeClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-notice");
  y.classList.add("hide");
}


// 숙소 리스트
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

// 다른 숙소 정보 불러오기 Popup
function other1Open() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#other1");
  y.classList.remove("hide");
}
function other1Close() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#other1");
  y.classList.add("hide");
}
function other1Alert() {
  confirm ("해당 숙소 정보로 덮어쓰기 하시겠습니까?")
}

// 다른 숙소 공휴일 정보 불러오기 Popup
function other2Open() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#other2");
  y.classList.remove("hide");
}
function other2Close() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#other2");
  y.classList.add("hide");
}
function other2Alert() {
  confirm ("해당 공휴일 정보로 덮어쓰기 하시겠습니까?")
}

// 다른 객실 정보 불러오기 Popup
function other3Open() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#other3");
  y.classList.remove("hide");
}
function other3Close() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#other3");
  y.classList.add("hide");
}
function other3Alert() {
  confirm ("해당 객실 타입 정보로 덮어쓰기 하시겠습니까?")
}


// 예약 생성 Popup
function popupRCreateOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-r-create");
  y.classList.remove("hide");
}
function popupRCreateClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-r-create");
  y.classList.add("hide");
}

// 예약 수정 Popup
function popupRModifyOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-r-modify");
  y.classList.remove("hide");
}
function popupRModifyClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-r-modify");
  y.classList.add("hide");
}

// 예약 취소 생성 Popup
function popupCCreateOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-c-create");
  y.classList.remove("hide");
}
function popupCCreateClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-c-create");
  y.classList.add("hide");
}

// 예약 취소 수정 Popup
function popupCModifyOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-c-modify");
  y.classList.remove("hide");
}
function popupCModifyClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-c-modify");
  y.classList.add("hide");
}

// 방막기 Popup
function popupRoomblockOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-roomblock");
  y.classList.remove("hide");
}
function popupRoomblockClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-roomblock");
  y.classList.add("hide");
}

// 방열기 Popup
function popupRoomopenOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-roomopen");
  y.classList.remove("hide");
}
function popupRoomopenClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-roomopen");
  y.classList.add("hide");
}

// 객실 이동 Popup
function popupRoommoveOpen() {
  document.body.classList.add("not_scroll");
  var y = document.querySelector("#popup-roommove");
  y.classList.remove("hide");
}
function popupRoommoveClose() {
  document.body.classList.remove("not_scroll");
  var y = document.querySelector("#popup-roommove");
  y.classList.add("hide");
}


// 월간 달력 hover
function hoverIn(e) {
  var x = e.querySelector(".type-hover");
  x.classList.remove("hide");
}

function hoverOut(e) {
  var x = e.querySelector(".type-hover");
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