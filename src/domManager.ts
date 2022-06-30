import MyDay from './img/home_FILL0_wght400_GRAD0_opsz48.svg'
import SoonDue from './img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg'
import Planned from './img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg'
import AllTasks from './img/grade_FILL0_wght400_GRAD0_opsz48.svg'
import Project from './img/list_FILL0_wght400_GRAD0_opsz48.svg'
import NewTask from './img/priority_FILL0_wght400_GRAD0_opsz48.svg'
import { StorageManaging } from './manager'
import { Todo } from './todos'
/**
 * DOMManager manages the I/O and handling of the DOM the user interacts with
 * it takes the values from the forms and input and saves them for the
 * use later for the TaskManager.
 */
export class DOMManager {
    //private task = ""
    private done = false
    storageManager: StorageManaging

    constructor(storageManager: StorageManaging) {
        this.storageManager = storageManager
    }

    hookSVGToElements() {
        let myDayElement = document.getElementById("my-day") as HTMLImageElement
        myDayElement.src = MyDay
        let soonDueElement = document.getElementById("soon-due") as HTMLImageElement
        soonDueElement.src = SoonDue
        let plannedElement = document.getElementById("planned") as HTMLImageElement
        plannedElement.src = Planned
        let allTaskElement = document.getElementById("all-tasks") as HTMLImageElement
        allTaskElement.src = AllTasks
        let newProjectElement = document.getElementById('new-list') as HTMLImageElement
        newProjectElement.src = Project
        let newTaskElement = document.getElementById("add-task") as HTMLImageElement
        newTaskElement.src = NewTask
    }
    /**
     * Listens to input in the task menu, upon entering "Enter".
     */
    readTaskFromDOM() {
        let addTaskInput = document.getElementById("add-task-container")?.querySelector("input")
        addTaskInput?.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                if(addTaskInput?.value.length === undefined) return
                if (addTaskInput?.value.length < 1) {
                    return
                } else {
                    this.addTaskToToDoListDOM(addTaskInput.value, "not-done")
                    let newTask = new Todo(`${addTaskInput.value}`)
                    this.storageManager.insertTaskObjectIntoStorage(addTaskInput.value, newTask)
                    addTaskInput!.value = ""

                }
            }
        })
    }


    addTaskToToDoListDOM(task: string, whichContainer: string) {
        let taskContainer = document.getElementById(`${whichContainer}`)
        let newToDoList = document.createElement("li")
        newToDoList.dataset.name = `${task}`
        newToDoList.innerHTML =
            `<button data-name="${task}" >+</button>${task}
        `
        newToDoList.classList.add("task-child-undone")
        taskContainer?.insertBefore(newToDoList, taskContainer.firstChild)
    }

    repopulateTasksListDOM() {
        let todos = this.storageManager.populateTasksFromStorage()
        if (todos === undefined) return
        else {
            todos.forEach(todo => {
                if (todo.done === false) {
                    this.addTaskToToDoListDOM(todo.title, "not-done")
                } else {
                    this.addTaskToToDoListDOM(todo.title, "done")
                }
            })
        }
    }

    listContext() {
        let taskChildrenParent = document.getElementById("tasks-list-container")
        taskChildrenParent?.addEventListener("click", (ev: MouseEvent) => {
            let nodeTarget = ev.target as Node
            //if the target in this container clicked is a list, we call it either done, or undone
            if (nodeTarget.nodeName === "LI") {
                let target = ev.target as HTMLElement
                if (target.classList.contains("task-child-undone")) {
                    target.classList.remove("task-child-undone")
                    target.classList.add("task-child-done")
                    this.storageManager.changeDone(target.dataset.name!, true)
                    this.pushToDoneOrUndoneContainer(target, "done")

                } else if (target.classList.contains("task-child-done")) {
                    target.classList.remove("task-child-done")
                    target.classList.add("task-child-undone")
                    this.storageManager.changeDone(target.dataset.name!, false)
                    this.pushToDoneOrUndoneContainer(target, "not-done")
                }

            }
            /* If the usesr presses the button, then it should check, 
            1. if the task is equal to the data-attribute, then check if done is true.
            Then
             */
            else if (nodeTarget.nodeName === "BUTTON") {
                let target = ev.target as HTMLElement
                this.populateForm(target.dataset.name!)
                document.getElementById("task-customization")?.classList.toggle("hidden")
            }

        })
    }

    pushToDoneOrUndoneContainer(target: HTMLElement, id: string) {
        document.getElementById(id)?.append(target)
    }
    // not done yet, should return a "true" for 
    populateForm(taskname: string) {
        let todo = this.storageManager.getTask(taskname)
        // get the task title
        let taskTitle = document.getElementById("task-name") as HTMLInputElement
        taskTitle.value = todo.title
        let taskDesc = document.getElementById("task-description") as HTMLInputElement
        taskDesc.value = todo.description


        let subTaskList = document.getElementById("subtask-list") as HTMLUListElement

        for (let key in todo.checklist) {
            if (Object.prototype.hasOwnProperty.call(todo.checklist, key)) {
                let li = document.createElement("li")
                li.textContent = key
                console.log(subTaskList.contains(li))
                if (!subTaskList.contains(li)) {
                    subTaskList.appendChild(li)
                }
            }
        }
        console.log("node-lengths:", subTaskList.childNodes.length)
        console.log("checklist length:", Object.keys(todo.checklist).length);

        let date = document.getElementById("due-date") as HTMLInputElement
        console.log(todo.dueDate)
        date.value = todo.dueDate
        let notesElement = document.getElementById("notes") as HTMLTextAreaElement
        if (todo.notes !== undefined) {
            notesElement.value = todo.notes
        }
        let priorityElement = document.getElementById("priority-select") as HTMLSelectElement
        priorityElement.value = todo.priority.toString()
        this.done = true

    }

    populateSubtask() {
        let subtaskBtn = document.getElementById("add-subtask")
        let subtaskEl = document.getElementById("subtask") as HTMLInputElement
        subtaskBtn?.addEventListener("click", () => {
            if (subtaskEl != undefined) {
                let subTaskList = document.createElement("li")
                subTaskList.textContent = subtaskEl.value
                console.log(subTaskList)
                document.getElementById("subtask-list")?.append(subTaskList)
                // get the task title from task customization and the get the todo
                let subtaskTitle = document.getElementById("task-name") as HTMLInputElement
                this.storageManager.insertSubtask(subtaskTitle.value!, subTaskList.textContent)

            }
        })

    }


}
