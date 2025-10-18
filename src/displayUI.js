import "./displayUI.css";
import { taskManager } from "./taskData";

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

const showProjects = function(mainContainer) {
    mainContainer.innerHTML = '';

// Div for List of Items Display
const projectListDiv = document.createElement('div');
    projectListDiv.className = 'projectListDiv';
    mainContainer.append(projectListDiv);

taskManager.projects.forEach((item, index) => {
    const projectListItemCard = document.createElement('div');
    projectListItemCard.className = 'projectListItemCard';
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

export { showAllTasks };
export { showProjects };


// const defaultList = new buildList();
// const ui = new listOfItemsDisplay();

// defaultList.addItemToArray("Go Home", "Take the train", "Tomorrow", "High", "maybe the bus to the train");
// defaultList.addItemToArray("Go Back", "Take the train", "Tomorrow", "High", "maybe the bus to the train");
// defaultList.addItemToArray("Get Down", "Take the train", "Tomorrow", "High", "maybe the bus to the train");

// console.log(defaultList)

// ui.showList(defaultList.listName);
// console.log(document.querySelector(".mainPanel"));
// ;

// console.log(document.querySelector(".mainPanel"));
