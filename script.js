// script.js

// Step 1: Sample tasks
let tasks = [
  { id: 1, name: "Finish homework", date: "2025-10-01", status: "Pending" },
  { id: 2, name: "Go grocery shopping", date: "2025-10-02", status: "Pending" },
  { id: 3, name: "Call mom", date: "2025-10-03", status: "Completed" },
  { id: 4, name: "Workout", date: "2025-10-04", status: "Pending" },
  { id: 5, name: "Read a book", date: "2025-10-05", status: "Pending" }
];

// Step 2: Function to display tasks in the DOM
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // clear list before re-rendering

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-white p-3 rounded-lg shadow";

    // Task text (with line-through if completed)
    li.innerHTML = `
      <div>
        <p class="${task.status === "Completed" ? "line-through text-green-600" : ""}">
          ${task.name}
        </p>
        <small class="text-gray-500">Due: ${task.date}</small>
      </div>
      <div class="flex gap-2">
        <button onclick="toggleStatus(${task.id})" class="px-2 py-1 text-xs bg-green-500 text-white rounded">
          ${task.status === "Pending" ? "Complete" : "Undo"}
        </button>
        <button onclick="deleteTask(${task.id})" class="px-2 py-1 text-xs bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Call render on page load
renderTasks();
