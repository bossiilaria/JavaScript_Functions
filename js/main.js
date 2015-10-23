/* Goal: write a function to add two numbers and display the result*/

/*
var myFunction = function(y, z){
alert(y + z);
};

myFunction(1, 3);
*/

/*Goal: calculate how many lines of code I would write by the time I'm 50 if I write 10 lines of code a day*/
/*
var calcLinesOfCode = function(numYears) {
	return 10 * 365 * numYears;
};
alert(calcLinesOfCode(8));

/* Goal: write a function to multiply two numbers and display the result*/
/*
var myFunc = function(a, b) {
	return a*b;
};
console.log(myFunc(2, 3));

function myFunc(a, b) {
	return a*b;
}
console.log(myFunc(4, 5));
*/

/*Goal: play with local and global variables - write a function to calculate how tall a person grew over the years and display the result*/
/*var lifeTimeInches = 20;

var howTall = function(startAge, endAge, inchesPerYear) {
	totalInches = inchesPerYear * (endAge - startAge);
	lifeTimeInches += totalInches;
	return totalInches;
};
console.log("From 0 to 8 years:");
console.log(howTall(0, 8, 2.5));

console.log("From 8 to 16 years:");
console.log(howTall(8, 16, 2));

console.log("Total inches grown:");
console.log(lifeTimeInches);
*/
/*Goal: draw a bunch of rectangles*/

var x = 10; //position of the car


var draw = function() {
	

	//build the car
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");

	//build the body
	ctx.fillStyle="red";
	ctx.fillRect(x+40, 20, 120, 50);
	ctx.fillRect(x, 70, 200, 70);

	//build the wheels
	ctx.fillStyle="black";
	ctx.beginPath();
	ctx.arc(x+40, 140, 20, 30, 50);
	ctx.arc(x+170, 140, 20, 30, 50);
	ctx.fill();
	
};
draw();

