// JavaScript Document
$(document).ready(function() {  
	
	$('#jyys').click(function(){
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapResult_jyysFrame").show();
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
	$('#bjbh').click(function(){
			parent.$("#mapResult_bjbhFrame").show();
	});
		$('.left_gn_center .menu').click(function(){
			$('.left_gn_center .menu').removeClass('menuclick');
			$(this).addClass('menuclick');
		});
	
	
	
});