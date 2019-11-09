//Node Exercise 2
//AVERAGE GRADE

//Create a new file, "grader.js"

//In the file define a new function named "average"
//It should take a single parameter:  and array of test scores (all numbers)
//It should return the average score in the array, rounded to the nearest whole number

//var scores = [90, 98, 89, 100, 100, 86, 94];
//average(scores); should return 94

//var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
//average(scores2); should return 68

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(array){
	var result = 0
	for(var i = 0; i < array.length; i++){   //doing this is called the "accumulator pattern"
		result = result + array[i];
	}
	var avg = result/array.length;
	var round = Math.round(avg);
	console.log(round);
};

average(scores);
average(scores2);
