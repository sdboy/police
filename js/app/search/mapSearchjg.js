
//var mapResultState;
//var mapSearchjgState;
//var mapSearchFrameState;



$(document).ready(function() {  
	$('.pic_2').hide();
	$('.xx_xx_menu ul').click(function(){
//		if (mapSearchjgState) {
//			alert(1);
//			parent.$("#mapSearchjgFrame").show();
//			parent.$("#mapSearchjgFrame").delay(500).hide(0);
//			parent.$("#mapSearchFrame").find('.xx_xx').hide();
//			document.getElementById("mapSearchFrame").find('.xx_xx').hide();
			$('.xx_xx_menu ul').removeClass('xx_xx_seclick');
			$(this).addClass('xx_xx_seclick');
			$('.xx_xx_menu ul').find('.pic_2').hide();
			$('.xx_xx_menu ul').find('.pic_1').show();
			$(this).find('img').hide().eq(1).show();
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
		$('.xx_xx_menu ul').eq(0).click(function(){
//		alert("click");
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapResultFrame").show();
			parent.$("#mapSearchjgFrame").hide();
			$('.xx_xx').toggleClass('xx_xxclick');
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
		});
		$('.xx_xx_menu ul').eq(1).click(function(){
//		alert("click");
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapResult_ryFrame").show();
			parent.$("#mapSearchjgFrame").hide();
//			$('.xx_xx').toggleClass('xx_xxclick');
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
		});
		$('.xx_xx_menu ul').eq(4).click(function(){
			parent.$("#mapResult_jkFrame").show();
			parent.$("#mapSearchjgFrame").hide();
		});
//	$('.xx_xx_menu ul').click(function(){
//		$('.xx_xx_menu ul').removeClass('xx_xx_seclick');
//		$(this).addClass('xx_xx_seclick');
//		$('.xx_xx_menu ul').find('.pic_2').hide();
//		$('.xx_xx_menu ul').find('.pic_1').show();
//		$(this).find('img').hide().eq(1).show();
//		
//	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});