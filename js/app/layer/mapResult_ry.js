// JavaScript Document
$(document).ready(function() {  
	
	
	$('.gb').click(function(){
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapResult_ryFrame").hide();
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
	$('.mapResult_btm li').click(function(){
			parent.$("#mapbubble_2Frame").show();
	});
	$('.mapResult_btm li').mouseenter(function(){
		$(this).find('.dwico').toggleClass('dwicoclick');
	});
	$('.mapResult_btm li').mouseleave(function(){
		$(this).find('.dwico').toggleClass('dwicoclick');
	});
	
	$('.pagenumber li span').click(function(){
		$('.pagenumber li span').removeClass('one');
		$(this).addClass('one');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});