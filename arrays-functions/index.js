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

let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.splice(3, 0, "Java");
console.log(arrayOfLanguages);

let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
arrayOfLanguages.splice(0, 1, "Scala", "Swift");
console.log(arrayOfLanguages);

let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
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