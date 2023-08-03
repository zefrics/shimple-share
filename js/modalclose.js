var modal = {
  open : function(){
    $('#modal-r-create3').show();
  },
  close : function(){
    $('#modal-r-create3').hide();    
  }
};
$(document).on('click', '#modal-r-create3 .bg', function(){
  window.history.back();
}).on('click', '#aaa', function(){
  window.history.pushState({}, 'modal', '/modal');
  modal.open();
});

window.onpopstate = history.onpushstate = function(e) {
    if(window.location.href.split('/').pop().indexOf('modal')===-1){ // 마지막 segment가 cards라면 모달이 아닌 리스트인 상태이어야한다.
        modal.close(); // 현재의 모달을 닫는다.
    }
}