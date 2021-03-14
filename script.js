function compute() {
  p = document.getElementById("principal").value;

}
var principal = "principal";
var rate = "rate";
var years = "years";
var interest = principal * years * rate / 100;
var no_of_years = 2021 + years;

function getrange() {
    var rate = document.getElementById("rate").value;
    var rateViewElement = document.getElementById("slider");
    rateViewElement.textContent = rate + '%';
