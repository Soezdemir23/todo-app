import MyDay from './img/home_FILL0_wght400_GRAD0_opsz48.svg'
import SoonDue from './img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg'
import Planned from './img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg'
import AllTasks from './img/grade_FILL0_wght400_GRAD0_opsz48.svg'
import Project from './img/list_FILL0_wght400_GRAD0_opsz48.svg'
import NewTask from './img/priority_FILL0_wght400_GRAD0_opsz48.svg'

export function hookToElements(){
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
    newTaskElement.src =  NewTask
}