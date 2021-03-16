function compute() {
  var principal = parseInt(document.getElementById("principal").value, 10);
  var rate = parseFloat(document.getElementById("rate").value, 10);
  var years = parseFloat(document.getElementById("years").value, 10);
  var n = new Date();
  var y = n.getFullYear() + years
  var interest = principal * years * rate / 100;
  
  if (principal <= 0) {
  	alert("Please enter a positive number")
  }
  else if (isNaN(parseFloat(principal))) {
  	alert("Please enter a positive number")
  }
  else {
    var text = '<br> If you deposit <mark>' + principal + '</mark>, </br> at an interest rate of <mark>' + rate + '</mark>. </br> You  will receive an amount of <mark>' + interest + '</mark>, </br>in the year <mark>' + y + '</mark>.'

    document.getElementById("result").innerHTML = text}
}

function getrange(newvalue){
	document.getElementById("slider").innerHTML = newvalue + "%";
}

