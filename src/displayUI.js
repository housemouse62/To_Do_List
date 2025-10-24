import "./displayUI.css";
import { sideNavDiv } from "./sidenav";
import { taskManager } from "./taskData";


// All Tasks Display
const showAllTasks = function(mainContainer) {
    mainContainer.innerHTML = '';

// Div for List of Items Display
const listDiv = document.createElement('div');
    listDiv.className = 'listDiv';
    mainContainer.append(listDiv);

// Create Header for Display
const headerCard = document.createElement('div');
    headerCard.classList.add('itemCard', 'headerCard');
    listDiv.append(headerCard);

const headerTitle = document.createElement('h2');
    headerTitle.classList.add('itemTitle', 'headerTitle');
    headerTitle.textContent = 'Task';
    headerCard.append(headerTitle);

const headerDate = document.createElement('h2');
    headerDate.classList.add('itemDate', 'headerDate');
    headerDate.textContent = 'Do By:'
    headerCard.append(headerDate);

taskManager.tasks.forEach((item, index) => {
    const listItemCard = document.createElement('div');
    listItemCard.classList.add('itemCard');
    listItemCard.setAttribute('id', `card${index + 1}`);
    listItemCard.dataset.id = item.id;

    listItemCard.addEventListener('click', (event) => {
        const clickedTaskID = event.currentTarget.dataset.id;
        showClickedItem(clickedTaskID)
    })

    const listItemTitle = document.createElement('h3');
    listItemTitle.classList.add('itemTitle', 'info');
    listItemTitle.textContent = `${item.title}`;

    const itemDate = document.createElement('h4')
    itemDate.classList.add('itemDate', 'info');
    itemDate.textContent = `${item.dueDate}`

    listDiv.append(listItemCard);
    listItemCard.append(
        listItemTitle,
        itemDate,
    );
    });
};

// All Projects Display
const showProjects = function(mainContainer) {
    mainContainer.innerHTML = '';

// Container for 2 column project div
const projectContainer = document.createElement('div');
    projectContainer.className = 'projectContainer';
    mainContainer.append(projectContainer);

// Div for List of Projects Display
const projectListDiv = document.createElement('div');
    projectListDiv.className = 'projectListDiv';
    projectContainer.append(projectListDiv);

const projectListHeader = document.createElement('h2');
    projectListHeader.className = 'projectListHeader';
    projectListHeader.textContent = 'Projects';
    projectListDiv.append(projectListHeader);

//Display the projects
taskManager.projects.forEach((item, index) => {
    const projectListItemCard = document.createElement('div');
    projectListItemCard.className = 'projectListItemCard';
    projectListItemCard.dataset.projectID = item.id;
    projectListItemCard.addEventListener('click', (event) => {
        const clickedID = event.currentTarget.dataset.projectID;
        const existingContent = document.querySelector('.projectContent');
        if (existingContent) {
            existingContent.remove();
        };
        showProjectTasks(clickedID, projectContainer)
    })
    projectListItemCard.setAttribute('id', `card${index + 1}`);

    const projectListItemTitle = document.createElement('h3');
    projectListItemTitle.className = 'projectListItemTitle';
    projectListItemTitle.textContent = `${item.name}`;

    projectListDiv.append(projectListItemCard);
    projectListItemCard.append(
        projectListItemTitle,
    );
    });
};

// Display Tasks For A Clicked Project
function showProjectTasks(clickedID, projectContainer) {
    
const projectTasks = taskManager.tasks.filter(task => task.projectID === clickedID);
const projectContent = document.createElement('div');
projectContainer.append(projectContent);

// Create Header for Display
const headerCard = document.createElement('div');
    headerCard.classList.add('itemCard', 'headerCard');
    projectContent.append(headerCard);

const headerTitle = document.createElement('h2');
    headerTitle.classList.add('itemTitle', 'headerTitle');
    headerTitle.textContent = 'Task';
    headerCard.append(headerTitle);

const headerDate = document.createElement('h2');
    headerDate.classList.add('itemDate', 'headerDate');
    headerDate.textContent = 'Do By:'
    headerCard.append(headerDate);

projectTasks.forEach((task, index) => {
    const listItemCard = document.createElement('div');
    listItemCard.classList.add('itemCard');
    listItemCard.setAttribute('id', `card${index + 1}`);
    listItemCard.dataset.id = task.id;

    listItemCard.addEventListener('click', (event) => {
        const clickedTaskID = event.currentTarget.dataset.id;
        showClickedItem(clickedTaskID)
    })

    const listItemTitle = document.createElement('h3');
    listItemTitle.classList.add('itemTitle', 'info');
    listItemTitle.textContent = task.title;

    const itemDate = document.createElement('h4');
    itemDate.classList.add('itemDate', 'info');
    itemDate.textContent = task.dueDate;

    projectContent.append(listItemCard);
    listItemCard.append(listItemTitle, itemDate);
});

projectContent.classList.add('projectContent');
};

function showClickedItem(clickedTaskID) {
const itemOverlay = document.createElement('div');
itemOverlay.classList.add('itemOverlay', 'popupOverlay');
const itemContent = document.createElement('div');
const clickedItem = taskManager.tasks.find(clickedTask => clickedTask.id === clickedTaskID)
itemContent.classList.add('itemContent', 'popupContent');

// Item Title
const itemName = document.createElement('h2');
itemName.classList.add('itemName');
itemName.textContent = clickedItem.title;

// Item Description
const itemDescriptionTitle = document.createElement('h4');
itemDescriptionTitle.textContent = 'Description:';
itemDescriptionTitle.classList.add('taskDescription');
const itemDescription = document.createElement('textarea');
itemDescription.classList.add('itemDescription');
itemDescription.value = clickedItem.description;

// Item Notes
const itemNotesTitle = document.createElement('h4');
itemNotesTitle.textContent = 'Notes:';
itemNotesTitle.classList.add('taskNotes');
const itemNotes = document.createElement('textarea');
itemNotes.classList.add('itemNotes');
itemNotes.value = clickedItem.notes;

// Save Button
const saveButton = document.createElement('button');
saveButton.classList.add('saveButton');
saveButton.textContent = 'Save';

saveButton.addEventListener('click', () => {
    clickedItem.description = itemDescription.value;
    clickedItem.notes = itemNotes.value;
    itemOverlay.remove()
})
// Delete Button
const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'delete';

deleteButton.addEventListener('click', () => {
    const mainPanel = document.querySelector('.mainPanel');
    const taskElement = document.querySelector(`[data-id="${clickedItem.id}"]`);

    taskElement.classList.add('removing');

    setTimeout(() => {
        taskManager.deleteTask(clickedItem.id)
        mainPanel.innerHTML = '';
        showAllTasks(mainPanel);
        itemOverlay.remove();
    }, 300);
    });

// Close Window when click on outside the popup box
itemOverlay.addEventListener('click', (event) => {
    if (event.target === itemOverlay) {
        clickedItem.description = itemDescription.value;
        clickedItem.notes = itemNotes.value;
        itemOverlay.remove()
    }
})
document.body.append(itemOverlay);
itemOverlay.append(itemContent);
itemContent.append(
    itemName,
    itemDescriptionTitle,
    itemDescription,
    itemNotesTitle,
    itemNotes,
    saveButton,
    deleteButton,
);
    return clickedItem
};

export { showAllTasks };
export { showProjects };
export { showProjectTasks };
