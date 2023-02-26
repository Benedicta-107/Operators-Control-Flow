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