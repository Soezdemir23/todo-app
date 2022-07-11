import MyDay from './img/home_FILL0_wght400_GRAD0_opsz48.svg'
import SoonDue from './img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg'
import Planned from './img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg'
import AllTasks from './img/grade_FILL0_wght400_GRAD0_opsz48.svg'
import Project from './img/list_FILL0_wght400_GRAD0_opsz48.svg'
import NewTask from './img/priority_FILL0_wght400_GRAD0_opsz48.svg'
import NotDone from './img/radio_button_unchecked.svg'
import Done from './img/check_circle.svg'
import MoreVert from './img/more_vert.svg'
import Star from './img/grade.svg'
import Add from './img/add.svg'
import AddToDay from './img/sunny.svg'
import Repeat from './img/event_repeat.svg'
import AddToProject from './img/perm_media.svg'
import AddDueDate from './img/edit_calendar.svg'

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
        let imgDoneList = document.getElementById("done-img") as HTMLImageElement
        imgDoneList.src = NotDone
        let subdoneImg = document.getElementsByClassName("subdone-img")
        this.fillClassImages(subdoneImg, NotDone)
        let subtaskOptions = document.getElementsByClassName("subtask-options")
        this.fillClassImages(subtaskOptions, MoreVert)
        let favorite = document.getElementById("favorite") as HTMLImageElement
        favorite.src = Star
        let addTask = document.getElementById("add-subtask-button") as HTMLImageElement
        addTask.src = Add
        let addToMyDayImageElement = document.getElementById("add-to-my-day-container-image") as HTMLImageElement
        addToMyDayImageElement.src = AddToDay
        let repeatEventImage = document.getElementById("event-repeat-image") as HTMLImageElement
        repeatEventImage.src = Repeat
        let addToProjectImage = document.getElementById("add-to-project-image") as HTMLImageElement
        addToProjectImage.src = AddToProject
        let addToDueDateImage = document.getElementById("add-due-date-image") as HTMLImageElement
        addToDueDateImage.src = AddDueDate
        let cyclesChildren = document.getElementsByClassName("date-options")
        this.fillSubtaskVerts(cyclesChildren, MoreVert)
    }

    fillSubtaskVerts(classList: string | any[] | HTMLCollectionOf<Element>, Image: string) {
        for (let i = 0; i < classList.length; i++) {
            const element = classList[i].querySelector("img") as HTMLImageElement;
            element.src = Image
        }
    }
    fillClassImages(classList: string | any[] | HTMLCollectionOf<Element>, Image: string) {
        for (let index = 0; index < classList.length; index++) {
            const element = classList[index] as HTMLImageElement
            element.src = Image

        }
    }
    /**
     * Listens to input in the task menu, upon entering "Enter".
     */
    readTaskFromDOM() {
        let addTaskInput = document.getElementById("add-task-container")?.querySelector("input")
        addTaskInput?.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                if (addTaskInput?.value.length === undefined) return
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

            else if (nodeTarget.nodeName === "BUTTON") {
                let target = ev.target as HTMLElement
                let taskName = document.getElementById("task-name") as HTMLInputElement
                let taskBoard = document.getElementById("task-customization")

                if (target.classList.contains("active") === false) {
                    if (taskBoard?.classList.contains("hidden") === true) {
                        taskBoard?.classList.remove("hidden")
                    }
                    this.populateForm(target.dataset.name!)
                    target.classList.add("active")
                    console.log(1)
                } else if (target.dataset.name !== taskName.value &&
                    target.classList.contains("active") === true) {
                    if (taskBoard?.classList.contains("hidden") === true) {
                        taskBoard.classList.remove("hidden")
                    } else {
                        taskBoard?.classList.add("hidden")
                    }
                    this.populateForm(target.dataset.name!)
                    console.log(2)
                } else if (target.dataset.name === taskName.value &&
                    target.classList.contains("active") === true &&
                    taskBoard?.classList.contains("hidden") === false) {
                    taskBoard?.classList.add("hidden")
                    this.removeActiveFromButtons()
                    console.log(3)
                } else if (taskBoard?.classList.contains("hidden")) {
                    taskBoard.classList.remove("hidden")
                }

            }
        })
    }

    removeActiveFromButtons() {
        let doneContainer = document.getElementById("done")
        let notDoneContainer = document.getElementById("not-done")
        if (doneContainer?.children.length === undefined) console.log("content is undefined")
        else {
            for (let index = 0; index < doneContainer.children.length - 1; index++) {
                console.log(doneContainer.children[index]);
            }
        }
        if (notDoneContainer?.children.length === undefined) console.log("content is undefined")
        else {
            for (let index = 0; index < notDoneContainer.children.length - 1; index++) {
                notDoneContainer.children[index].firstElementChild?.classList.remove("active")
            }
        }


    }

    pushToDoneOrUndoneContainer(target: HTMLElement, id: string) {
        document.getElementById(id)?.append(target)
    }
    // not done yet, should return a "true" for 
    populateForm(taskname: string) {
        let todo = this.storageManager.getTask(taskname)

        // get the task title
        let taskTitle = document.getElementById("task-content") as HTMLParagraphElement

        taskTitle.textContent = todo.title + " -- " + todo.description

        let subTaskList = document.getElementsByClassName("subtask-child") as HTMLCollectionOf<HTMLLIElement>// HTMLCollectionOf<Element>
        // remove the children of the sublist-Task unordered list except the first one, in order to remove those
        // leftover children
        if (Object.keys(todo.checklist).length > 0) {
            console.log(todo.checklist)
            for (let element = subTaskList.length - 1; element > 0; element--) {
                //subTaskList.children[element].remove()
            }

            for (let key in todo.checklist) {

                if (Object.prototype.hasOwnProperty.call(todo.checklist, key)) {
                    let li = document.createElement("li")
                    li.classList.add("subtask-child")
                    li.dataset.name = key
                    //done/not done image
                    let img = document.createElement("img") as HTMLImageElement
                    img.src = NotDone
                    img.classList.add("subdone-img")
                    let liDiv = document.createElement("div")
                    li.append(img,liDiv)

                    let spanElement = document.createElement("span") as HTMLSpanElement
                    spanElement.contentEditable = "true"
                    spanElement.textContent = key
                    let imageElement = document.createElement("img") as HTMLImageElement
                    imageElement.src = MoreVert
                    imageElement.classList.add("subtask-options")
                    imageElement.alt = "subtask-options"

                    liDiv.append(spanElement, imageElement)
                    // there is something I need to change here with the eventlistener
                    document.getElementById("subtask-list-container")?.insertBefore(
                        li,
                        document.getElementById("add-subtask-list")
                    )
                }
            }
        } else {
            console.log("subtasks empty")
        }

        let date = document.getElementById("due-date") as HTMLInputElement
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
        let subtaskBtn = document.getElementById("add-subtask") as HTMLButtonElement
        let subtaskEl = document.getElementById("subtask") as HTMLInputElement
        subtaskBtn.onclick = () => {
            /* if (subtaskEl != undefined) {
                 let subTaskList = document.createElement("li")
                 subTaskList.textContent = subtaskEl.value
                 console.log(subTaskList)
                 document.getElementById("subtask-list")?.append(subTaskList)
                 // get the task title from task customization and the get the todo
                 let subtaskTitle = document.getElementById("task-name") as HTMLInputElement
                 this.storageManager.insertSubtask(subtaskTitle.value!, subTaskList.textContent)
 
             }*/
        }

    }


}
