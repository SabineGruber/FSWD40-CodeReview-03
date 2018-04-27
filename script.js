function calculateInsurance() {
    var x = document.getElementById("age").value;
    var y = document.getElementById("horsepower").value;
    var z = document.getElementById("country");
    if (z == "Austria") {
    	var insurance = y * 100 / x  + 50;
    	return insurance;
	} else if (z == "Germany") {
		var insurance = y * 120 / x  + 100;
	} else if (z == "Italy") {
		var insurance = y * 150 / (x + 2)  + 50;
	} else {
		console.log("Not available in your country");
	
	}
console.log(insurance);
	
}
    /*var insurance = y * 100 / x  + 50;
    document.write(insurance);
} */

