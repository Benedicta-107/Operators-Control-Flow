// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    Some further requirements:
    - the input field must be reset when the add button is clicked on 
    - the todo list must show the most recent first

    var divs = document.querySelectorAll("div");

 */
/**
 * function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
 */
   // let todoList = document.querySelectorAll("p");

   //  function addItem (item) {
        
   //  }
    
   //  function editItem (item) {
    
   //  }
    
   //  function deleteItem (item) {
    
   //  }

   // let todoList = []; //Array that will hold the todolist items.
   // // Function to add item to the list.
   // function addItem (item) {
   //    const todo = {
   //       item,
   //       checked: false,
   //       id: incomplete-tasks(),
   //     };
     
   //     todoList.push(todo);
   //     console.log(todoList);  
   //      }

   // let todoListItem = document.querySelectorAll("p");//To select all the p tag element.
   // //To add submit event listener.
   // todoListItem.addEventListener('submit', event => {
   //    event.preventDefault();// To prevent the page from refreshing after submission
   //    const input = document.querySelector('#new-task'); // select the text input

   //    //Getting the value of the input
   //    const text = input.value.trim();
   //    if (item !== '') {
   //       addItem(item);
   //       input.value = '';
   //       input.focus();
   //    }
   // });

   
// let todoList = [];

// function addItem(item) {
//   const todo = {
//     text,
//     checked: false,
//     id: add-button.now(),
//   };

//   todoList.push(todo);
//   console.log(todoList);
// }

// const list = document.querySelector('.incomplete-tasks');
// list.addEventListener('submit', event => {
//   event.preventDefault();
//   const input = document.querySelector('.incomplete-tasks');

//   const item = input.value.trim();
//   if (item !== '') {
//     addTodo(item);
//     input.value = '';
//     input.focus();
//   }
// });

let todoList = [];

// Get references to DOM elements
const inputItem = document.querySelector('#new-task');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#incomplete-tasks');

function addItem () {
  
}