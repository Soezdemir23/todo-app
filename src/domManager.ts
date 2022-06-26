import MyDay from './img/home_FILL0_wght400_GRAD0_opsz48.svg'
import SoonDue from './img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg'
import Planned from './img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg'
import AllTasks from './img/grade_FILL0_wght400_GRAD0_opsz48.svg'
import Project from './img/list_FILL0_wght400_GRAD0_opsz48.svg'
import NewTask from './img/priority_FILL0_wght400_GRAD0_opsz48.svg'
/**
 * DOMManager manages the I/O and handling of the DOM the user interacts with
 * it takes the values from the forms and input and saves them for the
 * use later for the TaskManager.
 */
export class DOMManager {
    private _task = ""
    public get task() {
        return this._task
    }
    public set task(value) {
        this._task = value
    }

    /**
     * Listens to input in the task menu, upon entering "Enter" it checks if the v
     */
    readTask() {
        let addTaskInput = document.getElementById("add-task-container")?.querySelector("input")
        addTaskInput?.addEventListener("keypress", (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                this._task = addTaskInput!.value
                console.log(this._task)
                if (this._task.length < 1) {
                    return
                } else {
                    this.addTaskToToDoList()
                    addTaskInput!.value = ""
                
                }
            }
        })
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

    addTaskToToDoList() {
        let notDoneContainer = document.getElementById("not-done")
        let newToDoList = document.createElement("li")
        newToDoList.classList.add("task-child")
        newToDoList.innerHTML = `<input type="checkbox" name=${this.task} id="task"><p>${this.task}</p>` 
        notDoneContainer?.insertBefore(newToDoList, notDoneContainer.firstChild)

    }
}