// JavaScript Document
$(document).ready(function() {  
	
	$('#jyys').click(function(){
			parent.$("#mapResult_jyysFrame").show();
	});
	$('#bjbh').click(function(){
	  parent.$("#mapResult_bjbhFrame").show();
	});
		$('.left_gn_center .menu').click(function(){
			$('.left_gn_center .menu').removeClass('menuclick');
			$(this).addClass('menuclick');
		});
});