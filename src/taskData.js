"use strict";

class Project {
    constructor(name, id = crypto.randomUUID()) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

// Item Creator
class ToDoItem {
    constructor(title, description, notes, projectID, projectName, 
        dueDate, priority, id = crypto.randomUUID()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.projectID = projectID;
        this.projectName = projectName;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

class TaskManager {
    constructor() {
        this.tasks = [];
        this.projects = [];
    }

    addProject(name) {
        const newProject = new Project(name);
        this.projects.push(newProject);
        return newProject;
    }

    addTask(title, description, notes, projectName, dueDate, priority) {

        let projectObj = this.projects.find(p => p.name === projectName);

        if (!projectObj && projectName && projectName !== 'none') {
            projectObj = this.addProject(projectName);
            console.log(`Created new project: "${projectObj.name}" (id: ${projectObj.id})`);
        }
        const newTask = new ToDoItem(
            title, 
            description, 
            notes, 
            projectObj ? projectObj.id : null,
            projectObj ? projectObj.name : 'none',
            dueDate,
            priority
        );

        // load existing tasks from localStorage to check for duplicates
        const storageTaskArray = JSON.parse(localStorage.getItem('storageTaskArray')) || [];
       
        const taskDuplicateExists = storageTaskArray.some(task =>
            task.title === title &&
            task.description === newTask.description &&
            task.notes === newTask.notes &&
            task.dueDate === newTask.dueDate &&
            task.priority === newTask.priority
        );

        if (taskDuplicateExists) {
        console.log(`Duplicate task "${title}" detected - not adding`);
        return null;
        }

        // add to memory & localStorage
        this.tasks.push(newTask);
        this.addTaskToLocalStorage(newTask)

        if (projectObj) {
            projectObj.addTask(newTask);
            console.log(`Task "${title}" added to project "${projectObj.name}"`);
        }

        return newTask;
}

    deleteTask(taskID) {
        const arr = this.tasks;
        const unwantedTask = arr.find((item) => item.id === taskID);
        if (!unwantedTask) return;

        const index = arr.indexOf(unwantedTask);
        if (index > -1) arr.splice(index, 1);

        let storageTaskArray = JSON.parse(localStorage.getItem('storageTaskArray')) || [];
        storageTaskArray = storageTaskArray.filter(item => item.id !== taskID);
        localStorage.setItem('storageTaskArray', JSON.stringify(storageTaskArray));

        console.log(`Deleted task with ID ${taskID}`);
    }


    addTaskToLocalStorage(storageTask) {
        console.log(storageTask)
            let storageTaskArray = JSON.parse(localStorage.getItem('storageTaskArray')) || [];
            console.log('Current localStorage contents:', storageTaskArray)
            storageTaskArray.push(storageTask);
            localStorage.setItem('storageTaskArray', JSON.stringify(storageTaskArray));
            console.log('Added task:', storageTask);
            console.log('Updated localStoreage contents:', JSON.parse(localStorage.getItem('storageTaskArray')))
    }

    loadTasksFromLocalStorage() {
        const stored = localStorage.getItem('storageTaskArray');
        if (!stored) return [];

        try {
            const tasks = JSON.parse(stored);
            if (!Array.isArray(tasks)) return [];
            
            this.projects = [];
            const projectsMap = new Map();

            tasks.forEach(task => {
                if(task.projectID && task.projectName && task.projectName !== 'none') {
                    let project = projectsMap.get(task.projectID);
                    if (!project) {
                        project = new Project(task.projectName, task.projectID);
                        projectsMap.set(task.projectID, project);
                        this.projects.push(project);
                    }
                    project.addTask(task);
                }
            });

           

            console.log('Rebuilt projects:', this.projects);
            return tasks;
        } catch (error) {
            console.error('Error parsing localStorage:', error);
            return [];
        }
    }
}


export const taskManager = new TaskManager();

const storedTasks = taskManager.loadTasksFromLocalStorage();
if (storedTasks.length > 0) {
    console.log('Loaded tasks from localStorage on startup:', storedTasks);
};

const object = taskManager.tasks
taskManager.deleteTask();
