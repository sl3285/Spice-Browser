$(document).ready(function(){
	$('head').append('<link rel="stylesheet" href="style.css" type="text/css" />');
	$(".description").hide();
	$('ul:not(#base)').hide();

	
	$("div.category").click(function() {
		$(this).siblings("ul").show();
		$(this).parent().siblings().find("ul").hide();
	});
	
	$("div.term").click(function() {
		var name = $(this).html();
		var dscp = $(this).siblings(".description").html();
		$("#show").html(name+"<br>"+dscp);
	});
	
});