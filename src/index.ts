import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
import { DOMManager } from "./domManager"
import { StorageManaging } from "./manager"
import { compareAsc, format} from 'date-fns'

let storage = new StorageManaging(window.localStorage)
let fullTask = new Todo(
    "This is a test", 
    "We really just want to test this task", 
    false,
    "24th january 2023", 
    0,
    {
        "get milk": false,"go jogging": false, "try to get a job": false
    }, 
    "I took a mean ass shit",
    6
)
    let secondTask = new Todo("second", 
    "second", false,
    "24th january 2023", 3 ,
    {"first": false, "second": false, "third": false}, 
    "second")
storage.insertTaskObjectIntoStorage("second", secondTask)
storage.insertTaskObjectIntoStorage("This is a test", fullTask)
console.log(fullTask)
let dom = new DOMManager(storage);
dom.hookSVGToElements()
dom.repopulateTasksListDOM()
dom.readTaskFromDOM()
dom.listContext()
dom.formContext()
//dom.populateSubtask()
// this was instantiated and since the task variable was zero, it didn't work so well
