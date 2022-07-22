
import { Todo } from "./todos";

/**
 * There is StorageManager, but that name is already taken by the libraries.
 * It's job is to look for tasks in the background and pass it to the domManager
 * in order to populate the frontend
 * 
 */
export class StorageManaging {
    private localStorage: Storage;
    constructor(localstorage: Storage) {
        this.localStorage = localstorage
    }

    public insertTaskObjectIntoStorage(taskname:string ,task: Todo) {
        this.localStorage.setItem(taskname, JSON.stringify(task))
        
    }

    public populateTasksFromStorage(): Todo[] |void {
        let taskArray: Todo[] = []
        if(this.localStorage.length=== 0) return //if the localstorage is empty, return
        Object.keys(this.localStorage).forEach((keys) => {
            taskArray.push(JSON.parse(this.localStorage.getItem(keys)!))
        })
        return taskArray
    }

    public changeDone(task:string, bool: boolean) {
        let todo: Todo = JSON.parse(this.localStorage.getItem(task)!)
        console.log(todo.done)
        todo.done = bool
        this.localStorage.removeItem(task)
        this.localStorage.setItem(task, JSON.stringify(todo))
    }

    public getTask(title: string):Todo{
        return JSON.parse(this.localStorage.getItem(title)!)
    }
    public insertSubtask(taskTitle: string, subTask: string) {
        console.log(taskTitle)
        let todo: Todo = JSON.parse(this.localStorage.getItem(taskTitle)!)
        console.log(todo)
        todo.checklist[subTask] = false
        this.localStorage.removeItem(taskTitle)
        this.localStorage.setItem(taskTitle, JSON.stringify(todo))
        console.log(todo.checklist)
    }
    public replaceSubTask(todo: Todo, dataAttribute: string, newTask: string){
        let checklistArray = Object.entries(todo.checklist)
        checklistArray.forEach(element => {
            if (element[0] === dataAttribute) {
                element[0] = newTask
            }
        })
        todo.checklist = {}
        checklistArray.forEach(element => {
            todo.checklist[element[0]] = element[1]
        })
        this.localStorage.removeItem(todo.title)
        this.localStorage.setItem(todo.title, JSON.stringify(todo))
    
    }
}