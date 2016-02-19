$(document).ready(function(){
	$(".btn").click(function(){
		$(".btn").fadeOut(1000);
		$(".demo").load("http://www.w3schools.com/jquery/demo_test.txt");
	});
});
