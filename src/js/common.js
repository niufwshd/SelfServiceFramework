$(function(){
	//*****轮播开始
		var index = 0;
		var timer = null;
		var flag = true;
		timer = setInterval(move,5000);
		
		function move(){
			index++;
			$("#imgList li").eq(index-1).css({"position":"absolute"}).animate({"left":-1200},1000,function(){
				$(this).css("left",1200);
			});
			if(index == $("#imgList li").length){
				index = 0;
			}
			$("#imgList li").eq(index).css({"position":"absolute","left":1200}).animate({"left":0},1000);
			$("#nav li").eq(index).addClass("active").siblings().removeClass("active");
			
		}
			
			$("#nav li").hover(function(){
			clearInterval(timer);
			if(flag){
				flag = false;
				var num = index;
				$("#imgList li").eq(num).siblings().css({"position":"absolute","left":1200});
				index = $(this).index();
				$("#nav li").eq(index).addClass("active").siblings().removeClass("active");
				$("#imgList li").eq(num).css("position","absolute").stop().animate({"left":-1200},300);
				$("#imgList li").eq(index).stop().animate({"left":0},300,function(){
					flag = true;
				})
			}
			
		},function(){
			if(flag){
				timer = setInterval(move,5000);
			}
		})
		//*****
		$("#bottomCon div ul li").on("click",function(){
			$(this).addClass("activity").siblings().removeClass("activity")
			$(this).find('img').eq(0).css("display","none")
			$(this).find('img').eq(1).css("display","inline-block")
			$(this).siblings().find('img:nth-of-type(odd)').css("display","inline-block")
			$(this).siblings().find('img:nth-of-type(even)').css("display","none")
			$(this).find("span").removeClass("displayNone").parent().siblings().find("span").addClass("displayNone")
			$("#bottomCon div ol li").eq($(this).attr('index')-1).css("display","block").siblings().css("display","none")	
		})
	
	/*导航动画效果开始*/
		$("._about").hover(function(){
			
	    	$(".menuList1").stop().animate({top:"101px"},500);
	    	$(this).children("i").css("background","url(../img/u188.png) no-repeat center center")
	    	
		},function(){
			
	    	$(".menuList1").stop().animate({top:"-62px"},500);
	    	$(this).children("i").css("background","url(../img/u187.png) no-repeat center center")
		})
		$("._FQA").hover(function(){
			
	    	$(".menuList2").stop().animate({top:"101px"},500);
	    	$(this).children("i").css("background","url(../img/u188.png) no-repeat center center")
	    	
		},function(){
			
	    	$(".menuList2").stop().animate({top:"-62px"},500);
	    	$(this).children("i").css("background","url(../img/u187.png) no-repeat center center")
		})
	/*导航动画效果结束*/
	
})
