$(document).ready(function(){
	$(".question, .answer, .picture, #finish").hide();
	x=0
	$(".next").click(function(){
		$("#a"+x).show();
		$("#p"+x).fadeIn();
		x=x+1
		$("#q"+x).show();
		$("#div"+(x-1)).css({"border": "2px solid grey", "margin": "10px", "border-radius": "30px"});
		if(x==5){
			$("#next").hide();
			$("#finish").show();
		}
	});
});
