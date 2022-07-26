
import { Todo } from "./todos";
import { addDays } from "date-fns";
import format from "date-fns/format";
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

    public handleCycle(title: string ,cycle: string,startDate: Date) {
        let task: Todo = JSON.parse(this.localStorage.getItem(title)!)
        this.localStorage.removeItem(title)
        let newCycleArray = cycle.split(",")
        let cycleSinceStart: string[] = []
        newCycleArray.forEach(element => {
            if (parseInt(element) !== NaN) {
                let added = format(addDays(startDate, parseInt(element)), "do MMMM yyyy")
                cycleSinceStart.push(added)
            }
        })
        task.cycle = cycleSinceStart
        this.localStorage.setItem(title, JSON.stringify(task))
    }
    //how do I manage the date 
    public handleRepeat(task: Todo, repeat: number) {
        task.repeatDate = new Date()
        addDays(task.repeatDate, repeat)
        console.log(task)
        this.insertTaskObjectIntoStorage(task.title, task)
    }

    public calculateRepeat(task:Todo): number {
        let currentDate = new Date()
        let leftDays=0
        if(task.repeatDate !== undefined) {
            console.log(typeof(task.repeatDate))
            leftDays = (currentDate.getTime() - task.repeatDate?.getTime()) / (1000*3600*24)
            console.log(leftDays)
        }
        return leftDays;
    }
}

