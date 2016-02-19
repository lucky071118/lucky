$(document).ready(function(){
	$(".btn").click(function(){
		$(".btn").load("test.txt");
		$.post("test.asp",{
			name: "Donald Duck",
			city: "Duckburg"
			
		},function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
			
		});
       
	});
	

});


