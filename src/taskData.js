"use strict";

import { addTaskDisplay } from "./createTaskUI";

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
    constructor(title, description, notes, projectID, dueDate, priority, id = crypto.randomUUID()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.projectID = projectID;
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
            dueDate,
            priority
        );

        this.tasks.push(newTask);

        if (projectObj) {
            projectObj.addTask(newTask);
            console.log(`Task "${title}" added to project "${projectObj.name}"`);
        }

        return newTask;
}
    deleteTask(taskID) {
        console.log(taskManager.tasks)
        const arr = taskManager.tasks
        const newArray = arr.filter((item) => item.id === taskID)
        console.log(newArray)
    }
}

export const taskManager = new TaskManager();
const object = taskManager.tasks
console.log(taskManager.tasks)
console.log(object)
taskManager.deleteTask();