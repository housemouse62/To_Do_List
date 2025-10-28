import "./index.css";
import { showAllTasks } from "./displayUI.js";
import { showProjects } from "./displayUI.js";
import { sideNavDiv } from "./sidenav.js";
import { addTaskDisplay } from "./createTaskUI.js";
import { taskManager } from "./taskData.js";
import { addProjectOptions } from "./createTaskUI.js";


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

function seedDemoTasks() {
    taskManager.addTask('Eat Breakfast', 'Oats & Nuts', 'With oat milk?', 'This Morning', '2025-10-20')
    taskManager.addTask('Check Bike', 'Tires inflated?', 'Ready to go?',  'This Morning', '2025-10-20')
    taskManager.addTask('Head out to work', 'By 8:15', 'Or 8:20 if possible', 'This Morning', '2025-10-20')
    taskManager.addTask('Go Running', 'After Work', 'If possible', 'This Afternoon', '2025-10-20')
};

sideNavDiv(sideNav);
addTaskDisplay(sideBar);

document.addEventListener('DOMContentLoaded', () => {
    const mainPanel = document.querySelector('.mainPanel');
    const storedTasks = taskManager.loadTasksFromLocalStorage();
    
    if (storedTasks.length > 0) {
        taskManager.tasks = storedTasks;
    } else {
        seedDemoTasks()
        console.log('No stored tasks found - seeded demo tasks');
    }

    addProjectOptions();

    const currentView = localStorage.getItem('currentView');
    if (currentView === 'allProjects') {
        showProjects(mainPanel);
    } else {
    showAllTasks(mainPanel)
    }
});   

