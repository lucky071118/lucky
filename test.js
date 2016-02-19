$(document).ready(function(){
	$(".btn").click(function(){
		$(".btn").load("test.txt");
		$.get("test.asp",function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		});
		$.post("test.asp",{
			name: "Donald Duck",
			city: "Duckburg"
			
		},function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
			
		});
       
	});
	

});


