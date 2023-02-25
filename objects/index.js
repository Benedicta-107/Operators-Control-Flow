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
 