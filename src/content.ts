const style = `
#todo-overlay {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 380px;
    min-height: 150px;
    max-height: 75vh;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border-radius: 10px;
    padding: 15px 15px 5px 15px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    cursor: move;
    transition: transform 0.3s ease;
    overflow-y: auto;
}

#overlay-header {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}
#overlay-footer a {
    margin-left: 5px;
}
#overlay-header input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: white;
    font-size: 14px;
}
#overlay-header #add-task-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    font-weight: bold;
}
#add-task-btn:hover {
    background-color: #45a049;
}
#task-list {
    list-style-type: none;
    padding: 0;
    margin-top: 15px;
}
#task-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 8px 0;
    border-radius: 4px;
    cursor: auto;
}
.task-label {
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px;
    word-wrap: break-word;
}
#task-list li input[type="checkbox"] {
    margin-right: 10px;
    cursor: pointer;
}
#todo-overlay a {
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
}
#todo-overlay a:hover {
    text-decoration: underline;
}
#filter-tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
#filter-tabs button {
    flex: 1;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s;
    border-radius: 4px;
}

#filter-tabs button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.active-tab {
    background-color: #4CAF50;
}

.task-item.completed-task a {
    text-decoration: line-through;
    color: #ccc;
}

#tabs-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}

#tabs-container button {
    background: none;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
}

#tabs-container button.active-tab {
    color: #4CAF50;
    /* Highlight active tab */
    border-bottom: 2px solid #4CAF50;
}

.task-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.task-link {
    flex-grow: 1;
    /* Takes up full space on the left */
    font-size: 14px;
    color: white;
    word-wrap: break-word;
    width: 100%;
}

.task-link:first-letter {
    text-transform: uppercase;
}


.task-actions {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.task-date {
    flex-grow: 1;
    font-size: 12px;
    color: #cccccc;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.task-actions input[type="checkbox"] {
    cursor: pointer;
    height: 16px;
    color: #45a049;
}

.delete-btn {
    background: none;
    border: 1px solid transparent;
    border-radius: 100%;
    color: #ff4d4d;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
}

.delete-btn:hover {
    border: 1px solid #ff1a1a;
    color: #FFFFFF;
    background-color: #ff1a1a;
}
`;

// Create a <style> element
const styleElement = document.createElement('style');
styleElement.textContent = style;

// Append the <style> to the head of the document
document.head.appendChild(styleElement);

// Create the overlay container
const todoOverlay = document.createElement('div');
todoOverlay.classList.add('absolute', 'bg-red-600', 'text-white');
todoOverlay.id = 'todo-overlay';

// Add the overlay to the body
document.body.appendChild(todoOverlay);

// Create a div to wrap the input and button
const overlayHeader = document.createElement('div');
overlayHeader.id = 'overlay-header';

// Create an input for new tasks
const taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.placeholder = 'Please add your task...';
taskInput.id = 'task-input';

// Add task input and button to the overlay
const addButton = document.createElement('button');
addButton.textContent = '+';
addButton.id = 'add-task-btn';

// Append input and button to the overlay
overlayHeader.appendChild(taskInput);
overlayHeader.appendChild(addButton);
todoOverlay.appendChild(overlayHeader);

// Create a list to display tasks
const taskList = document.createElement('ul');
taskList.id = 'task-list';
todoOverlay.appendChild(taskList);

// Create tab buttons for All Tasks and Completed Tasks
const tabsContainer = document.createElement('div');
tabsContainer.id = 'tabs-container';

const allTasksTab = document.createElement('button');
allTasksTab.textContent = 'All Tasks';
allTasksTab.id = 'all-tasks-tab';
allTasksTab.classList.add('active-tab'); // Initially active

const completedTasksTab = document.createElement('button');
completedTasksTab.textContent = '✅ Tasks';
completedTasksTab.id = 'completed-tasks-tab';

const summarizedTasksTab = document.createElement('button');
summarizedTasksTab.textContent = '🤖 AI Summarized';
summarizedTasksTab.id = 'summarized-tasks-tab';

tabsContainer.appendChild(allTasksTab);
tabsContainer.appendChild(completedTasksTab);
tabsContainer.appendChild(summarizedTasksTab);
todoOverlay.insertBefore(tabsContainer, taskList);

interface Task {
    id: number;
    text: string;
    completed: boolean;
    createdAt: number;
    url: string;
    title: string;
}

