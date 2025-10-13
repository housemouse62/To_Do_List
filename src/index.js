import "./index.css";
import { listMaker } from "./home.js";
import { greeting } from './lists.js';
import { sideNavDiv } from "./sidenav.js";
import { addTaskDisplay } from "./createTask.js";


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

sideNavDiv(sideNav);
addTaskDisplay(sideBar);
listMaker(mainPanel)












console.log(greeting)

