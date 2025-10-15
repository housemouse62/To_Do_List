import './createTaskUI.css';
import { taskManager } from './taskData';

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

// existing project checkbox
const existingLabel = document.createElement('label');
existingLabel.setAttribute('for', 'existing');
existingLabel.innerHTML = "Part of a Project?";

const existingProject = document.createElement('input');
existingProject.setAttribute('id', 'existing');
existingProject.setAttribute('type', 'checkbox');
existingProject.setAttribute('value', 'existing');
existingProject.setAttribute('name', 'existing');

// existing project selection drop down
const projectSelect = document.createElement('select');
projectSelect.className = 'projectDropDown';
projectSelect.setAttribute('id', 'projectDropDown');
projectSelect.setAttribute('name', 'projectDropDown');
projectSelect.style.visibility = 'hidden';

const newProjectsArray = [
    {
    id : '',
    projectName : 'Please Select'
    },
    {
    id : 0,
    projectName : 'New Project'
    },
    {
    id : 1,
    projectName : 'Project 1'
    },
    {
    id : 2,
    projectName : 'Project 2'
    },
    ];

 function addProjectOptions(projectsArray) {
    let length = Object.keys(projectsArray).length;
   for (let i = 0; i < length; i++) {
        const option = document.createElement('option');
        option.value = projectsArray[i].id;
        option.textContent = projectsArray[i].projectName;
        projectSelect.appendChild(option);
   }
 }

 addProjectOptions(newProjectsArray);

// add new project name
const addNewProjectField = document.createElement('input');
addNewProjectField.setAttribute('id', 'addNewProject');
addNewProjectField.setAttribute('type', 'text');
addNewProjectField.setAttribute('name', 'addNewProject');
addNewProjectField.placeholder = 'new project name';
addNewProjectField.style.visibility = 'hidden';

//logic to show/hide addNewProjectField
// const dropSelection = document.querySelector('projectDropDown')
// dropSelection.addEventListener('change', () => {
//    // console.log(${event.target.id})
//    console.log('hello world')
// })
//if newProjectsArray[1])

 // show/hide project drop down logic
existingProject.addEventListener('change', () => {
   
    if (existingProject.checked) {
        projectSelect.style.visibility = 'visible';
    } else {
        projectSelect.style.visibility = 'hidden';
    };
});

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
highPriorityBox.setAttribute('value', 'true');

// add task button
const addTaskButton = document.createElement('button');
addTaskButton.className = 'addTaskButton';
addTaskButton.innerHTML = 'Add Task';

addTaskButton.addEventListener('click', () => {
    const title = document.querySelector('#taskName').value;
    const description = document.querySelector('#description').value;
    const notes = document.querySelector('#notes').value;
    const project = document.querySelector('#project').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#highPriority').value;

taskManager.addTask(title, description, notes, project, dueDate, priority);
console.log(taskManager.tasks);
console.log(taskManager.projects);
});
addTaskDisplayDiv.append(
    areaTitle,
    taskNameLabel,
    taskNameInput,
    descriptionLabel,
    descriptionInput,
    notesLabel,
    notesInput,
    existingLabel,
    existingProject,
    projectSelect,
    addNewProjectField,
    dueDateLabel,
    dueDateSelector,
    highPriorityLabel,
    highPriorityBox,
    addTaskButton,
);

};

export { addTaskDisplay };