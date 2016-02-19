$(document).ready(function(){
	$(".btn").click(function(){
		$(".btn").load("test.txt");
	});
	$(".demo").fadeOut(500);
	$.get("test.asp",function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
});


