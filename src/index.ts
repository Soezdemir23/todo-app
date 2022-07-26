import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
import { DOMManager } from "./domManager"
import { StorageManaging } from "./manager"
import { addDays, compareAsc, format} from 'date-fns'

// get 





let storage = new StorageManaging(window.localStorage)
let dom = new DOMManager(storage);
dom.hookSVGToElements()
dom.repopulateTasksListDOM()
dom.readTaskFromDOM()
dom.listContext()
dom.formContext()
dom.redrawSubmenus()
//dom.populateSubtask()
// this was instantiated and since the task variable was zero, it didn't work so well
