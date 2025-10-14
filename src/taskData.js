class Project {
    constructor(name) {
        this.name = name;
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

    addItemToArray(title, description, notes, project, dueDate, priority) {
        const newTask = new ToDoItem(title, description, notes, project, dueDate, priority)
        this.tasks.push(newTask);

        if (project.ame && projectName !== 'none') {
            const project = this.projects.find(p => p.name === projectName);
            if (project) project.addTast(task);
        }
        return task;
}
}

export const taskManager = new TaskManager();
// List Builder
//class BuildList {
 //   constructor() {
 //       this.items = [];
//  }
//};

//export const taskList = new BuildList();