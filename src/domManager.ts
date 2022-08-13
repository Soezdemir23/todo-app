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
import Delete from './img/delete.svg'

import { StorageManaging } from './manager'
import { Todo } from './todos'
import { format, parseISO } from 'date-fns'
import { ProjectList } from './projects'
/**
 * DOMManager manages the I/O and handling of the DOM the user interacts with
 * it takes the values from the forms and input and saves them for the
 * use later for the TaskManager.
 */
/*TODO: Work slowly through the projects, then replace the tree as required.
 1. New List
 1.1. check if the new List is in the localstorage and in the list in HTML DONE
 1.2. insert tasks and implement a function that checks for duplicate tasks in projects and in localstorage DONE
 1.3. refactor the code so it can check for duplicates in projects and localstorage DONE
 1.3.1 implement a warning that the user is entering a task with the same name in the project, or the localstorage DONE
 1.4. fix the "add to project" part of the app 
 1.5. fix the add to my day issue DONE
 1.5.1 todos need to start with a myDay to false
 1.5.1 add a new property for task to take "My Day" as either true or false
 1.5.2 add behavior indicator for "Add to my day", button to display "Added to my day"
 1.5.2.1 add a close button for true, to remove it to indicate it's getting removed.
 1.6. add remove buttton for tasks
 1.7. fix the submenu clearing
 1.8. fix the cycle container
 1.9. fix the repeat button to repeat the cycle, or wait for a prompt that the user either confirms, or removes the repeat
 1.10 fix the add due block to make it able to remove the due date 
 2.11 Add a import/export button for the localstorage
 */
export class DOMManager {
    task: null | Todo = null;
    storageManager: StorageManaging
    openSubmenus = 6;
    project: undefined | ProjectList;

    constructor(storageManager: StorageManaging) {
        this.storageManager = storageManager
        //   this.myDay = new P
    }

