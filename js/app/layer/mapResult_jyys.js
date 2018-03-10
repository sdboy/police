// JavaScript Document
$(document).ready(function() {  
	
	
	$('.gb').click(function(){
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapResult_jyysFrame").hide();
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
//	$('.mapResult_btm li').click(function(){
//			parent.$("#mapbubbleFrame").show();
//	});
	
//	$('.mapResult_btm li').mouseenter(function(){
//		$(this).find('.dwico').toggleClass('dwicoclick');
//	});
//	$('.mapResult_btm li').mouseleave(function(){
//		$(this).find('.dwico').toggleClass('dwicoclick');
//	});
	
//	$('.pagenumber li span').click(function(){
//		$('.pagenumber li span').removeClass('one');
//		$(this).addClass('one');
//	});
	
	
		$('.mapResult_top_menu div').click(function(){
			$('.mapResult_top_menu div').removeClass('qh');
			$(this).addClass('qh');
		});
		$(".mapResult_btm").hide().eq(0).show();
		$(".mapResult_top_menu div").click(function(){
			var n = $(this).index();	
			$(".mapResult_btm").hide().eq(n).show();
		});
	
	
								/*树*/
								$(".jjh").click(function(){
									$(this).toggleClass("jjhclick");	
									$(this).parent().next().toggle();
								});
	
	
								$(".tcgl_xy").click(function(){
									$(this).toggleClass("tcgl_xyclick");	
								});
	
								$(".cdmn").click(function(){
									$(this).toggleClass("cdmnclick");	
								});
								$(".shishi").click(function(){
									$(this).toggleClass("shishiclick");	
								});
								$(".gx").click(function(){
									$(this).toggleClass("gxclick");	
								});
	
	
		/*空间选择*/
		$('.pic2').hide();
		$('.xzcx span').click(function(){
			$('.xzcx span').children('.pic1').show();
			$('.xzcx span').children('.pic2').hide();
			$(this).children('.pic2').show();
			$(this).children('.pic1').hide();
		});
	
	
	
	
	
	
	
	
	
});