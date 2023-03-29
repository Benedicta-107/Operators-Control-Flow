// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("new-task-container").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("incomplete-tasks").appendChild(li);
  }
  document.getElementById("new-task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// window.addEventListener('load', () => {
//     const form = document.querySelector("#new-task-form");
//     const input = document.querySelector("#new-task-input");
//     const list_el = document.querySelector("#tasks");
//     console.log(form);

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log("Submit form");

//         const task = input.value;

//         if (!task) {
//             alert("Please fill out the task");
//             return;
//         }
//         const task_el = document.createElement("div");
//         task_el.classList.add("task");
        
//         const task_content_el = document.createElement("div");
//         task_content_el.classList.add("content");

//         task_el.appendChild(task_content_el);

//         const task_input_el = document.createElement("input");
//         task_input_el.classList.add("text");
//         task_input_el.type = "text";
//         task_input_el.value = task;
//         task_input_el.setAttribute("readonly", "readonly");

//         task_content_el.appendChild(task_input_el);

//         const task_actions_el = document.createElement("div");
//         task_actions_el.classList.add("actions");

//         //const task_edit_el = document

//         input.value = "";
        
//     })
// })