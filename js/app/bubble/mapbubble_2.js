

$(document).ready(function() {  
	
	
	/*地图工具frame*/
//	mapSearchFrame = document.getElementById("mapSearchFrame").contentWindow.document;
	/*测量工具frame*/
//	mapSearchjgFrame = document.getElementById("mapSearchjgFrame").contentWindow.document;
	

	
	$('.gb').click(function(){
//		if (mapSearchjgState) {
//			alert(1);
			parent.$("#mapbubble_2Frame").hide();
//			mapSearchjgState = 0;
//		} else {
//			parent.$("#mapSearchjgFrame").hide();
//			mapSearchjgState = 1;
//		}
	});
	$('.jrfj').click(function(){
		parent.$("#mapResult_ryFrame").hide();
		parent.$("#mapResult_jrfjFrame").show();
	});
	
	
	
	
	
	
	
});