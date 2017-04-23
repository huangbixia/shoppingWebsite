/**
 * Created by Administrator on 2016/12/11.
 */
window.onload = function(){

    /**-------购物车-------**/
    $('.shopCart-info').hide();
    $('.shopCart').mouseleave(function(){
        $('.shopCart-info').css("display","none");
    });
	 $('.shopCart').mouseenter(function(){
        $('.shopCart-info').slideDown(500);
		
    });
    $('.shopCart-info').mouseover(function(){
        $('.shopCart-info').css("display","block");
    });
    $('.shopCart-info').mouseout(function(){
        $('.shopCart-info').css("display","none");
    });

    /**--------轮播--------**/
    var sWidth = $("#focus").width();
    var len = $("#focus ul li").length;

    var index = 0;
    var picTimer;
     var  btn = "<div class='preNext next'></div>";
    $("#focus").append(btn);


    $("#focus .next").click(function () {
        index += 1;
        if (index == len) { index = 0; }
        showPics(index);
    });
    $("#focus ul").css("width", sWidth * (len));

    $("#focus").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) { index = 0; }
        }, 3000);
    }).trigger("mouseleave");

    function showPics(index) {
        var nowLeft = -index * sWidth;
        $("#focus ul").stop(true, false).animate({ "left": nowLeft }, 500);
    }

    /**-------menu------**/
    $('.second-menu').hide();
    $(".first-menu").each(function(i) {
        $(this).mouseenter(function () {
            $(".second-menu:eq(" + (i) + ")").show();
        });
        $(this).mouseleave(function () {
            $(".second-menu:eq(" + (i) + ")").hide();
        });
    });

    /**------向下滚动事件--------**/

    //搜索栏固定在顶部
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top>=  ($(".bottom-box").css("height").match(/^\d+/))){
            $(".bottom-box").addClass("fixedSearchBox");
            $(".bottom-box").find("img:eq(0)").css({width:"130px",height:"auto",marginTop:"3px"});
            $(".search-box").css("marginTop","12px");
            $(".shopCart").hide();
        }
        else
        {
            $(".bottom-box").removeClass("fixedSearchBox");
            $(".bottom-box").find("img:eq(0)").css({width:"220px",height:"auto",marginTop:"10px"});
            $(".search-box").css("marginTop","45px");
            $(".shopCart").show();
        }
    });

    /**---------活动菜单栏-----------**/
    $(".active-menu").find("a").each(function(i){
        $(this).hover(function(){
             $(".activity-info:eq("+i+")").animate({bottom:"0"},300);
        },function(){
            $(".activity-info:eq("+i+")").animate({bottom:"-250px"},300);
        });
    });
};