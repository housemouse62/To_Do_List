import { listMaker } from "./home";
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
 
buttonContainer.append(
    allTasks,
    nextSeven,
    nextMonth);

allTasks.addEventListener('click', () => {
    const mainPanel = document.querySelector('.mainPanel')
    listMaker(mainPanel);
})
};

export { sideNavDiv };