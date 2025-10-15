import "./index.css";
import { listMaker } from "./home.js";
import { greeting } from './lists.js';
import { sideNavDiv } from "./sidenav.js";
import { addTaskDisplay } from "./createTaskUI.js";
import { taskManager } from "./taskData.js";


// Navigation sidebar & main window
const content = document.querySelector('#content');

const sideNav = document.createElement('div');
sideNav.className = 'sideNav';
const mainPanel = document.createElement('div');
mainPanel.className = 'mainPanel';
const sideBar = document.createElement('div');
sideBar.className = 'sideBar';
content.append(
    sideNav,
    mainPanel,
    sideBar,
);

taskManager.addProject('hello');
taskManager.addTask("big project", "it's going to be huge", "starts really soon", 'non', 27-10-1999, true)
console.log(taskManager.projects)
console.log(taskManager.tasks)
sideNavDiv(sideNav);
addTaskDisplay(sideBar);
listMaker(mainPanel)












console.log(greeting)

