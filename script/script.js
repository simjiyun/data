(function($){

    //nav
    $('.main-btn').mouseenter(function(){
        $('.sub').stop().slideUp(0);
        $(this).next().stop().slideDown(300);
        $('.main-btn').removeClass('addHover');
        $(this).addClass('addHover');
    });

    $('#nav').mouseleave(function(){
        $('.sub').stop().slideUp(300);
        $('.main-btn').removeClass('addHover'); 
    });

    //메인 슬라이드
    var cnt = 0;

    function mainSlide(){
        $('.slide-wrap').stop().animate({top:-250*cnt}, 1000, function(){
            if(cnt>2){cnt=0}
            $('.slide-wrap').stop().animate({top:-250*cnt}, 0);
        });
    }

    function nextCount(){
        cnt++;
        mainSlide();
    }

    setInterval(nextCount, 3000);


    //모달 이벤트
    //언제 ?  자세히 보기 버튼을 클릭하면
    $('.popup-btn').click(function(event){
        //input=type=button / button 버튼이나 a 링크 태그등의
        //본래의 새로고침 같은 기능을 제거함[프리pre/벤트vent/드폴트Default()].
        event.preventDefault(); //프리pre/벤트vent/드폴트Default()
        $('#modal').addClass('addModal');    //모달창(팝업창) 열기
    });

    //모달창 닫기 클릭 이벤트
    //모달창 전체 아무데나 클릭 시 닫기
    //단, 닫기 버튼은 제외 : stopPropagation() 때문에 이벤트 전파 안됨.
    $('#modal').click(function(){
        $('#modal').removeClass('addModal'); //모달창(팝업창) 닫기
    });

    //모달창 닫기버튼을 클릭 이벤트
    $('.close-btn').click(function(event){
        //모달 창 클릭 시 자식 요소에게 전파되는 이벤트를 차단하는 
        //메서드는 스톱/프로/파/게/이션 stopPropagation() 사용함.
        event.stopPropagation();  //스톱/프로/파/게/이션
        $('#modal').removeClass('addModal'); //모달창(팝업창) 닫기
    });

    



})(jQuery);