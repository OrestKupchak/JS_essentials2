 
function convert(usd, eur) {

var usd = prompt("Please enter youe sum in dollars");
var eur = prompt("Please enter youe sum in euros");


	var uahToUsd = (usd * 26.2415).toPrecision(6);
	var uahToEur = (eur * 28.5815).toPrecision(6);
	var eurToUsd = (28.5815 / 26.2415).toPrecision(6);
 alert( eur + ' euros are equal ' + uahToEur + ' grns, ' + usd + ' dollars are equal ' + uahToUsd + ' grns, one euro is equal ' + eurToUsd + ' dollars.');
}

document.querySelector('.btn').addEventListener("click", convert)