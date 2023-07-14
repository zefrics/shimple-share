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

function detail2(e) { // 모바일 게시판 접고 펴는 기능
  e.parentNode.classList.toggle("selected");
}


function filter(e) { //필터 접고 펴는 기능
  var target = e.parentNode.querySelector(".options"); //클릭한 요소의 세대 중 options를 캐치
  target.classList.toggle("hide");
}

function filter2(e) { // 모바일 필터 접고 펴는 기능
  var target = e.parentNode.querySelector(".options"); //클릭한 요소의 자손 중 options를 캐치
  target.classList.toggle("hide");
}

window.onload = function() {
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
}

function closeMenu() {
  const x = document.querySelector('nav');
  x.classList.remove('responsive'); // 메뉴 접기
  
  const y = document.querySelector('nav .menu-icon');
  y.classList.remove('open'); // x모양에서 햄버거 모양으로 복귀
}

function toggleMenu() {
  const x = document.querySelector('nav');
  x.classList.toggle('responsive'); // 메뉴 토글
  
  const y = document.querySelector('nav .menu-icon');
  y.classList.toggle('open'); // 햄버거 아이콘 토글
}