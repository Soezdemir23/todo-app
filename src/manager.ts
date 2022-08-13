
import { Todo } from "./todos";
import { addDays, differenceInBusinessDays, differenceInDays, differenceInHours, parse, parseISO } from "date-fns";
import format from "date-fns/format";
import { ProjectList } from "./projects";
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

    public insertTaskObjectIntoStorage(taskname: string, task: Todo) {
        this.localStorage.setItem(taskname, JSON.stringify(task))

    }

    public populateTasksFromStorage(): Todo[] | void {
        let taskArray: Todo[] = []
        if (this.localStorage.length === 0) return //if the localstorage is empty, return
        Object.keys(this.localStorage).forEach((keys) => {
            taskArray.push(JSON.parse(this.localStorage.getItem(keys)!))
        })
        return taskArray
    }

    public changeDone(task: string, bool: boolean, projectList: ProjectList) {
        let todoToReturn: Todo | undefined;

        projectList.todos.forEach((todo) => {
            if (todo.title === task) {
                todo.done = bool;
                todoToReturn = todo;
            }
        })

        this.setProjectIntoLocalStorage(projectList);
    }

    public getTask(title: string): Todo {
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
    public replaceSubTask(todo: Todo, dataAttribute: string, newTask: string) {
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
    //FIXME:
    public handleCycle(task: Todo, cycle: string, startDate: Date) {
        //get the task from the localstorage as an object, then remove the original in the localstorage (deprecated)
        // let task: Todo = JSON.parse(this.localStorage.getItem(title)!)
        // this.localStorage.removeItem(title)
        
        let newCycleArray = cycle.split(",")
        let cycleSinceStart: string[] = []
        newCycleArray.forEach(element => {
            // if the element is not null, check if the 
            if (parseInt(element) != null) {
                //add the days to the startDate, format it accordingly. (Could've been easier storing these as Date types)
                let added = format(addDays(startDate, parseInt(element)), "do MMMM yyyy")
                //push the formated string into the cycle for viewing
                cycleSinceStart.push(added)
                //reassign to the startDate the additional dates
                startDate = addDays(startDate, parseInt(element))
            }
        })
        task.cycle = cycleSinceStart
        //now see where it is supposed to go: either to localstorage, or a project
        if (task.belongsToProject == ""){
            this.insertTaskObjectIntoStorage(task.title, task)
        } else {
            let project = this.getProjectFromLocalStorage(task.belongsToProject)
            this.replaceTaskInProject(project!, task)
        }
    }

    //if the date is 
    addDaysToRepeat(startDate: Date, repeat: number) {
        return addDays(startDate, repeat)
    }
    //Get either the difference in days, if the difference is 0, return calculate
    calculateDateDifference(startDate: Date, endDate: Date) {
        let a = new Date(startDate.toISOString())
        let b = new Date(endDate)
        let resultDay = differenceInDays(b, a)
        let resultHour = differenceInHours(b, a)
        if (resultDay > 0 && resultHour > 0) {
            return `${resultDay} days, ${resultHour % 24} hours left`
        } else if (resultDay <= 0) {
            if (resultHour >0){
                return `Today`
            } else {
                return `Date is over`
            }
        } else {
            return "Done"
        }
    }

    getProjectFromLocalStorage(project: string): ProjectList | undefined {
        let list = this.localStorage.getItem(project)
        if (list == null) return
        return Object.assign(new ProjectList(), JSON.parse(list))
    }


    setProjectIntoLocalStorage(project: ProjectList) {
        this.localStorage.removeItem(project.name)
        this.localStorage.setItem(project.name, JSON.stringify(project))
    }


    getTaskFromProject(project: ProjectList, name: string): Todo | undefined {
        let todo: Todo | undefined;
        project.todos.forEach((task) => {
            if (task.title === name) {
                todo = task;
            }
        })
        return todo
    }
    crawlForTodo(todoName: string): Todo | undefined {
        let todoToBereturned: Todo | undefined;
        for (let i = 0; i < this.localStorage.length; i++) {
            if (this.localStorage.key(i) !== null) {
                let tasksInProject: ProjectList = Object.assign(new ProjectList, JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))
                tasksInProject.todos.forEach(todo => {
                    if (todo.title === todoName) todoToBereturned = todo;
                })
            }
        } return todoToBereturned
    }
    replaceTaskInProject(project: ProjectList, currentTask: Todo) {
        console.log()
        for (let i = 0; i < project.todos.length; i++) {
            if (project.todos[i].title === currentTask.title) {
                console.log(project.todos[i].done, currentTask.done)
                project.todos[i] = currentTask
                console.log(project.todos[i].done, currentTask.done)
            }
        }
        console.log(project);
        this.setProjectIntoLocalStorage(project)

    }
    getProjectNames() {
        let ListNames = []
        for (let i = 0; i < this.localStorage.length; i++) {
            const element = JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!);
            if ("name" in element) ListNames.push(element.name)
        }
        return ListNames
    }

    allTasks(): ProjectList {
        let allTasks: Todo[] = [];
        for (let i = 0; i < this.localStorage.length; i++) {
            if (this.localStorage.key(i) !== null) {

                let object = JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!)
                if ("name" in object) {
                    let tasksInProject = Object.assign(new ProjectList, JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))
                    tasksInProject.todos.forEach((todo: Todo) => {
                        allTasks.push(todo);
                    })
                } else {
                    allTasks.push(JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))

                }
            }
        }
        return new ProjectList("All Tasks", allTasks)
    }

    getMyDayTodos(): Todo[] {
        let allTodosForToday: Todo[] = []
        for( let i = 0; i < this.localStorage.length; i++) {
            if (this.localStorage.key(i) != null) {
                let object = JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!)
                if ("name" in object) {
                    let tasksInProject: ProjectList = Object.assign(new ProjectList, JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))                    
                    tasksInProject.todos.forEach(task => task.myDay == true ? allTodosForToday.push(task): console.log(""))
                } else {
                    if (object.myDay == true) allTodosForToday.push()
                }
            }
        }return allTodosForToday
    }

    soonDueTaks(){
        let allTasks: Todo[] = []
        for (let i = 0; i < this.localStorage.length; i++) {
            if (this.localStorage.key(i) !== null) {
                let object = JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!)
                if ("name" in object) {
                    let tasksInProject: ProjectList = Object.assign(new ProjectList, JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))                    
                    tasksInProject.todos.forEach(todo => {
                        if (todo.repeat != null) allTasks.push(todo)
                    })
                } else {
                    if (object.repeat != null) allTasks.push(object)
                }
            }
        }

        return allTasks
    }

    plannedTasks() {
        let allTasks: Todo[] = [];
        for (let i = 0; i < this.localStorage.length; i++) {
            if (this.localStorage.key(i) !== null) {
                let object = JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!)
                if ("name" in object) {
                    let tasksInProject: ProjectList = Object.assign(new ProjectList, JSON.parse(this.localStorage.getItem(this.localStorage.key(i)!)!))                    
                    tasksInProject.todos.forEach(todo => {
                        if (todo.dueDate != null) allTasks.push(todo)
                    })
                } else {
                    if (object.dueDate != null) allTasks.push(object)
                }
            }
        }
        return allTasks

    }
    /**
     * This function checks wether the task is inside the localStorage. Every Task, unless clicked 
     * 
     * @param textContent the title of the project it might be in. Could be 
     * @param value the name of the task being checked for doubles
     * @returns a boolean to let us know if it found something
     */
    checkIfInStorage(textContent: string | null | undefined, value: string) {
        if (textContent !== null || textContent !== undefined) {
            if (JSON.parse(this.localStorage.getItem(value)!) === null) {
                return true
            } return false
        }
    }

    removeTaskOrProject(name: string) {
        console.log(name)
        if(name !== null){ // why is the compiler telling me that name might be string|null regardless of this check?
        let object = JSON.parse(this.localStorage.getItem(name)!)
            if (object != null) {
                console.log("test works")
                if ("name" in object) {
                    this.localStorage.removeItem(object.name)
                } else {
                    this.localStorage.removeItem(object.title)
                }
            }
        } else {
            console.log("name ist empoty: ", name)
        }
    }
}

