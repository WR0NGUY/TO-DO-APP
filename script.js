// Get elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement('li');
    
    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    // Add the task text and delete button
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">Delete</button>
    `;
    
    // Add the checkbox to the list item
    li.insertBefore(checkbox, li.firstChild); // Insert checkbox at the start of the list item

    // Mark task as completed when checkbox is clicked
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });

    // Delete task when delete button is clicked
    li.querySelector('.delete').addEventListener('click', () => {
      li.style.transform = "scale(0)";
      li.style.opacity = 0;
      setTimeout(() => {
        taskList.removeChild(li);
      }, 300); // Wait for the scale animation before removing
    });

    // Append task to the list with animation
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding
  }
}

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);


