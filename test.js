$(document).ready(function(){
	$(".btn").click(function(){
		$(".btn").load("test.txt",function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
	});
	$(".demo").fadeOut(500);
});


