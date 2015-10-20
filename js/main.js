/*var myFunction = function(y, z){
alert(y + z);
};

myFunction(1, 3);
*/

/*Goal: calculate how many lines of code I would write by the time I'm 50 if I write 10 lines of code a day*/
var calcLinesOfCode = function(numYears) {
	return 10 * 365 * numYears;
};
alert(calcLinesOfCode(8));