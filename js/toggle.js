function detail(e) { //게시판 접고 펴는 기능
  var grand1 = e.parentNode.parentNode;  //클릭한 요소의 조상 중 row-group를 캐치
  var target1 = grand1.parentNode.querySelectorAll(".row-group"); //클릭한 게시판의 row-group들
  if (grand1.classList.contains("selected")) { //클릭한 row-group이 열려있으면 닫고
    grand1.classList.remove("selected"); }
  else {
    for (var j = 0; j < target1.length; j++) { //그렇지 않으면 클릭한 게시판의 모든 row-group을 일단 닫은 후 클릭한 요소를 연다
      target1[j].classList.remove("selected");
    };
    grand1.classList.add("selected");
  }
}

function filter(e) { //필터 접고 펴는 기능
  var child1 = e.parentNode.querySelector(".options"); //클릭한 요소의 자손 중 options를 캐치
  child1.classList.toggle("hide");
}
// 1. 아무것도 안 열려 있을 때, 닫혀있는 것을 클릭시 열린다.
// 2. 하나라도 열려 있을 때, 열려있는 options를 제외한 부분을 클릭하면 닫힌다.



// function selectAll(e)  { //체크박스 모두 선택 기능 (추후)
//   var grand1 = e.parentNode.parentNode;
//   var child1 = grand1.querySelectorAll('input[type="checkbox"]');
  
//   child1.forEach((checkbox) => {
//     checkbox.checked = child1.checked;
//   })
// }

window.onload = function(){

  // // 메뉴 Accordion
  // var acc = document.getElementsByClassName("accordion");
  // var zzz = document.getElementsByClassName("menu-item");
  // for (var i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {

  //     for (var j = 0; j < zzz.length; j++) {
  //       zzz[j].classList.remove("selected");
  //     };

  //     this.classList.toggle("selected");
  //     var sub = this.nextElementSibling;
  //     if (sub.style.PxHeight) {
  //       sub.style.maxHeight = null;
  //     } else {
  //       sub.style.maxHeight = sub.scrollHeight + "px";
  //     } 
  //   });
  // }

  // 메뉴 Accordion  (작동되는 것 확인됨)
  var acc = document.querySelectorAll(".accordion"); //아코디언 메뉴 선택
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {	 
            
      for (var j = 0; j < acc.length; j++) { // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리게)
        acc[j].classList.remove("selected"); // 버튼 상태에 입혀진 selected 라는 클래스를 지운다.
        if (this!==acc[j]) { // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
          acc[j].nextElementSibling.style.maxHeight = null;
        }
      }

      this.classList.toggle("selected"); // 클릭한 부분을 선택처리 하고
      var sub = this.nextElementSibling; // sub 부분을 펼친다.

      if (sub.style.maxHeight){
        // this.classList.remove("selected");
        sub.style.maxHeight = null;
      } else {
        sub.style.maxHeight = sub.scrollHeight + "px";
      }
    }
  }

  // 완성 코드 (게시판 접고 펴는 기능 Universal.)
  // var click1 = document.querySelectorAll(".row-group .link"); //해당 클래스 선택
  // var target1 = document.querySelectorAll(".row-group"); //해당 클래스 선택 
  
  // for (var k = 0; k < click1.length; k++) {
  //   click1[k].addEventListener("click", function() { //row-group의 link를 클릭했을 때,
  //     var grand1 = this.parentNode.parentNode;  //선택한 요소의 row-group를 캐치
  //     if (grand1.classList.contains("selected")) { //클릭한 row-group이 닫혀있는거면
  //       grand1.classList.remove("selected"); } else {
  //         for (var j = 0; j < target1.length; j++) { //모든 row-group을 일단 닫는다.
  //           target1[j].classList.remove("selected");
  //         };
  //         grand1.classList.add("selected");
  //       }
  //     }
  //   );
  // }
}


