function computeResult() {
	var value1 = (parseFloat(document.getElementById("val1").value));
	var multiplier = document.getElementById("function").value;
	var value2 = (parseFloat(document.getElementById("val2").value));
	var endResult=0;
	
	if (value1 == "" || value2 == ""){
		alert("NaN");
		return;
	}
	//account for rounding problem
	if (multiplier=="*"){
		var endResult= (value1)*(value2);
	}
	else if (multiplier=="/"){
		var endResult= value1/value2;
	}
	else if (multiplier=="+"){
		var endResult= (value1)+(value2);
		//strings cocatenating
	}
	else if (multiplier=="-"){
		var endResult= value1-value2;
	}	
	document.getElementById("endResult").innerHTML = endResult;
}
document.getElementById("compute").onclick = function(){
	computeResult();
};