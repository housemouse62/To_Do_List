import './createTaskUI.css';
import { showAllTasks } from './displayUI';
import { taskManager } from './taskData';

function addProjectOptions() {
    const projectSelect = document.querySelector('#projectDropDown');
    if (!projectSelect) return;

    projectSelect.innerHTML = '';

    const defaultOptions = [
        { id: '', projectName: 'Please Select' },
        { id: '0', projectName: 'New Project' }
    ];

    defaultOptions.forEach((project) => {
        const option = document.createElement('option');
        option.id = project.id;
        option.value = project.projectName;
        option.textContent = project.projectName;
        projectSelect.append(option);
        
    });

    taskManager.projects.forEach((project) => {
    if (![...projectSelect.options].some(opt => opt.value === project.name)) {
        const option = document.createElement('option');
        option.id = project.id;
        option.value = project.name;
        option.textContent = project.name;
        projectSelect.append(option);
    }
    });
 };

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
taskNameLabel.classList.add('inputLabel', 'nameLabel');

const taskNameInput = document.createElement('input');
taskNameInput.classList.add('inputField', 'nameInput');
taskNameInput.setAttribute('id', 'taskName');
taskNameInput.setAttribute('type', 'text');
taskNameInput.setAttribute('name', 'taskName');

// description input
const descriptionLabel = document.createElement('label');
descriptionLabel.setAttribute('for', 'description');
descriptionLabel.innerHTML = 'Description:';
descriptionLabel.classList.add('inputLabel');

const descriptionInput = document.createElement('textarea');
descriptionInput.classList.add('inputField', 'descriptionField')
descriptionInput.setAttribute('id', 'description');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('name', 'description');
descriptionInput.value = '';

// notes
const notesLabel = document.createElement('label');
notesLabel.setAttribute('for', 'notes');
notesLabel.innerHTML = 'Notes:';
notesLabel.classList.add('inputLabel');

const notesInput = document.createElement('textarea');
notesInput.classList.add('inputField')
notesInput.setAttribute('id', 'notes');
notesInput.setAttribute('type', 'text');
notesInput.setAttribute('name', 'notes');

// existing project checkbox
const existingLabel = document.createElement('label');
existingLabel.setAttribute('for', 'existing');
existingLabel.innerHTML = "Part of a Project?";
existingLabel.classList.add('inputLabel');

const existingProject = document.createElement('input');
existingProject.setAttribute('id', 'existing');
existingProject.setAttribute('type', 'checkbox');
existingProject.setAttribute('value', 'existing');
existingProject.setAttribute('name', 'existing');
existingProject.classList.add('checkbox');

// existing project selection drop down
const projectSelect = document.createElement('select');
projectSelect.className = 'projectDropDown';
projectSelect.setAttribute('id', 'projectDropDown');
projectSelect.setAttribute('name', 'projectDropDown');
projectSelect.style.visibility = 'hidden';

 //addProjectOptions();

// add new project name
const addNewProjectField = document.createElement('input');
addNewProjectField.setAttribute('id', 'addNewProject');
addNewProjectField.setAttribute('type', 'text');
addNewProjectField.setAttribute('name', 'addNewProject');
addNewProjectField.placeholder = 'new project name';
addNewProjectField.style.visibility = 'hidden';
addNewProjectField.classList.add('projectName');

//logic to show/hide addNewProjectField
projectSelect.addEventListener("change", (event) => {
    if (`${event.target.value  }` === 'New Project') {
        addNewProjectField.style.visibility = 'visible'
    } else {
        addNewProjectField.style.visibility = 'hidden'
    }
})

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
dueDateLabel.classList.add('inputLabel');

const dueDateSelector = document.createElement('input');
dueDateSelector.setAttribute('id', 'dueDate');
dueDateSelector.setAttribute('type', 'date');
dueDateSelector.setAttribute('name', 'dueDate');
dueDateSelector.classList.add('dueDateSelector');

// high priority
const highPriorityLabel = document.createElement('label');
highPriorityLabel.setAttribute('for', 'highPriority');
highPriorityLabel.innerHTML = 'High Priority?';
highPriorityLabel.classList.add('inputLabel');

const highPriorityBox = document.createElement('input');
highPriorityBox.setAttribute('id', 'highPriority');
highPriorityBox.setAttribute('type', 'checkbox');
highPriorityBox.setAttribute('name', 'highPriority');
highPriorityBox.setAttribute('value', 'highPriority');

// add task button
const addTaskButton = document.createElement('button');
addTaskButton.className = 'addTaskButton';
addTaskButton.innerHTML = 'Add Task';

addTaskButton.addEventListener('click', () => {
    const title = taskNameInput.value.trim();
    const description = descriptionInput.value.trim();
    const notes = notesInput.value.trim();
    const dueDate = dueDateSelector.value;
    let priority = '';
    if (highPriorityBox.checked) {
        priority = true
    } else {
        priority = false
    }

    let project = null;
    const projectSelection = projectSelect.value;
    
// create new project if selection
if (projectSelect.value === 'New Project' && addNewProjectField.value.trim() !== '') {
    const newProject = taskManager.addProject(addNewProjectField.value.trim());
    project = newProject.name;
    } else if (projectSelection && projectSelection !== 'Please Select') {
    project = projectSelection;
    }

// adds task to tasks array
    taskManager.addTask(title, description, notes, project, dueDate, priority);

// refresh dropdown menu
    addProjectOptions();

// resets all fields/dropdown upon submission
taskNameInput.value = '';
descriptionInput.value = '';
notesInput.value = '';
//projectInput.value = '';
dueDateSelector.value = '';
highPriorityBox.checked = false;
existingProject.checked = false;
projectSelect.style.visibility = 'hidden';
addNewProjectField.style.visibility = 'hidden';

 const mainPanel = document.querySelector('.mainPanel')
    showAllTasks(mainPanel);
})


// append label & fields
addTaskDisplayDiv.append(
    areaTitle,
    taskNameLabel,
    taskNameInput,
    descriptionLabel,
    descriptionInput,
    notesLabel,
    notesInput,
    dueDateLabel,
    dueDateSelector,
    highPriorityLabel,
    highPriorityBox,
    existingLabel,
    existingProject,
    projectSelect,
    addNewProjectField,
    addTaskButton,
)
};


export { addTaskDisplay };
export { addProjectOptions };