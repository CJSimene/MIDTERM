let x = document.getElementbyId("calc");
function getData(num){
	x.value+=num;
}

function operator(equals){

	if(equals=='+'){
		x.value=='+';
	}

	else if(equals=="-"){
		x.value=='-';
	}

	else if(equals=='*'){
		x.value=='*';
	}


	else if(equals=='/'){
		x.value=='/';
	}

	else if(equals=='='){
		x.value=eval(x.value);
	}







}


