import { showAllTasks, showProjects } from "./displayUI";
import './sidenav.css';

// Navigation Sidebar
const sideNavDiv = function(container) {
const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';
container.append(buttonContainer);

const allTasks = document.createElement('button');
allTasks.classList.add('seeTasks', 'allTasks');
allTasks.textContent = 'All Tasks';
const nextSeven = document.createElement('button');
nextSeven.classList.add('seeTasks', 'nextSeven');
nextSeven.textContent = 'Next 7 Days';
const nextMonth = document.createElement('button');
nextMonth.classList.add('seeTasks', 'nextMonth');
nextMonth.textContent = 'Next Month';
const space = document.createElement('div');
space.className = 'space';
const projectsButton = document.createElement('button');
projectsButton.classList.add('seeTasks', 'projectsButton');
projectsButton.textContent = "Projects";

buttonContainer.append(
    allTasks,
    nextSeven,
    nextMonth,
    space,
    projectsButton);

allTasks.addEventListener('click', () => {
    const mainPanel = document.querySelector('.mainPanel')
    showAllTasks(mainPanel);
})

projectsButton.addEventListener('click', () => {
    const mainPanel = document.querySelector('.mainPanel')
    showProjects(mainPanel);
})
};

export { sideNavDiv };