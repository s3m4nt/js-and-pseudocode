/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, my name is Anthony. I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.
*/

// Create 4 vars name, age, address, greeting
const nme = 'Joe Smith';
const age = 25;
const address = '1234 Main St.';
const greeting =
  'Hello, my name is ' +
  nme +
  ". I'm " +
  age +
  ' years old and live at ' +
  address;
console.log(greeting);

/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.
*/

const greeting2 = `Hello, my name is ${nme}. I'm ${age} years old and live at ${address}`;
console.log(greeting2);

/* 
	Part 3: "Code Testing." Let's check and see if we did everything correctly and that `greeting` returns the same value as `greeting2`.
	Create a variable problemSolved whose value is the boolean value of if `greeting` and `greeting2` are equivalent. Log this variable to the console to check the values result.
	If the return is false, correct your bugs above until `greeting` and `greeting2` are equivalent. 
*/

// let problemSolved = true;
// console.log(problemSolved);

let problemSolved = greeting === greeting2;
console.log(problemSolved);

/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/

// Pseudo Code for Part 4
// I would use Math.max() or Math.min()
const hiNum = Math.max(23, 222, 645, 3, 78, 99, 123);
const hiNumStr = `The highest number in the hiNum const is ${hiNum}.`;
console.log(hiNumStr);
