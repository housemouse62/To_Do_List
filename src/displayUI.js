import "./displayUI.css";
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
    listItemCard.addEventListener('click', () => showClickedItem(item))
    listItemCard.classList.add('itemCard');
    listItemCard.setAttribute('id', `card${index + 1}`);

    const listItemTitle = document.createElement('h3');
    listItemTitle.classList.add('itemTitle', 'info');
    listItemTitle.textContent = `${item.title}`;

    const itemDate = document.createElement('h4')
    itemDate.classList.add('itemDate', 'info');
    itemDate.textContent = `${item.dueDate}`

    listDiv.append(listItemCard);
    listItemCard.append(
        listItemTitle,
        itemDate
    );
    });
};

// All Projects Display
const showProjects = function(mainContainer) {
    mainContainer.innerHTML = '';

// Div for List of Projects Display
const projectListDiv = document.createElement('div');
    projectListDiv.className = 'projectListDiv';
    mainContainer.append(projectListDiv);

//Display the projects
taskManager.projects.forEach((item, index) => {
    const projectListItemCard = document.createElement('div');
    projectListItemCard.className = 'projectListItemCard';
    projectListItemCard.dataset.projectID = item.id;
    projectListItemCard.addEventListener('click', (event) => {
        const clickedID = event.currentTarget.dataset.projectID;
        showClickedProject(clickedID)
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

function showClickedProject(clickedID) {
const projectOverlay = document.createElement('div');
projectOverlay.classList.add('projectOverlay', 'popupOverlay');
const projectContent = document.createElement('div');
const ul = document.createElement('ul');
const projectTasks = taskManager.tasks.filter(task => task.projectID === clickedID);
console.log(projectTasks)
projectTasks.forEach(task => {
    const li = document.createElement('li');
    console.log(task.title)
    li.textContent = task.title;

    ul.append(li);
});
projectContent.classList.add('projectContent', 'popupContent');



projectOverlay.addEventListener('click', (event) => {
    if (event.target === projectOverlay) {
        projectOverlay.remove()
    }
})
document.body.append(projectOverlay)
projectOverlay.append(projectContent)
projectContent.append(ul);
}

function showClickedItem() {
const itemOverlay = document.createElement('div');
itemOverlay.classList.add('itemOverlay', 'popupOverlay');
const itemContent = document.createElement('div');
itemContent.textContent = 'check 1, 2, 3';
itemContent.classList.add('itemContent', 'popupContent');

itemOverlay.addEventListener('click', (event) => {
    if (event.target === itemOverlay) {
        itemOverlay.remove()
    }
})
document.body.append(itemOverlay);
itemOverlay.append(itemContent);

    console.log('you clicked an item');
}

export { showAllTasks };
export { showProjects };
export { showClickedProject };
