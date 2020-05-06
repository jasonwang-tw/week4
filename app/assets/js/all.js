
// 命名 srat
// 標題
$('h2').addClass('max1200 titleName');

// banner標題
$('.headerText h2').removeClass('max1200 titleName');

// 服務項目
$('.serviceList li').addClass('serviceListItem');
$('.serviceList li h3').addClass('serviceListItemTitle');
$('.serviceList li p').addClass('serviceListItemText');

// 顧客卡片
$('.customer li').addClass('customerListCard');
$('.customer li p').addClass('cardText');
$('.customer li span').addClass('cardUpdateTime');

// 經典鏡框Icon
$('.classic .classicName').each(function(i){
    n=i+1;
    $(this).addClass('classicNameIcon_'+n);
});

// 漢堡菜單
$('.burger').click(function(){
    $('.burLine_1').toggleClass('burLine_1_romove');
    $('.burLine_2').toggleClass('burLine_2_romove');
    $('.burLine_3').toggleClass('burLine_3_romove');
    $('.headerNav').toggleClass('headerNavOpen');
});
// 命名 end

// AOS.js
AOS.init();

// windows loading
window.onload = function() { 
    $('.loader_wrap').delay(1000).fadeOut('1000');
};
