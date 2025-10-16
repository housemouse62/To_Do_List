import "./displayUI.css";
import { taskManager } from "./taskData";

const showAllTasks = function(mainContainer) {
    mainContainer.innerHTML = '';

// Div for List of Items Display
const listDiv = document.createElement('div');
    listDiv.className = 'listDiv';
    mainContainer.append(listDiv);

taskManager.tasks.forEach((item, index) => {
    const listItemCard = document.createElement('div');
    listItemCard.className = 'itemCard';
    listItemCard.setAttribute('id', `card${index + 1}`);

    const listItemTitle = document.createElement('h3');
    listItemTitle.className = 'itemTitle';
    listItemTitle.textContent = `${item.title}`;

    const itemDate = document.createElement('h4')
    itemDate.className = 'itemDate';
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
