import "./index.css";
import { listMaker } from "./home.js";
import { greeting } from './lists.js';
import { sideNavDiv } from "./sidenav.js";


// Navigation sidebar & main window
const content = document.querySelector('#content');

const sideNav = document.createElement('div');
sideNav.className = 'sideNav';
const mainPanel = document.createElement('div');
mainPanel.className = 'mainPanel';
content.append(
    sideNav,
    mainPanel,
);

sideNavDiv();












console.log(greeting)

