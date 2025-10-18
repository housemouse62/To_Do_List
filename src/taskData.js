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
    constructor(title, description, notes, project, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.project = project;
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

    addTask(title, description, notes, project, dueDate, priority) {
        const newTask = new ToDoItem(title, description, notes, project, dueDate, priority)
        this.tasks.push(newTask);

        if (project && project !== 'none') {
            console.log(`looking for project: ${project}`);
            console.log("current projects:", this.projects.map(p => p.name));

        let projectObj = this.projects.find(p => p.name === project);

        if (!projectObj) {
            projectObj = this.addProject(project);
            console.log(`Created new project: "${projectObj.name}" (id: ${projectObj.id})`);
        }

        if (projectObj && typeof projectObj.addTask === 'function') {
            projectObj.addTask(newTask);
            console.log(`Task "${title}" added to project "${projectObj.name}"`);
        } }
        return newTask;
} 
}

export const taskManager = new TaskManager();
taskManager.addProject('newProject')
taskManager.addProject('yup')
console.log(`find a project: ${taskManager.projects[1].name}`)
console.log(taskManager.projects)