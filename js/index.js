/**
 * Created by Administrator on 2016/12/11.
 */
window.onload = function(){

    /**-------���ﳵ-------**/
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

    /**--------�ֲ�--------**/
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

    /**------���¹����¼�--------**/

    //�������̶��ڶ���
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

    /**---------��˵���-----------**/
    $(".active-menu").find("a").each(function(i){
        $(this).hover(function(){
             $(".activity-info:eq("+i+")").animate({bottom:"0"},300);
        },function(){
            $(".activity-info:eq("+i+")").animate({bottom:"-250px"},300);
        });
    });

    /**---------��Ʒ��-----------**/
    $(".goodsBox").each(function(){
        $(this).find("li").each(function(index){
            //ȥ���ص��ı�
            if(index!=3&&index!=7)
            {
                $(this).css("borderRight","0");
            }
            if(index<4)
            {
                $(this).css("borderBottom","0");
            }

            //���������Ʒ��Ч
           $(this).find("img").hover(function(){
                $(this).animate({marginLeft:"0"});
           },function(){
               $(this).animate({marginLeft:"5px"});
           });
        });
    });

    //¥�������ɫ�任
    var goodsFloorTitle = $(".goodsFloor").find("h3");
    var titleColor = ["#3fae29","#5494d6","#f5af08","#df38ee","#ee3838"];
    for(var i=0;i<goodsFloorTitle.length;i++)
    {
        $(goodsFloorTitle[i]).css({color:titleColor[i]});
    }

    /*-------------���¥�㵼����-------------*/
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

/*----------���¥�㵼������֮����������--------------*/
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