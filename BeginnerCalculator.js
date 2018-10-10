function computeResult() {
	var value1 = document.getElementById("val1").value;
	var multiplier = document.getElementById("function").value;
	var value2 = document.getElementById("val2").value;
	var endResult=0;
	
	if (value1 == "" || value2 == ""){
		alert("NaN");
		return;
	}
	if (multiplier="*"){
		var endResult= value1*value2
	}
	if (multiplier="/"){
		var endResult= value1/value2)
	}
	if (multiplier="+"){
		var endResult= value1+value2)
	}
	if (multiplier="-"){
		var endResult= value1-value2)
	}	
	document.getElementById("endResult").innerHTML = endResult;
}
document.getElementById("compute").onclick = function(){
	computeResult();
};