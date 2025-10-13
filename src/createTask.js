import './createTask.css';

const addTaskDisplay = function(mainContainer) {
mainContainer.innerHTML = '';

// create div area
const addTaskDisplayDiv = document.createElement('div');
addTaskDisplayDiv.className = 'addTaskDisplayDiv';
mainContainer.append(addTaskDisplayDiv);

// div title
const areaTitle = document.createElement('h2');
areaTitle.className = 'areaTitle';
areaTitle.textContent = 'Add A Task';

// task name input
const taskNameLabel = document.createElement('label');
taskNameLabel.setAttribute('for', 'taskName');
taskNameLabel.innerHTML = 'Task Name:';

const taskNameInput = document.createElement('input');
taskNameInput.setAttribute('id', 'taskName');
taskNameInput.setAttribute('type', 'text');
taskNameInput.setAttribute('name', 'taskName');

// description input
const descriptionLabel = document.createElement('label');
descriptionLabel.setAttribute('for', 'description');
descriptionLabel.innerHTML = 'Description:';

const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('id', 'description');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('name', 'description');

// notes
const notesLabel = document.createElement('label');
notesLabel.setAttribute('for', 'notes');
notesLabel.innerHTML = 'Notes:';

const notesInput = document.createElement('input');
notesInput.setAttribute('id', 'notes');
notesInput.setAttribute('type', 'text');
notesInput.setAttribute('name', 'notes');

// existing project selection
const projectLabel = document.createElement('label');
projectLabel.setAttribute('for', 'project');
projectLabel.innerHTML = 'Part of an Existing Project?';

const projectSelect = document.createElement('select');
projectSelect.setAttribute('id', 'project');
projectSelect.setAttribute('name', 'project');

const newProjectsArray = [
    {
    id : -1,
    projectName : 'No'
    },
    {
    id : 0,
    projectName : 'Project 1'
    },
    {
    id : 1,
    projectName : 'Project 2'
    },
    {
    id : 2,
    projectName : 'Project 3'
    },
    ];
 function addProjectOptions(projectsArray) {
    let length = Object.keys(projectsArray).length;
   for (let i = 0; i < length; i++) {
    console.log(projectsArray[1])
        const option = document.createElement('option');
        option.value = projectsArray[i].id;
        option.textContent = projectsArray[i].projectName;
        projectSelect.appendChild(option);
   }
 }
 addProjectOptions(newProjectsArray);

// due date
const dueDateLabel = document.createElement('label');
dueDateLabel.setAttribute('for', 'dueDate');
dueDateLabel.innerHTML = 'Due Date:';

const dueDateSelector = document.createElement('input');
dueDateSelector.setAttribute('id', 'dueDate');
dueDateSelector.setAttribute('type', 'date');
dueDateSelector.setAttribute('name', 'dueDate');

// high priority
const highPriorityLabel = document.createElement('label');
highPriorityLabel.setAttribute('for', 'highPriority');
highPriorityLabel.innerHTML = 'High Priority?';

const highPriorityBox = document.createElement('input');
highPriorityBox.setAttribute('id', 'highPriority');
highPriorityBox.setAttribute('type', 'checkbox');
highPriorityBox.setAttribute('name', 'highPriority');

addTaskDisplayDiv.append(
    areaTitle,
    taskNameLabel,
    taskNameInput,
    descriptionLabel,
    descriptionInput,
    notesLabel,
    notesInput,
    projectLabel,
    projectSelect,
    dueDateLabel,
    dueDateSelector,
    highPriorityLabel,
    highPriorityBox,
)

};

export { addTaskDisplay };