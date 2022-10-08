
var countDate = new Date("Oct 7, 2022 00:00:00").getTime();


var cd = setInterval(function() {
	var now = new Date().getTime();
	var diff = now - countDate;

	var days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

	document.getElementById('daycount').innerHTML = " " + days;
}, 1000);