    hookSVGToElements() {
        let myDayElement = document.getElementById("my-day-img") as HTMLImageElement
        myDayElement.src = MyDay
        let soonDueElement = document.getElementById("soon-due-img") as HTMLImageElement
        soonDueElement.src = SoonDue
        let plannedElement = document.getElementById("planned-img") as HTMLImageElement
        plannedElement.src = Planned
        let allTaskElement = document.getElementById("all-tasks-img") as HTMLImageElement
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
     * Should do two things:\n 
     * 1.enter a task, that doesn't exist in projects, then put them into all tasks.
     * 2.enter a task, that exists in projects
     * 
     **/
    readTaskFromDOM() {
        let addTaskInput = document.getElementById("add-task-container")?.querySelector("input")
        addTaskInput?.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                // first of all check if the value is not empty
                if (addTaskInput?.value !== undefined) {
                    //check if the task is "My Day", "Soon Due", "Planned", "All Tasks"
                    // if yes, then check if the task exists inside the localstorage
                    // if not, then the project list needs to be checked if the task exists in the storage
                    let listName = document.getElementById("list-name")?.textContent
                    if (listName !== undefined && (listName === "My Day" || listName === "Soon Due" || listName === "Planned" || listName === "All Tasks")) {
                        if (this.storageManager.getTask(addTaskInput.value) === null || this.storageManager.getTask(addTaskInput.value) === undefined) {
                            let newTask = new Todo(addTaskInput.value)
                            newTask.myDay = false
                            this.storageManager.insertTaskObjectIntoStorage(newTask.title, newTask)
                        } else {
                            addTaskInput.value = "Task with same name. Put existing todo into a project, customize it, or remove it."
                        }
                    }
                }
            }
        })
    }
    addTaskToToDoListDOM(task: string, whichContainer: string) {
        let taskContainer = document.getElementById(`${whichContainer}`)
        let newToDoList = document.createElement("li")
        newToDoList.dataset.name = `${task}`
        newToDoList.innerHTML =
            `<button id="uncover-details" data-name="${task}">+</button>${task} <button id="task-delete-button"><img id="task-delete-image" src="${Delete}"/></button>`
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
            let elemTarget = ev.target as HTMLElement

            //if the target in this container clicked is a list, we call it either done, or undone
            if (nodeTarget.nodeName === "LI") {
                let target = ev.target as HTMLElement
                if (target.dataset.name != null) {
                    this.assignThisTask(target.dataset.name)
                    if (target.parentElement != null)
                        if (target.parentElement.id === "not-done") {
                            if (this.task?.belongsToProject == "") {
                                this.task.done = true
                                this.storageManager.insertTaskObjectIntoStorage(this.task.title, this.task)
                                this.pushToDoneOrUndoneContainer(target, "done")
                            } else {
                                // get the current project by getting the belongstoprojeect property value, then change the task done to false, then put the new change intot the project, 
                                // then after the update is in the storage, push the element into the other ul
                                let project = this.storageManager.getProjectFromLocalStorage(this.task?.belongsToProject!)
                                console.log("before change with projectname:", this.task);
                                this.task!.done = true
                                console.log("after change with projectname:", this.task);
                            
                                this.storageManager.replaceTaskInProject(project!, this.task!)
                                this.pushToDoneOrUndoneContainer(target, "done")
                            }
                        } else if (target.parentElement.id === "done") {
                            if (this.task?.belongsToProject == "") {
                                this.task.done = false
                                console.log(this.task)
                                this.storageManager.insertTaskObjectIntoStorage(this.task.title, this.task)
                                this.pushToDoneOrUndoneContainer(target, "not-done")
                            } else {
                                // get the current project by getting the belongstoprojeect property value, then change the task done to false, then put the new change intot the project, 
                                // then after the update is in the storage, push the element into the other ul
                                let project = this.storageManager.getProjectFromLocalStorage(this.task?.belongsToProject!)
                                console.log("before change with projectname:", this.task);
                                this.task!.done = false
                                console.log("after change with projectname:", this.task);
                                this.storageManager.replaceTaskInProject(project!, this.task!)
                                this.pushToDoneOrUndoneContainer(target, "not-done") 
                            }
                        }
                } else console.log("Dataset Name shouldn't be null, we have a problem houston")
            } else if (nodeTarget.nodeName === "BUTTON" && elemTarget.id == "uncover-details") {
                this.taskButtonContext(ev)
            } else if (nodeTarget.nodeName === "BUTTON" && elemTarget.id == "task-delete-button" || elemTarget.id == "task-delete-image") {
                if (elemTarget.id == "task-delete-button") {
                    console.log("button", elemTarget.parentElement?.dataset.name)
                    this.populateForm(elemTarget.parentElement?.dataset.name!)
                    if (this.task?.belongsToProject === "") {
                        this.storageManager.removeTaskOrProject(this.task.title)
                        elemTarget.parentElement?.parentElement?.removeChild(elemTarget.parentElement)
                    } else {
                        console.log(this.task?.belongsToProject)
                        let project = this.storageManager.getProjectFromLocalStorage(this.task!.belongsToProject)
                        console.log("our project:", project)
                        // remove it from ui first before you remove it from localstorage

                        for (let i = 0; i < project!.todos.length!; i++) {
                            if (project!.todos[i].title === this.task?.title) {
                                project!.todos.splice(i, 1)
                            }
                        }
                        this.storageManager.setProjectIntoLocalStorage(project!)
                    }
                } else if (elemTarget.id == "task-delete-image") { // remove the tasks either within the project or the localstorage. By checking the task.belongsToProject. 
                    // if it is not in any project, removal is simple. If not, we need to go deeper into the project 
                    console.log("image", elemTarget.parentElement?.parentElement?.dataset.name)
                    this.populateForm(elemTarget.parentElement?.parentElement?.dataset.name!)
                    if (this.task?.belongsToProject === "") {
                        this.storageManager.removeTaskOrProject(this.task.title)
                    } else {
                        console.log(this.task?.belongsToProject)
                        let project = this.storageManager.getProjectFromLocalStorage(this.task!.belongsToProject)
                        console.log("our project", project)
                        for (let i = 0; i < project?.todos.length!; i++) {
                            if (project!.todos[i].title === this.task?.title) {
                                project!.todos.splice(i, 1)
                            }
                        }
                        this.storageManager.setProjectIntoLocalStorage(project!)
                    }
                } else {
                    console.log("fucked")

                }
            } else {
                console.log("outside of scope: ", elemTarget)
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
            console.log("something went wrong in taskButtoncontext: ", target)
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
    // How can I rewrite this in typescript without first using an exclamtion mark and THEN write the condition? This sucks.
    populateForm(taskname: string) {
        this.assignThisTask(taskname)


        // get the task title
        let taskTitleAndContent = document.getElementById("task-content") as HTMLParagraphElement

        taskTitleAndContent.textContent = this.task!.title + " -- " + this.task!.description

        let subTaskList = document.getElementById("subtask-list-container") as HTMLUListElement // HTMLCollectionOf<Element>

        Array.from(subTaskList.children).forEach(child => {
            if (child.className === "subtask-child") subTaskList.removeChild(child)
        })

        if (Object.keys(this.task!.checklist).length > 0) {
            for (let key in this.task!.checklist) {

                if (Object.prototype.hasOwnProperty.call(this.task!.checklist, key)) {
                    let li = document.createElement("li")
                    li.classList.add("subtask-child")
                    li.dataset.name = key
                    //done/not done image

                    let img = document.createElement("img") as HTMLImageElement
                    if (this.task!.checklist[key] === false) {
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

        let myDay = document.getElementById("add-to-my-day-text")
        if (myDay !== null && this.task!.myDay === true) {
            myDay.textContent = "Added to my Day"
        } else {
            myDay!.textContent = "Add to my Day"
        }
        let radChildren = document.getElementsByClassName("repeat-add-due-child")

        let date = radChildren[2].querySelector("span")
        if (this.task!.dueDate !== undefined && this.task!.dueDate !== undefined) date!.textContent = format(parseISO(this.task!.dueDate!.toString()), "do MMM yyyy")
        else date!.textContent = "Add due date"

        let repeat = radChildren[0].querySelector("span")
        if (this.task!.repeat === undefined && this.task!.repeatDate === undefined) {
            repeat!.textContent = "Repeat"
        } else {
            repeat!.textContent = this.storageManager.calculateDateDifference(
                new Date(), // the current date
                this.task!.repeatDate! // the date used to subtract from
            );
        }

        //added later when I am working on the project class
        let addProject = radChildren[1].querySelector("span")
        if (this.task?.belongsToProject != "" ){
            addProject!.textContent = this.task!.belongsToProject
        } else {
            addProject!.textContent = "Add to Project"
        }

        let priority = radChildren[3].querySelector("span")
        switch (this.task!.priority) {
            case 0:
                priority!.textContent = "Low importance [0]"
                break;
            case 1:
                priority!.textContent = "Medium importance [1]"
                break;
            case 2:
                priority!.textContent = "High importance [2]"
                break;
            case 3:
                priority!.textContent = "Urgent importance [3]"
                break;
            default:
                if (this.task!.priority !== undefined) {
                    priority!.textContent = "Set Priority"
                } else {
                    priority!.textContent = "Invalid Priority"
                }
                break;
        }

        this.refreshCycles()
        let notesElement = document.getElementById("notes-content") as HTMLParagraphElement
        if (this.task!.notes !== undefined) {
            notesElement.textContent = this.task!.notes
        } else {
            notesElement.textContent = "Add note"
        }
    }
    private refreshCycles() {
        let cycleContainer = document.getElementById("cycles-container")

        cycleContainer?.replaceChildren("")
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


        this.task!.cycle?.forEach(date => {
            let copy = cyclesChild?.cloneNode(true) as HTMLElement
            copy.firstElementChild!.textContent = date

            cycleContainer?.append(copy)

        })
    }

    private assignThisTask(taskname: string) {
        this.task = this.storageManager.getTask(taskname)
        if (this.task === null) {

            let currentProject: ProjectList = this.storageManager.
                getProjectFromLocalStorage(document.getElementById("list-name")?.textContent!)!

            if (currentProject === undefined) { // there was no definitive project saved, only planned, due or all tasks.
                this.task = this.storageManager.crawlForTodo(taskname)!

            } else {
                //TODO: This should have been in the ProjectList class. 
                //But somehow, the functions in that class aren't recognized
                currentProject.todos.forEach(todo => {
                    if (todo.title === taskname) {
                        this.task = todo
                    }
                })
            }
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
        this.addToMyDayContext()
        this.radContext()
        this.dueBySubmenuContext()
        this.dueByDateSubmenuContext()
        this.repeatSubmenuContext()
        this.prioritySelectContext()
        this.projectListContext()
        this.cycleSubmenuContext()
        this.cyclesContainerContext()
        this.notesContext()
    }
    projectListContext() {
        let selectParent = document.getElementById("select-project-parent") as HTMLSelectElement;
        
        selectParent?.addEventListener("change", () => {
            console.log("showing selected project: ",selectParent.options[selectParent.selectedIndex])
            // project is ""
            if (this.task?.belongsToProject === "")  {
                this.task!.belongsToProject = selectParent.options[selectParent.selectedIndex].value
            } else {
                let project = this.storageManager.getProjectFromLocalStorage(this.task?.belongsToProject!)
                //remove the todo from project's todo property via splice
                for (let i = 0; i < project!.todos.length; i++) {
                    if (this.task!.title === project!.todos[i].title ) {
                        project?.todos.splice(i, 1)
                    }
                }
                this.storageManager.setProjectIntoLocalStorage(project!)
                // get the current new task in
                this.task!.belongsToProject =selectParent.options[selectParent.selectedIndex].value
                if (this.task!.belongsToProject === "") { // pull it out again
                    this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                } else { // pull it into another project
                   let project = this.storageManager.getProjectFromLocalStorage(selectParent.options[selectParent.selectedIndex].value)
                    project?.todos.push(this.task!)
                    this.storageManager.setProjectIntoLocalStorage(project!)
                }
            }
        })
    }
    /**
     * Simply closes the task details menu
     */
    closeMenu() {
        let closeButton = document.getElementById('close-task-customization')

        closeButton?.addEventListener('click', () => {
            document.getElementById('task-customization')?.classList.add("hidden")
            document.getElementById("task-customization")!.style.display = "none"
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
        let myDay = document.getElementById("add-to-my-day-container")
        myDay?.addEventListener("click", () => {
            console.log("clicked");
            console.log();

            if (this.task?.myDay === true) {
                document.getElementById("add-to-my-day-text")!.textContent = "Add to my Day"
                document.getElementById("add-to-my-day-cross")?.classList.add("hidden")
                this.task!.myDay = false;

                console.log("this triggered: true");
                if (this.task.belongsToProject === "") {
                    this.storageManager.insertTaskObjectIntoStorage(this.task.title, this.task)
                } else {
                    let p = this.storageManager.getProjectFromLocalStorage(this.task.belongsToProject)
                    this.storageManager.replaceTaskInProject(p!, this.task)
                }
            } else {
                document.getElementById("add-to-my-day-text")!.textContent = "Added to my Day"
                document.getElementById("add-to-my-day-cross")?.classList.remove("hidden")
                this.task!.myDay = true;
                if (this.task!.belongsToProject === "") {
                    this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                } else {
                    let p = this.storageManager.getProjectFromLocalStorage(this.task!.belongsToProject)
                    this.storageManager.replaceTaskInProject(p!, this.task!)
                }
                console.log("this triggered: false");

            }
        })
    }

    radContext() {
        let screen = document.getElementById("repeat-add-due-container")

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
            } else if (elem.classList.contains("submenus") !== false) {
                this.closeAllSubmenus()
            }
        })
    }

    dueBySubmenuContext() {
        let dueBySubmenu = document.getElementById("due-by-submenu")
        dueBySubmenu?.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            if (element.textContent === "Today") {
                this.task!.dueDate = new Date()
             
                let project = this.storageManager.getProjectFromLocalStorage(document.getElementById("list-name")?.textContent!)
                project?.todos.push(this.task!)
                this.storageManager.setProjectIntoLocalStorage(project!)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Tomorrow") {
                console.log("Tomorrow clicked")
                this.task!.dueDate = this.storageManager.addDaysToRepeat(new Date(), 1)
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Next Week") {
                console.log("Next Week clicked")
                this.task!.dueDate = this.storageManager.addDaysToRepeat(new Date(), 7)
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Pick a date") {
                document.getElementById("due-by-date-submenu")?.classList.toggle("hidden")
                dueBySubmenu!.classList.toggle("hidden")
            }
        })

    }
    dueByDateSubmenuContext() {

        let datelocal = document.getElementById("due-time") as HTMLDataElement
        datelocal?.addEventListener("click", () => {
            console.log("cliked")
            console.log(datelocal.value)
            setTimeout(() => {
                console.log(datelocal.value)
                this.task!.dueDate = new Date(datelocal.value)
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                this.populateForm(this.task!.title)
            }, 10000)
        })
    }
    repeatSubmenuContext() {
        let repeatSubmenu = document.getElementById("repeat-submenu")
        repeatSubmenu?.addEventListener("click", (ev: MouseEvent) => {
            let element = ev.target as HTMLElement
            if (element.textContent === "daily") {
                this.task!.repeat = 1
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 1)
                console.log("The repeat by one day: " + this.task!.repeatDate)
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                this.populateForm(this.task!.title)

            } else if (element.textContent === "weekly") {
                this.task!.repeat = 7
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 7)
                console.log(this.task!.repeatDate)
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Monthly") {
                this.task!.repeat = 28
                this.task!.repeatDate = this.storageManager.addDaysToRepeat(new Date(), 28)
                console.log(this.task!.repeatDate)
                this.populateForm(this.task!.title)
            } else if (element.textContent === "Create a cycle") {
                repeatSubmenu?.classList.toggle("hidden")
                document.getElementById("cycle-container")?.classList.toggle("hidden")
            }
        })
    }
    prioritySelectContext() {
        this.refreshProjectList()

        let select = document.getElementById("priority-select") as HTMLSelectElement

        select?.addEventListener("change", () => {
            console.log(("selecting:" + select.options[select.selectedIndex].value));
            this.task!.priority = parseInt(select.options[select.selectedIndex].value)
            if (this.task!.belongsToProject != "") {
                let project = this.storageManager.getProjectFromLocalStorage(this.task!.belongsToProject!)
                this.storageManager.replaceTaskInProject(project!, this.task!)
            } else {
                this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
            }

        })

    }
    private refreshProjectList() {
        let parent = document.getElementById("select-project-parent")
        parent?.replaceChildren("", )
        let option = document.createElement("option") as HTMLOptionElement
        option.value = "select-project"
        option.textContent = "select-project"
        parent?.appendChild(option)
        this.storageManager.getProjectNames().forEach(project => {
            let option = document.createElement("option")
            option.textContent = project
            option.value = project
            parent?.appendChild(option)

        })
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
                    console.log(this.task?.title, series.textContent, date) 
                    //WARNING: wouldn't it be better to pass the whole task variable?
                    // simply send the object, then handle the cycle in that object, then either by the way if it is in a project or not, replace it
                    // no need for more stupid shit like this.
                    this.storageManager.handleCycle(this.task!, series.textContent, date)
                    series.textContent = "Check the dates below this menu"
                    this.closeAllSubmenus()
                    document.getElementById("event-repeat-span")!.textContent = "Add a Date"
                    this.refreshCycles()
                } else {
                    series.textContent = "There has been an error, please enter numbers, seperated by commas"
                }
            }
        })
    }
    cyclesContainerContext() {
        let cyclesContainer = document.getElementById("cycles-container")

        cyclesContainer?.addEventListener("click", (ev: MouseEvent) => {
            let target = ev.target as HTMLElement
            cyclesContainer?.removeChild(target)
        })
        console.log('Method not implemented.')
    }

    notesContext() {
        let content = document.getElementById("notes")
        let text = ""
        let timer: string | number | NodeJS.Timeout | undefined
        content?.addEventListener("keypress", (e: KeyboardEvent) => {
            if (content?.textContent !== null && content?.textContent !== "Add note") {
                text = content!.textContent
                clearTimeout(timer)

                timer = setTimeout(() => {
                    if (this.task?.belongsToProject == ""){
                        this.task!.notes = text.trim()
                        this.storageManager.insertTaskObjectIntoStorage(this.task!.title, this.task!)
                    } else {
                        this.task!.notes = text.trim()
                        this.storageManager.replaceTaskInProject(
                            this.storageManager.getProjectFromLocalStorage(this.task?.belongsToProject!)!, this.task!
                            )
                    }
                }, 1000)
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
        let count = 0
        for (let i = 0; i < submenus.length; i++) {
            if (submenus[i].classList.contains("hidden")) count++;

        } return count;
    }

    InitialBoarding(projectname: string) {
        this.project = this.storageManager.getProjectFromLocalStorage(projectname);
        this.setUpTasksContainer(this.project!);
    }
    ProjectListMenu() {

        console.log(this.storageManager.getProjectNames())
        this.storageManager.getProjectNames().forEach(title => {
            let list = document.createElement("li")
            list.textContent = title
            list.dataset.name = title

            let removeButton = document.createElement("button")
            let removeSymbol = document.createElement("img")
            removeSymbol.src = Delete

            document.getElementById("custom-projects-list")?.appendChild(list)
            list.appendChild(removeButton)
            removeButton.appendChild(removeSymbol)
        })
        let listContainer = document.getElementById("lists-container")

        listContainer?.addEventListener("click", (ev: MouseEvent) => {
            let target = ev.target as HTMLElement
            if (document.getElementById("my-day")!.id === target!.id) {
                this.setUpTasksContainer(this.storageManager.getMyDayTodos(), "My Day");
            } else if (document.getElementById("soon-due")!.id === target!.id) {
                this.setUpTasksContainer(this.storageManager.soonDueTaks(), "Soon Due")
            } else if (document.getElementById("planned")!.id === target!.id) {
                
                this.setUpTasksContainer(this.storageManager.plannedTasks(), "Planned")
            } else if (document.getElementById("all-tasks")!.id === target!.id) {

                console.log("all-tasks clicked")
                this.setUpTasksContainer(this.storageManager.allTasks())
            } else if (target.dataset.name != null) {
                this.project = this.storageManager.getProjectFromLocalStorage(target.dataset.name)
                this.setUpTasksContainer(this.project!)

            } else if (target.parentElement?.parentElement?.dataset.name != null) {
                document.getElementById("custom-projects-list")?.removeChild(target.parentElement.parentElement)
                this.storageManager.removeTaskOrProject(target.parentElement.parentElement.dataset.name!)
                this.setUpTasksContainer(this.storageManager.allTasks())
                if (document.getElementById("custom-projects-list")?.childElementCount === 0) {

                }
            } else {
                console.log(target.parentElement?.parentElement)
            }
        })
    }

    addNewProject() {
        let newProjectText = document.getElementById("new-list-content") as HTMLParagraphElement
        newProjectText.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key === "Enter" && newProjectText.textContent!.length > 0) {
                ev.preventDefault()
                let count = 0;
                this.storageManager.getProjectNames().forEach(title => {
                    if (title == newProjectText.textContent?.trim()) count++
                })
                if (count > 0) newProjectText.textContent = "You tried adding a duplicate!"
                else {
                    let newProject = new ProjectList(newProjectText.textContent!)
                    let newList = document.createElement("li")
                    newList.textContent = newProject.name
                    let removeButton = document.createElement("button")
                    let removeSymbol = document.createElement("img")
                    removeSymbol.src = Delete
                    newList.dataset.name = newProjectText.textContent!
                    document.getElementById("custom-projects-list")?.appendChild(newList)
                    newList.appendChild(removeButton)
                    removeButton.appendChild(removeSymbol)
                    this.storageManager.setProjectIntoLocalStorage(newProject)
                    this.refreshProjectList()
                }
            }
        })
    }



    setUpTasksContainer(project: ProjectList | Todo[], title= "") {
        if (project instanceof ProjectList) {
            document.getElementById("tasks-container")!.
                getElementsByClassName("header")[0].querySelector("div")!.
                firstElementChild!.textContent = project.name

            document.getElementById("not-done")?.replaceChildren("")
            document.getElementById("done")?.replaceChildren("")

            project.todos.forEach(task => {
                if (task.done === false) {
                    this.addTaskToToDoListDOM(task.title, "not-done")
                } else {
                    this.addTaskToToDoListDOM(task.title, "done")
                }
            })
        } else {
            document.getElementById("tasks-container")!.
                getElementsByClassName("header")[0].querySelector("div")!.
                firstElementChild!.textContent = title

            document.getElementById("not-done")?.replaceChildren("")
            document.getElementById("done")?.replaceChildren("")
            project.forEach(task => {
                if (task.done === false) {
                    this.addTaskToToDoListDOM(task.title, "not-done")
                } else {
                    this.addTaskToToDoListDOM(task.title, "done")
                }
            })
        }


    }

    projectsMenu() {
        document.getElementById("projects-menu")?.addEventListener("click", () =>{
            //so a manual toggle now? Really? Okay I guess.
            if (document.getElementById("lists-container")?.classList.contains("hidden") == false) {
                document.getElementById("lists-container")!.style.display = "none"
                document.getElementById("lists-container")?.classList.toggle("hidden")

            } else {
                document.getElementById("lists-container")!.style.display = "block"
                document.getElementById("lists-container")?.classList.toggle("hidden")

            }
        })
    }

}
