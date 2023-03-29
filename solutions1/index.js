// //Getting DOM
// let addButton = document.getElementById("add-button");
// //Adding an eventlistener
// addButton.addEventListener('click', addButton);
// //Function to add the item
// function addItem() {
//     alert("Add button")
// }
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("new-task-container").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("incomplete-tasks").appendChild(li);
//   }
//   document.getElementById("new-task").value = "";
// }
// Get references to DOM elements

let todoList = [];
const inputItem = document.querySelector('new-task');
const addButton = document.querySelector('#add-button');
const todoTask= document.querySelector('#incomplete-tasks');


function addItem () {
  alert("Add an item");
}
function editItem (item) {
  alert("Edit item")
}

// 
// // Get todo list items from localStorage, or initialize an empty array
// let todos = JSON.parse(localStorage.getItem('todos')) || [];

// // Function to render the todo list
// function renderTodos() {
//   // Clear existing todo list items
//   todoList.innerHTML = '';

//   // Reverse the order of the todos array so that the most recently added item appears first
//   const reversedTodos = todos.slice().reverse();

//   // Iterate over the todos array and add each item to the list
//   for (let i = 0; i < reversedTodos.length; i++) {
//     const todo = reversedTodos[i];
//     const li = document.getElementsByTagName('li');
//     const span = document.createElement('span');
//     const editButton = document.getElementById('edit-button');
//     const deleteButton = document.getElementById('delete-button');

//     span.textContent = todo;
//     // editButton.textContent = 'Edit';
//     // removeButton.textContent = 'Remove';

//     // Add event listener for edit button
//     editButton.addEventListener('click', () => {
//       const newTodo = prompt('Enter new todo:', todo);

//       // Update todo in array and localStorage
//       if (newTodo !== null && newTodo !== '') {
//         const index = todos.indexOf(todo);
//         todos[index] = newTodo;
//         localStorage.setItem('todos', JSON.stringify(todos));
//         renderTodos();
//       }
//     });

//     // Add event listener for remove button
//     deleteButton.addEventListener('click', () => {
//       const index = todos.indexOf(todo);

//       // Remove todo from array and localStorage
//       if (index > -1) {
//         todos.splice(index, 1);
//         localStorage.setItem('todos', JSON.stringify(todos));
//         renderTodos();
//       }
//     });

//     // li.appendChild(span);
//     // li.appendChild(editButton);
//     // li.appendChild(deleteButton);
//     // todoList.appendChild(li);
//   }
// }

// // Render initial todo list on page load
// renderTodos();

// // Add event listener for add button
// addButton.addEventListener('click', () => {
//   alert("Add an item")
  
//   //const todo = inputItem.value;

//   // Add new todo to array and localStorage
//   if (todo !== '') {
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
//     inputItem.value = '';
//     renderTodos();
//   }
// });
