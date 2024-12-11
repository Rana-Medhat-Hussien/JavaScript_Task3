// References to form, input, and task list elements 

//<form class="todo-form" id="todo-form"></form>
const todoForm = document.getElementById('todo-form');

//<input type="text" id="todo-input" placeholder="Add a new task">
const todoInput = document.getElementById('todo-input');

//<ul class="todo-list" id="todo-list"></ul>
const todoList = document.getElementById('todo-list');

// Event listener for adding tasks
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const task = todoInput.value.trim(); // Get the task text
    if (task === '') return; // Exit if the input is empty

    // Create a new list item for the task
    //<li class = 'todo-item' ></li>
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Add the task text
    //<span>task</span>
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Create a container for the buttons (add & delete button after added list )
    //<div class = 'button-group'> </div>
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    // Create a delete button for the task
    //<button class = 'delete-button' >Delete</button>
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        // Remove the task on click 
        // remove row <li></li> that contain the task you want to remove
        todoList.removeChild(li);
    });

    // Create a done button for the task
    //<button class = 'done-button'>Done</button>
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'done-button';
    doneButton.addEventListener('click', function() {
        li.classList.add('completed'); // Mark task as completed
    });

    // Append buttons to the button group
    buttonGroup.appendChild(doneButton);
    buttonGroup.appendChild(deleteButton);

    // Append the task text and button group to the list item
    li.appendChild(taskText);
    li.appendChild(buttonGroup);

    // Add the list item to the task list
    //add to <ul></ul> new row
    todoList.appendChild(li);  

    todoInput.value = ''; // Clear the input field
});