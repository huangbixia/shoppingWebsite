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

    /**---------商品栏-----------**/
    $(".goodsBox").each(function(){
        $(this).find("li").each(function(index){
            //去掉重叠的边
            if(index!=3&&index!=7)
            {
                $(this).css("borderRight","0");
            }
            if(index<4)
            {
                $(this).css("borderBottom","0");
            }

            //鼠标悬浮商品特效
           $(this).find("img").hover(function(){
                $(this).animate({marginLeft:"0"});
           },function(){
               $(this).animate({marginLeft:"5px"});
           });
        });
    });

    //楼层标题颜色变换
    var goodsFloorTitle = $(".goodsFloor").find("h3");
    var titleColor = ["#3fae29","#5494d6","#f5af08","#df38ee","#ee3838"];
    for(var i=0;i<goodsFloorTitle.length;i++)
    {
        $(goodsFloorTitle[i]).css({color:titleColor[i]});
    }

    /*-------------左侧楼层导航栏-------------*/
    $(".floorNav:eq(0)").find("a").each(function(index){
        $(this).css("background",titleColor[index]);

        var pic = $(this).find("img");
        $(this).hover(function(){
            $(this).text($(goodsFloorTitle).eq(index).text().substring(2));
        },function(){
            $(this).text("");
            $(this).append(pic);
        });
    });
};

/*----------左侧楼层导航栏随之滚动隐或现--------------*/
$(function(){
    $(window).scroll(function(){
        var toTop = $(this).scrollTop();
        if(toTop>=650){
            $(".floorMenuBox").show();
        }
        else
        {
            $(".floorMenuBox").hide();
        }
    });
});
$(function(){

});