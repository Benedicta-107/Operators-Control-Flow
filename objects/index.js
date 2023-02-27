/**
 * Using the constructor method, 
 * create an InstagramPost() constructor function 
 * that takes the properties below as arguments.
 * Handle of author
 * content, 
 * An image link posted by the author of the post
 * Number of views, 
 * Number of likes, 


 */

//Writing the constructor function
function InstagramPost(HandleOfAuthor, Content, AnImageLinkPostedByTheAuthorOfThePost, NumberOfViews, NumberOfLikes) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.AnImageLinkPostedByTheAuthorOfThePost = AnImageLinkPostedByTheAuthorOfThePost;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
    
}
//Creating an object called MyInstagramPost
const MyInstagramPost = new InstagramPost ("@Olumuyiya", "Peter Obi all the way, what GOD cannot do does not exist", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp02hqAEWxwpDfRMlpdJleQuHxeMxyMrejKA&usqp=CAU", 200, 180);

//Create 2 Instagram post objects from the constructor function you created above
const ValsInstagramPost = new InstagramPost ("@Gbede", "A new season begins in Nigeria", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-h5N3a3rsH1QQFBS4QDQZSsU2kvu0LaHtdg&usqp=CAU", 350, 300);
const ChibudosInstagramPost = new InstagramPost ("@Erifeoluwa", "Light has nothing to do with darkness", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwSYLxme2yRTqQOWbmaKssbDxW5MyOK-PFg&usqp=CAU", 5000, 999);

console.log(MyInstagramPost, ValsInstagramPost, ChibudosInstagramPost);
/**
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94 
 */
//Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments.
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}
//Afterwards, create an object representing Musa from the factory function.
const firstPerson = createPerson('Musa Dawodu', 19, 'Lekki-Lagos State');
console.log(firstPerson);

//Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
 
function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
    
}
//Then create an object representing Muse’s JAMB scores.
const JambScores1 = createJambScores(70, 85, 82, 94);
console.log(JambScores1);

//Add the object as a property to Musa object you created above in (a) above
const add = Object.assign(firstPerson, JambScores1);
console.log(JambScores1);
console.log(firstPerson)

//What are the different ways you can clone an object? Give examples for each of them.
/**
 * Three ways to clone an object are;
 * 1. Object.assign()
 * 2. Spread syntax
 * 3. JSON.parse
 */
//Example of cloning an object using object.assign ()
const firstiPhone = {
    brand: "Apple",
    make: "iPhone 2G",
    storage: "8GB",
    pixel: "320x480",
    inches: "3.5",
    yearReleased: "2007",
};
console.log(firstiPhone);
//cloning the object into latest iphone
const latestiPhone = Object.assign({}, firstiPhone);
console.log(firstiPhone);
console.log(latestiPhone);

latestiPhone.make = "iPhone 14";
latestiPhone.storage = "512GB";
latestiPhone.pixel = "2532x1170";
latestiPhone.inches = "6.1";
latestiPhone.yearReleased = "2022";

console.log("After changing the make, storage, pixel, inches, and year released");
console.log(firstiPhone);
console.log(latestiPhone);

//Example of cloning an object using spread syntax {...}
const fifthiPhone = {...firstiPhone};

console.log(firstiPhone);
console.log(fifthiPhone);
fifthiPhone.make = "iPhone 5s";
fifthiPhone.storage = "64GB";
fifthiPhone.pixel = "1136x640";
fifthiPhone.inches = "4.0";
fifthiPhone.yearReleased = "2013";

console.log("After changing the make, storage, pixel, inches, and year released");
console.log({firstiPhone});
console.log({fifthiPhone});

//Example of cloning an object using JSON.parse
const tenthiPhone = JSON.parse;

tenthiPhone.make = "iPhone X";
tenthiPhone.storage = "256GB";
tenthiPhone.pixel = "2436x1125";
tenthiPhone.inches = "5.85";
tenthiPhone.yearReleased = "2017";

console.log("After changing the make, storage, pixel, inches, and year released");
console.log({firstiPhone});
console.log({tenthiPhone});
/**Using any of the enumeration methods taught in class (for…in  or for..of), 
 * log out each of the presidential candidates in this for/**mat:
	’Omoyele Sowore is the presidential candidate of AAC’
 */
/**
 * const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (const key in presidentialCandidates) {
    console.log(key);
    console.log(presidentialCandidates.AAC{key} + "is the presidential candidate of AAC")
 }
 */
 const AAC = 'Omoyele Sowore';
 const ACCORD = 'Christopher Imumolen';
 const APC = 'Bola Ahmed Tinubu';
 const LP = 'Peter Obi';
 const NNPP = 'Rabiu Kwankwaso';
 const PDP = 'Atiku Abubakar';

 console.log(AAC + " is the presidential candidate of AAC")
 console.log(ACCORD + " is the presidential candidate of ACCORD")
 console.log(APC + " is the presidential candidate of APC")
 console.log(LP + " is the presidential candidate of LP")
 console.log(NNPP + " is the presidential candidate of NNPP")
 console.log(PDP + " is the presidential candidate of PDP")