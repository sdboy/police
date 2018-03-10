
//var mapSearchjgState=1;

$(document).ready(function() {  
//	var mapSearchjgFrame = window.parent.document.getElementById("mapSearchjgFrame").contentWindow.document;
//	$('.pic_2').hide();
	$('.ssbtn').click(function(){
//		alert("click");
//		if (mapSearchjgState) {
//			alert(1);
//			parent.$("#mapResultFrame").show();
//			parent.$("#mapSearchjgFrame").hide();
			$('.xx_xx').toggleClass('xx_xxclick');
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
	$('.xx_xx').click(function(){
		$(this).toggleClass('xx_xxclick');
			parent.$("#mapSearchjgFrame").toggle();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});