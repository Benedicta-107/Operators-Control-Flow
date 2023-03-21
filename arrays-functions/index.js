/**
 * What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
 * List 5 array methods that fall under each of them.

 */
//ANSWER
/**
 * The difference between mutating and non mutating array methods is that; 
 * the mutating array methods changes the array itself instead of returning a new array with the new changes (Changes the original array);
 * the non mutating array methods returns a whole new array which has all the changes.
 * 
 * Five array methods that fall under mutating methods are;
 * 1. array.push()
 * 2. array.unshift()
 * 3. array.pop()
 * 4. array.shift()
 * 5. array. splice()
 *  
 * Five array methods that fall under non mutating methods
 * 1. array.concat()
 * 2.   ...array
 * 3. array.filter()
 * 4. array.slice()
 * 5. array.map()
 * 
 */

/**
 * Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust

 */
//ANSWER
let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.push("Kotlin");
console.log(arrayOfLanguages);

//let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.splice(3, 0, "Java");
console.log(arrayOfLanguages);

//let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.splice(0, 1, "Scala", "Swift");
console.log(arrayOfLanguages);

//let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.splice(4, 4, "Go", "Rust", "Python");
console.log(arrayOfLanguages);

/**
 * What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

 */
//ANSWER
/**The value will be apple, mango, banana */

/**
 * Write a function that accepts an array of numbers as an argument. 
 * Return the maximum value in the array.
 * e.g., max([4, 5, 10, -2]) // maximum value is 10

 */
//ANSWER
const array1 = [4, 5, 10, -2];

console.log("maximum value is " + Math.max(...array1));

//nthIndexOf('123456789123465789', '1', 1)

/**
 * Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index
 * it is at in the array: e.g., valTimesIndex([1,2,3]) // [0,2,6]
 * valTimesIndex([5,10,15]) // [0,10,30]
 */
//ANSWER


/**
 * function valTimesIndex (array){
	const array2 = [1, 2, 3];
	return array2 * indexof;
	console.log(valTimesIndex(...array2));
}
valTimesIndex(1, 2, 3);
valTimesIndex(5, 10, 15);

 */
let num = [1, 2, 3]
function valTimesIndex(num){
	for (let index = 0; index < array.length; index++) {
		const element = array[index];	
	} 
console.log(element * num);
}
