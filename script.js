function calculateInsurance() {
    var x = document.getElementById("age").value;
    var y = document.getElementById("horsepower").value;
    var z = document.getElementById("country").value;
    if (z === "Austria") {
        var insurance = y * 100 / x + 50;
        
	} else if (z === "Germany") {
        var insurance = y * 120 / x + 100;
        
    } else if (z === "Italy") {
        var insurance = y * 150 / (x + 2) + 50;
        
    } else {
        alert("Not available in your country");
        //console.log("Not available in your country");
        //document.getElementById("printcal").innerHTML = "Not available in your country";
    }
        alert(insurance);
        //console.log(insurance);
        //document.getElementById("printcal").innerHTML = insurance;
        //document.write(insurance);
}
