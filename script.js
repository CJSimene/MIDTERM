//$(document).ready(function()){




//}





let xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhttp.onload=function(){
	let jsonData = JSON.parse(xhttp.response);



	for(let n=0;n=jsonData.length;n++){

	document.getElementbyId("div").innerHTML = "<br>User Id:" + jsonData[n].UserId + "<br>id:" + jsonData[n].id + "<br>title:" + jsonData[n].title + "<br>completed:" jsonData[n].completed;	


}



