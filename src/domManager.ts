import MyDay from './img/home_FILL0_wght400_GRAD0_opsz48.svg'
import SoonDue from './img/crisis_alert.svg'
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
import AddPriority from './img/priority_high.svg'

import { StorageManaging } from './manager'
import { Todo } from './todos'
import { getDate, sub } from 'date-fns'
import { cy, zhCN } from 'date-fns/locale'
/**
 * DOMManager manages the I/O and handling of the DOM the user interacts with
 * it takes the values from the forms and input and saves them for the
 * use later for the TaskManager.
 */
export class DOMManager {
    task: null | Todo = null;
    storageManager: StorageManaging
    openSubmenus = 6;

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
        let addPriorityImage = document.getElementById("add-priority-image") as HTMLImageElement
        addPriorityImage.src = AddPriority
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
                    target.style.textDecoration = "strikethrough"
                    this.pushToDoneOrUndoneContainer(target, "not-done")
                }

            }
            // the task-name is gone. I need to refactor the conditions below
            else if (nodeTarget.nodeName === "BUTTON") {
                this.taskButtonContext(ev)
            }
        })
    }

    /**
     * This method is called when the user clicks the plus buttons on the tasks
     * it should have the following conditions met to function
     * ## The button is not active yet
     * The button, when clicked, has no active status yet 
     * + should get the active class assigned 
     * + should reveal the task-customization board
     * + should fill the task-customization board through the populateForm method
     * ## The button is active and in focus (the task details are revealed):
     * + should simply close the task details board
     * + then remove the active class from the other buttons
     * ## the button is active and not in focus ()
     * @param ev event of mouse clicked
     */
    private taskButtonContext(ev: MouseEvent) {
        this.closeAllSubmenus()
        let target = ev.target as HTMLElement
        let taskContent = document.getElementById("task-content") as HTMLParagraphElement

        let taskTitle = taskContent.textContent?.slice(
            0,
            taskContent.textContent.indexOf(" -- ")
        )
        let taskBoard = document.getElementById("task-customization")
        if (target.dataset.name !== undefined && taskBoard !== null) {
            // inactive button
            if (target.classList.contains("active") === false) {
                this.populateForm(target.dataset.name)
                target.classList.add("active")
                taskBoard.classList.remove("hidden")
                setTimeout(() => {
                    this.redrawSubmenus();
                }
                    , 500)

            }
            // active button 
            else if (target.classList.contains("active") === true) {
                if (taskTitle === target.dataset.name) {
                    taskBoard.classList.toggle("hidden")
                } else if (taskTitle !== target.dataset.name) {
                    taskBoard.classList.remove("hidden")
                    this.populateForm(target.dataset.name)
                }


            }
        } else {
            console.log("Something is wrong with the function taskButtonContext")
        }
    }

    removeActiveFromButtons() {
        let doneContainer = document.getElementById("done")
        let notDoneContainer = document.getElementById("not-done")
        if (doneContainer?.children.length === undefined) console.log("content is undefined")

        else {
            console.log("I am the not done container")
            for (let index = 0; index < doneContainer.children.length - 1; index++) {
                console.log(doneContainer.children[index]);
            }
        }
        if (notDoneContainer?.children.length === undefined) console.log("content is undefined")
        else {
            console.log("I am the done container")
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
        this.task = todo

        // get the task title
        let taskTitleAndContent = document.getElementById("task-content") as HTMLParagraphElement

        taskTitleAndContent.textContent = todo.title + " -- " + todo.description

        let subTaskList = document.getElementById("subtask-list-container") as HTMLUListElement // HTMLCollectionOf<Element>

        Array.from(subTaskList.children).forEach(child => {
            if (child.className === "subtask-child") subTaskList.removeChild(child)
        })

        if (Object.keys(todo.checklist).length > 0) {
            for (let key in todo.checklist) {

                if (Object.prototype.hasOwnProperty.call(todo.checklist, key)) {
                    let li = document.createElement("li")
                    li.classList.add("subtask-child")
                    li.dataset.name = key
                    //done/not done image
                    
                    let img = document.createElement("img") as HTMLImageElement
                    if(todo.checklist[key] === false) {
                        img.src = NotDone
                    } else {
                        img.src = Done
                    } 
                    img.classList.add("subdone-img")
                    let liDiv = document.createElement("div")
                    li.append(img, liDiv)

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
        }

        let radChildren = document.getElementsByClassName("repeat-add-due-child")

        let date = radChildren[2].querySelector("span")
        if (todo.dueDate !== "") date!.textContent = todo.dueDate
        else date!.textContent = "Add due date"

        let repeat = radChildren[0].querySelector("span")
        if (todo.repeat !== undefined) repeat!.textContent = this.storageManager.calculateDateDifference(new Date(), this.task!.repeatDate!) + " Days left until repeat"
        //added later when I am working on the project class
        let addProject = radChildren[1].querySelector("span")

        let priority = radChildren[3].querySelector("span")
        switch (todo.priority) {
            case 0:
                priority!.textContent = "Low importance [0]"
                break;
            case 1:
                priority!.textContent = "medium importance [1]"
            case 2:
                priority!.textContent = "high importance [2]"
            case 3:
                priority!.textContent = "high importance [3]"
            default:
                if (todo.priority !== undefined) {
                    priority!.textContent = "Set Priority"
                } else {
                    priority!.textContent = "Invalid Priority"
                }
                break;
        }

        let cycleContainer = document.getElementById("cycles-container")
        
        let cyclesChild = document.createElement("div")
        cyclesChild.classList.add("cycles-child")
        
        let dateChild = document.createElement("span")
        dateChild.classList.add("date-child")
        let dateOptions = document.createElement("span")
        dateOptions.classList.add("date-options")
        let dateImg = document.createElement("img") as HTMLImageElement
        dateImg.alt = "date-options" 
        dateImg.src = MoreVert
        cyclesChild.append(dateChild, dateOptions)
        dateOptions.appendChild(dateImg)
        
        console.log(this.task.cycle)
        this.task.cycle?.forEach(date => {
            let copy = cyclesChild?.cloneNode(true) as HTMLElement
            copy.firstElementChild!.textContent = date
            
            cycleContainer?.append(copy)
            
        })
        /**
         * TODO: Add the other radchildren:
         * a. repeat
         * b. Add Project -> Project name
         * c. Priority
        */
        let notesElement = document.getElementById("notes") as HTMLParagraphElement
        if (todo.notes !== undefined) {
            notesElement.textContent = todo.notes
        } else {
            notesElement.textContent = "Add note"
        }
    
    }
    /**
     * A function that is incorporating different subfunctions and eventlisteners to handle the task detail ui and changes 
     * in the background, passing or loading these from the storageManager instance.
     * 
     */

    formContext() {

        this.closeMenu()
        // pass the todo to these, so the relevant information can be adjusted.
        this.taskDescriptionContext()
        this.subtaskListContext()
        //this.addToMyDayContext()
        this.radContext()
        this.dueBySubmenuContext()
        this.dueByDateSubmenuContext()
        this.repeatSubmenuContext()
        this.projectChooseContext()
        this.cycleSubmenuContext()
        this.cyclesContainerContext()
        this.notesContext()
    }
    /**
     * Simply closes the task details menu
     */
    closeMenu() {
        let closeButton = document.getElementById('close-task-customization')

        closeButton?.addEventListener('click', () => {
            document.getElementById('task-customization')?.classList.toggle("hidden")
            this.removeActiveFromButtons()
            this.closeAllSubmenus()
        })
    }
    /**
     * Adds eventlistener to the task-container.
     * 1. Detect mouseclicks
     * 1.1 For the done image , change not only the image to the Done image src, 
     *      but also the task, change done to true.
     * 1.2 For the favorite image, i don'T  know.
     * 1.3 For the paragraph: find out if the user stopped using the keydown event after 5 seconds
     * 
     */
    taskDescriptionContext() {
        let titleAndDescription = document.getElementById('task-content')
        let timer: string | number | NodeJS.Timeout | undefined;
        let text: string
        document.getElementById('task-container')?.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            if (element.id === "done-img") {
                let elem = element as HTMLImageElement
                if (elem.src === Done && this.task?.done === true) {
                    elem.src = NotDone
                    this.task.done = false
                } else if (elem.src === NotDone && this.task?.done === false) {
                    elem.src = Done
                    this.task.done = true
                }
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)

            }
            if (element.id === "remove") {
                console.log("favorite img clicked")
            }
        })
        titleAndDescription?.addEventListener("keyup", (ev: KeyboardEvent) => {
            if (titleAndDescription?.textContent !== undefined && titleAndDescription?.textContent !== null) {
                text = titleAndDescription.textContent

                clearTimeout(timer)
                timer = setTimeout(() => {
                    let title = text.slice(0, text.indexOf(" -- "))
                    let description = text.slice(title.length + 4)
                    if (title.length > 0) {
                        this.task!.title = title
                    }
                    if (description.length > 0) {
                        this.task!.description = description
                    }
                    this.storageManager.insertTaskObjectIntoStorage(title, this.task!)
                }, 10000)
            }
        })
    }
    /**
     * There are two EventListener methods here
     * 1. on click event, which has three different parts
     * 1.1. the subdone-img
     * 1.2. the subtask-options
     * 1.3. add subtask-button
     * 2. keydown event
     * 2.1 the lists of tasks
     * 2.2 the add-subtask-text
     */
    subtaskListContext() {
        let subtTaskListContainer = document.getElementById("subtask-list-container") as HTMLUListElement

        subtTaskListContainer.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            // check if the element is correctly selected
            if (element.classList.contains("subdone-img")) {
                //recast the element as HTMLImageElement and get the parent's dataset attribute
                let parentDataset = element.parentElement?.dataset.name
                let subdoneImg = ev.target as HTMLImageElement
                // check if the checklist is false and the subdoneImg is equal to notDone
                if (this.task?.checklist[`${parentDataset}`] === false && subdoneImg.src === NotDone) {
                    this.task!.checklist[`${parentDataset}`] = true;
                    subdoneImg.src = Done;
                } else if (this.task?.checklist[`${parentDataset}`] === true && subdoneImg.src === Done) {
                    this.task!.checklist[`${parentDataset}`] = false
                    subdoneImg.src = NotDone
                }
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
            } else if (element.classList.contains("subtask-options")) {
                throw new Error('Not implemented yet')

            } else if (element.id === "add-subtask-button") {
                let spanContent = element.nextElementSibling?.textContent
                if (spanContent !== null && spanContent !== undefined && spanContent !== "Add to my day") {
                    this.storageManager.insertSubtask(this.task!.title, spanContent)
                    element.nextElementSibling!.textContent = "Next Step here"
                    this.populateForm(this.task!.title)
                }
            }
        })

        //Keyuplistners
        let subtext = ""
        subtTaskListContainer.addEventListener("keydown", (e: KeyboardEvent) => {
            // just
            if (e.key === "Enter" && this.task !== null) {
                e.preventDefault()
                let target = e.target as HTMLElement

                // we can check if the parent of the element has a data attribute and then go from there
                let dataAttribute = target.parentElement?.parentElement?.dataset.name
                if (dataAttribute !== undefined && dataAttribute !== null && target.textContent?.length! > 0) {
                    subtext = target.textContent! // the new text content
                    this.storageManager.replaceSubTask(this.task, dataAttribute, subtext)
                    this.populateForm(this.task.title!)
                    this.redrawSubmenus()
                } else if (target.id === "add-subtask-text" && target.textContent?.length! > 0 && target.textContent?.includes("Next step") === false) {
                    this.storageManager.insertSubtask(this.task!.title, target.textContent!)
                    this.populateForm(this.task!.title!)
                }
            }
        })
    }
    // later when the project class is defined and the testing works
    addToMyDayContext() {
        // throw new Error('Method not implemented.')
    }

    radContext() {
        let screen = document.body

        screen?.addEventListener('click', (ev: MouseEvent) => {
            let elem = ev.target as HTMLElement;
            if (elem.id.includes("event-repeat-")) {
                this.closeAllSubmenus()
                document.getElementById("repeat-submenu")!.classList.toggle("hidden")
            } else if (elem.id.includes("add-to-project-")) {
                this.closeAllSubmenus()
                document.getElementById("project-choose")!.classList.toggle("hidden")
            } else if (elem.id.includes("add-due-date-")) {
                this.closeAllSubmenus()
                document.getElementById("due-by-submenu")!.classList.toggle("hidden")
            } else if (elem.id.includes("add-priority-")) {
                this.closeAllSubmenus()
                document.getElementById("priority-submenu")!.classList.toggle("hidden")
            } else {
                this.closeAllSubmenus()
            }
        })
    }

    dueBySubmenuContext() {
        let dueBySubmenu = document.getElementById("due-by-submenu")
        dueBySubmenu?.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            if (element.textContent === "Today") {
                
                console.log("Today clicked")

            } else if (element.textContent === "Tomorrow") {
                console.log("Tomorrow clicked")
            } else if (element.textContent === "Next Week") {
                console.log("Next Week clicked")
            } else if (element.textContent === "Pick a date") {
                document.getElementById("due-by-date-submenu")?.classList.toggle("hidden")
                dueBySubmenu!.classList.toggle("hidden")
            }
        })

    }
    dueByDateSubmenuContext() {
        console.log('Method not implemented.')
    }
    repeatSubmenuContext() {
        let repeatSubmenu = document.getElementById("repeat-submenu")
        repeatSubmenu?.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            if (element.textContent === "daily") {
                this.task!.repeat = 1
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 1)
                console.log(this.task!.repeatDate)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "weekly") {
                this.task!.repeat = 7
                this.task!.repeatDate = new Date()
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 7)
                console.log(this.task!.repeatDate)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Monthly") {
                this.task!.repeat = 28
                this.task!.repeatDate = new Date()
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 28)
                console.log(this.task!.repeatDate)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Create a cycle") {
                repeatSubmenu?.classList.toggle("hidden")
                document.getElementById("cycle-container")?.classList.toggle("hidden")
            }
        })
    }
    projectChooseContext() {
        
    }
    cycleSubmenuContext() {
        let series = document.getElementById("series") as HTMLParagraphElement
        let cycleStart = document.getElementById("cycle-time") as HTMLDataElement
        let date: Date
        series.addEventListener("keypress", (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (series.textContent !== null && series.textContent.length > 0 &&
                    /[a-zA-Z]/i.test(series.textContent) === false && cycleStart.value !== "") {


                    date = new Date(cycleStart.value);
                    console.log(date)
                    this.storageManager.handleCycle(this.task!.title, series.textContent, date)
                    series.textContent = "Check the dates below this menu"
                    this.closeAllSubmenus()

                } else {
                    series.textContent = "There has been an error, please enter numbers, seperated by commas"
                }
            }
        })
    }
    cyclesContainerContext() {
        let cyclesContainer = document.getElementById("cycles-container")
        if (cyclesContainer!.childElementCount === 0) cyclesContainer!.style.display = "none";
        else cyclesContainer!.style.display = "block"
        console.log(" bing bang bahoo")
        cyclesContainer?.addEventListener("click", (ev: MouseEvent) => {
            let target = ev.target as HTMLElement
            cyclesContainer?.removeChild(target)
        })
        console.log('Method not implemented.')
    }
    notesContext() {
        let content = document.getElementById("notes")?.getElementsByTagName("p")[0] as HTMLParagraphElement
        let text = ""
        let timer: string | number | NodeJS.Timeout | undefined
        content.addEventListener("keypress", (e: KeyboardEvent) => {
            if (content.textContent !== null && content.textContent!=="Add note") {
                text = content.textContent

                clearTimeout(timer)

                timer = setTimeout(() =>{
                    this.task!.notes = text
                    this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                }, 5000)
            }
        })
        console.log('Method not implemented.')
    }


    redrawSubmenus() {
        /**
         * 0. due-by.submenu
         * 1. due.by.date
         * 2. repeat-submenu
         * 3. project-choose
         * 4. cycle-container
         * 5. priority submenu
         */
        let radChildren = document.getElementsByClassName("repeat-add-due-child")

        let submenus = document.getElementsByClassName("submenus") as HTMLCollectionOf<HTMLElement>

        submenus[2].style.left = `${radChildren[0].getBoundingClientRect().left + radChildren[0].clientWidth * 0.35}px`
        submenus[2].style.top = `${radChildren[0].getBoundingClientRect().top + radChildren[0].clientHeight}px`
        submenus[4].style.left = `${radChildren[0].getBoundingClientRect().left + radChildren[0].clientWidth * 0.015}px`
        submenus[4].style.top = `${radChildren[0].getBoundingClientRect().top + radChildren[0].clientHeight}px`
        submenus[3].style.left = `${radChildren[1].getBoundingClientRect().left + radChildren[1].clientWidth * 0.225}px`
        submenus[3].style.top = `${radChildren[1].getBoundingClientRect().top + radChildren[1].clientHeight}px`
        submenus[0].style.left = `${radChildren[2].getBoundingClientRect().left + radChildren[2].clientWidth * 0.3}px`
        submenus[0].style.top = `${radChildren[2].getBoundingClientRect().top + radChildren[2].clientHeight}px`
        submenus[1].style.left = `${radChildren[2].getBoundingClientRect().left + radChildren[2].clientWidth * 0.11}px`
        submenus[1].style.top = `${radChildren[2].getBoundingClientRect().top + radChildren[2].clientHeight}px`
        submenus[5].style.left = `${radChildren[3].getBoundingClientRect().left + radChildren[3].clientWidth * 0.04}px`
        submenus[5].style.top = `${radChildren[3].getBoundingClientRect().top + radChildren[3].clientHeight}px`
        window.addEventListener("resize", () => {
            setTimeout(() => {
                submenus[2].style.left = `${radChildren[0].getBoundingClientRect().left + radChildren[0].clientWidth * 0.35}px`
                submenus[2].style.top = `${radChildren[0].getBoundingClientRect().top + radChildren[0].clientHeight}px`
                submenus[4].style.left = `${radChildren[0].getBoundingClientRect().left + radChildren[0].clientWidth * 0.015}px`
                submenus[4].style.top = `${radChildren[0].getBoundingClientRect().top + radChildren[0].clientHeight}px`
                submenus[3].style.left = `${radChildren[1].getBoundingClientRect().left + radChildren[1].clientWidth * 0.225}px`
                submenus[3].style.top = `${radChildren[1].getBoundingClientRect().top + radChildren[1].clientHeight}px`
                submenus[0].style.left = `${radChildren[2].getBoundingClientRect().left + radChildren[2].clientWidth * 0.3}px`
                submenus[0].style.top = `${radChildren[2].getBoundingClientRect().top + radChildren[2].clientHeight}px`
                submenus[1].style.left = `${radChildren[2].getBoundingClientRect().left + radChildren[2].clientWidth * 0.11}px`
                submenus[1].style.top = `${radChildren[2].getBoundingClientRect().top + radChildren[2].clientHeight}px`
                submenus[5].style.left = `${radChildren[3].getBoundingClientRect().left + radChildren[3].clientWidth * 0.025}px`
                submenus[5].style.top = `${radChildren[3].getBoundingClientRect().top + radChildren[3].clientHeight}px`
            }, 1000)
        })
    }


    /**
     * Takes the class related global variable openSubmenus as a variable to check how many popupmenus are active.
     * if the usesr clicks the radChildren, then the hidden class is toggled
     * the number of hidden classes are going down by one
     * here fro 6 to five.
     * 
     */
    closeAllSubmenus() {
        let submenus = document.getElementsByClassName("submenus");
        for (let i = 0; i < submenus.length; i++) {
            submenus[i].classList.add("hidden");
        }
    }
    counthiddenSubmenus(): number {
        let submenus = document.getElementsByClassName("submenus");
        let count =0
        for (let i = 0; i < submenus.length; i++) {
            if (submenus[i].classList.contains("hidden")) count++;

        } return count;
    } 
}
