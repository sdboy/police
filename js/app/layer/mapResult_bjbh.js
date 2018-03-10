// JavaScript Document
$(document).ready(function() {  
	
	
	$('.gb').click(function(){
		parent.$("#mapResult_bjbhFrame").hide();
	});
//	$('.mapResult_btm li').mouseenter(function(){
//		$(this).find('.dwico').toggleClass('dwicoclick');
//	});
//	$('.mapResult_btm li').mouseleave(function(){
//		$(this).find('.dwico').toggleClass('dwicoclick');
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
	
								/*标注标绘*/
								$(".dian img").hide().eq(1).show();
								$(".xian img").hide().eq(0).show();
								$(".mian img").hide().eq(0).show();
								$(".dian img").eq(0).click(function(){
									$(".dian img").hide().eq(1).show();	
									$(".xian img").hide().eq(0).show();	
									$(".mian img").hide().eq(0).show();	
								});
								$(".xian img").eq(0).click(function(){
									$(".dian img").hide().eq(0).show();	
									$(".xian img").hide().eq(1).show();	
									$(".mian img").hide().eq(0).show();	
								});
								$(".mian img").eq(0).click(function(){
									$(".dian img").hide().eq(0).show();	
									$(".xian img").hide().eq(0).show();	
									$(".mian img").hide().eq(1).show();	
								});
								/*点线面切换*/
								$(".dxm_menu").hide().eq(0).show();
							    $(".dxm_qh span").click(function(){
							 	    var n = $(this).index();	
									$(".dxm_menu").hide().eq(n).show();
							    });
								$(".quchu").click(function(){
									$('.quchu').toggleClass("quchuclick");	
								});
								$(".tianjia").click(function(){
									$('.tianjia').toggleClass("tianjiaclick");	
								});
								$(".bzbh_top ul").click(function(){
									$(".bzbh_top ul").removeClass();
									$(this).addClass("bzbh_zuzhik");
							    });
								$("#bhbz .bjcx_k").hide().eq(0).show();
							    $(".bzbh_top ul").click(function(){
							 	    var n = $(this).index();	
									$("#bhbz .bjcx_k").hide().eq(n).show();
							    });
								$('.cxjs_index_menu').mouseenter(function(){
									$(this).children('.cxjs_index_menu_bh').toggleClass('cxjs_index_menu_bhclick');
								});
								$('.cxjs_index_menu').mouseleave(function(){
									$(this).children('.cxjs_index_menu_bh').toggleClass('cxjs_index_menu_bhclick');
								});
	
	
	
	
	$(".tcgl_xy").click(function(){
		$(this).toggleClass("tcgl_xyclick");	
	});
	
	
	
	
	
	
	
	
});