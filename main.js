//JS File for class demo
// Jack Kovensky
// 1.30.2023

//print
console.log("Hello World");

// variables
// constants
const myCourse = "DS4200";
console.log(myCourse);

let season = "Winter";
console.log(season);

season = "Spring";
console.log(season);


// var

var x = 7;
// not to use Var to declare your variables

console.log(typeof(season));

let hwDue = true;
console.log(typeof(hwDue));

let faveNum = 6;
console.log(typeof(faveNum));

// loosely typed language
faveNum = "six";
console.log(typeof(faveNum));



// fucntions

function tenTimes(num){
	let result = num * 10;
	return result;
}

let ans = tenTimes(6);
console.log(ans);


let numberOfClicks = 0;

function buttonClicked(){
	
	numberOfClicks += 1;

	// select the element we want to modify
	let buttonDiv = document.getElementById("button-div");



	buttonDiv.innerHTML = "Number of times button clicked" + numberOfClicks;

}


