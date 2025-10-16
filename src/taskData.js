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
        console.log(project)
        this.tasks.push(newTask);

        if (project && project !== 'none') {
            console.log(this.projects)
            const projectName = this.projects.find(p => p.name === project);
            console.log(projectName)
            if (projectName) projectName.addTask(newTask);
        }
        return newTask;
} 
}

export const taskManager = new TaskManager();
taskManager.addProject('newProject')
taskManager.addProject('yup')
console.log(`find a project: ${taskManager.projects[1].name}`)
console.log(taskManager.projects)