var isOpen = false;
function animateShow(){
	var mobile_flag = isMobile(); // true为PC端，false为手机端
	if(mobile_flag){
    	$(".menubox").animate({
			height:'115px',
			opacity:'1',
		},300);
    }else{
		$(".menubox").animate({
			height:'162px',
			opacity:'1',
		},300);
    }
}
function animateHide(){
	$(".menubox").animate({
		height:'0px',
		opacity:'0',
	},300);
}
// 判断是否是手机
function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }

     var screen_width = window.screen.width;
     var screen_height = window.screen.height;    

     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 800){
         mobile_flag = true;
     }

     return mobile_flag;
}
//点击非菜单区域关闭菜单
$('body').on('click',function () {
	if (isOpen) {
		animateHide();
		isOpen = false;
		return;
	}
});


// 点击按钮区打开菜单
$('.menu').on('click',function (e) {
	e.stopPropagation();
	if (isOpen) {
		animateHide();
		isOpen = false;
		return;
	}
	isOpen = true;
	animateShow();
});


//点击菜单区域不能关闭菜单
$(".menubox").on('click',function(e){
	e.stopPropagation();
	if (isOpen)  return;
});


//点击close按钮关闭菜单
$(".menu-close").click(function(){
	if(isOpen){
		animateHide();
		isOpen = false;
		return;
	}
});