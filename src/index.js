import "./index.css";
import { showAllTasks } from "./displayUI.js";
import { showProjects } from "./displayUI.js";
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
taskManager.addTask("big project", "it's going to be huge", "starts really soon", 'here we go', '27-10-1999', true)
console.log(taskManager.projects)
console.log(taskManager.tasks)
sideNavDiv(sideNav);
addTaskDisplay(sideBar);
showAllTasks(mainPanel);












console.log(greeting)

