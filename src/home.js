import "./home.css";

const listMaker = function(mainContainer) {
    mainContainer.innerHTML = '';
    
// Item Creator
class toDoItem {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    };
};

// List Builder
class buildList {
    constructor() {
        this.listName = [];
    };

    addItemToArray(title, description, dueDate, priority, notes) {
        const item = new toDoItem(title, description, dueDate, priority, notes)
        this.listName.push(item);
    };
};

// Form Interface
const formDisplay = function(mainContainer) {
mainContainer.innerHTML = '';

const itemForm = document.createElement("fieldset");
mainContainer.appendChild(itemForm);
const legend = document.createElement("legend");
legend.innerHTML = 'New Task';
itemForm.appendChild(legend);
};

formDisplay(mainContainer);
// List of the Lists
class listOfLists {
    constructor(listName){
        this.listName = listName;
    };

    addListToListArray(listName) {
        const ListArray = [];
    };
};

// Div for List of Items Display
const listDiv = document.createElement('div');
    listDiv.className = 'listDiv';
    mainContainer.append(listDiv);

// List Display
// (title, description, dueDate, priority, notes)
class listOfItemsDisplay {
    constructor(){}

    showList(listOfItemsArray = []) {
        listOfItemsArray.forEach((item, index) => {
        
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
}};



const defaultList = new buildList();
const ui = new listOfItemsDisplay();

defaultList.addItemToArray("Go Home", "Take the train", "Tomorrow", "High", "maybe the bus to the train");
defaultList.addItemToArray("Go Back", "Take the train", "Tomorrow", "High", "maybe the bus to the train");
defaultList.addItemToArray("Get Down", "Take the train", "Tomorrow", "High", "maybe the bus to the train");

console.log(defaultList)

ui.showList(defaultList.listName);
console.log(document.querySelector(".mainPanel"));
};

console.log(document.querySelector(".mainPanel"));
export { listMaker };