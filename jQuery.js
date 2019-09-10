$(document).ready(function(){
	$(".question, .answer").hide();
	x=0
	$("#q"+x).click(function(){
		$("#a"+x).show();
		x=x+1
		$("#q"+x).show();
	});
});
