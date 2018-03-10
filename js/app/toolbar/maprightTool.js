// JavaScript Document
$(document).ready(function() {  
	
	$('.esld').click(function(){
		$(this).toggleClass('esldclick');
	});
	$('.tckz').click(function(){
		$(this).toggleClass('tckzclick');
	});
	$('.menu').hide();
	$('.right_gn ul').mouseenter(function(){
		$(this).children('li').toggle();
	});
	$('.right_gn ul').mouseleave(function(){
		$(this).children('li').toggle();
	});
	
	
	
	
});