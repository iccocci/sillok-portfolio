//a 차단
$(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
});

//side_nav 메뉴
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().show();
});
$(".nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().hide();
});

//햄버거 버튼 클릭
$('.ham_btn').click(function(){
    $(this).toggleClass('on');
    
    if ($('.ham_btn').hasClass('on')) {
        $(this).addClass('active');
        $('.ham_menu').addClass('visible');
        $('body').css({'height': '100%', 'overflow': 'hidden'});
    } else {
        $(this).removeClass('active');
        $('.ham_menu').removeClass('visible');
        $('body').css({'height': 'auto', 'overflow': 'auto'});
    }
});
//햄버거 메뉴 클릭
$('.ham_menu > ul > li[class="list-ex"] > a').click(function(){
    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');
   
});
//햄버거 메뉴 반응형 보완
$(window).resize(function(){
    var wWidth = $(this).width();

    if(wWidth > 1024){
        $('.ham_btn').removeClass('on');
        $('.ham_btn').removeClass('active');
        $('.ham_menu').removeClass('visible');
        $('body').css({'height': 'auto', 'overflow': 'auto'});
    }
});

//검색 조건 선택 메뉴
$(".default_option").click(function(){
    $(this).parent().toggleClass("active");
});

$(".select_ul li").click(function(){
    var currentele = $(this).html();
        //console.log(currentele);
    $(".default_option li").html(currentele);
    $(this).parents(".select").removeClass("active");
});

//왕대별 열람 반응형 메뉴
$('.kings div h3.list_btn').click(function(){
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
   
});  

//패밀리사이트
$(".familysite .fm_select").click(function () {
    var bt = $(this);
    var select = bt.next('div');

    if (select.is(":hidden")) {
        select.slideDown();
        bt.addClass("active");
    } else {
        select.slideUp();
        bt.removeClass("active");
    }
});