// Load tasks based on the selected filter and settings
function loadTasks(filter: 'all' | 'completed' = 'all'): void {
    chrome.storage.local.get(['tasks', 'filterByUrl'], (data) => {
        taskList.innerHTML = ''; // Clear the task list

        let tasks: Task[] = (data.tasks || []).sort((a: Task, b: Task) => b.createdAt - a.createdAt);

        const currentUrl = document.URL;
        const isFilterByUrlEnabled = data.filterByUrl || false;

        // Filter tasks based on user settings and selected tab
        tasks = tasks.filter(task => {
            const isCompletedMatch = (filter === 'all' && !task.completed) || (filter === 'completed' && task.completed);
            const isUrlMatch = !isFilterByUrlEnabled || task.url === currentUrl;
            return isCompletedMatch && isUrlMatch;
        });

        tasks.forEach(addTaskToDOM);
    });
}

// Initialize by loading tasks based on default or user-selected tab
chrome.storage.local.get('defaultCompletedTab', (data) => {
    const initialFilter = data.defaultCompletedTab ? 'completed' : 'all';
    loadTasks(initialFilter);
});

allTasksTab.addEventListener('click', () => {
    setActiveTab('all');
    loadTasks('all');
});

completedTasksTab.addEventListener('click', () => {
    setActiveTab('completed');
    loadTasks('completed');
});

// Function to set the active tab style
function setActiveTab(tab: 'all' | 'completed') {
    if (tab === 'all') {
        allTasksTab.classList.add('active-tab');
        completedTasksTab.classList.remove('active-tab');
    } else {
        allTasksTab.classList.remove('active-tab');
        completedTasksTab.classList.add('active-tab');
    }
}

// Function to add a task to the DOM
function addTaskToDOM(task: Task): void {
    const li = document.createElement('li');
    li.classList.add('task-item', 'flex', 'justify-between');
    if (task.completed) li.classList.add('completed-task');

    // Container for checkbox and delete button
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');

    // Creation date display
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('task-date');

    const taskDate = new Date(task.createdAt);
    dateDiv.textContent = !isNaN(taskDate.getTime()) ? taskDate.toLocaleString() : "-";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    actionsDiv.appendChild(checkbox);
    actionsDiv.appendChild(dateDiv);
    actionsDiv.appendChild(deleteBtn);

    const linkDiv = document.createElement('div');
    linkDiv.classList.add('task-link');

    const taskLink = document.createElement('a');
    taskLink.href = task.url;
    taskLink.title = 'Page: ' + task.title;
    taskLink.target = '_blank';
    taskLink.textContent = task.text;

    linkDiv.appendChild(taskLink);

    li.appendChild(actionsDiv);
    li.appendChild(linkDiv);

    taskList.appendChild(li);
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId: number): void {
    chrome.storage.local.get('tasks', (data) => {
        const tasks: Task[] = data.tasks || [];
        const task = tasks.find(t => t.id === taskId);
        if (task) task.completed = !task.completed;
        chrome.storage.local.set({ tasks }, () => {
            const filter = document.querySelector('.active-tab')?.id === 'completed-tasks-tab' ? 'completed' : 'all';
            loadTasks(filter as 'all' | 'completed');
        });
    });
}

// Function to delete a task
function deleteTask(taskId: number): void {
    chrome.storage.local.get('tasks', (data) => {
        const tasks = (data.tasks || []).filter((t: Task) => t.id !== taskId);
        chrome.storage.local.set({ tasks }, () => {
            const filter = document.querySelector('.active-tab')?.id === 'completed-tasks-tab' ? 'completed' : 'all';
            loadTasks(filter as 'all' | 'completed');
        });
    });
}

// Add event listener for the Add button
addButton.addEventListener('click', () => {
    const newTaskText = taskInput.value.trim();
    if (newTaskText) {
        const newTask: Task = {
            id: Date.now(),
            text: newTaskText,
            completed: false,
            createdAt: Date.now(),
            url: document.URL,
            title: document.title
        };

        chrome.storage.local.get('tasks', (data) => {
            const tasks = data.tasks || [];
            tasks.push(newTask);
            tasks.sort((a: Task, b: Task) => b.createdAt - a.createdAt);

            chrome.storage.local.set({ tasks }, () => {
                taskInput.value = '';
                const filter = document.querySelector('.active-tab')?.id === 'completed-tasks-tab' ? 'completed' : 'all';
                loadTasks(filter as 'all' | 'completed');
            });
        });
    }
});

// Draggable functionality
todoOverlay.onmousedown = function (event) {
    const shiftX = event.clientX - todoOverlay.getBoundingClientRect().left;
    const shiftY = event.clientY - todoOverlay.getBoundingClientRect().top;

    function moveAt(pageX: number, pageY: number) {
        todoOverlay.style.left = pageX - shiftX + 'px';
        todoOverlay.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    todoOverlay.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        todoOverlay.onmouseup = null;
    };
};

// Disable default drag behavior on the overlay
todoOverlay.ondragstart = function () {
    return false;
};
