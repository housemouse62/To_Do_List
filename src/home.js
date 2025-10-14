import "./home.css";
import { taskManager } from "./taskData";

const listMaker = function(mainContainer) {
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

export { listMaker };


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
