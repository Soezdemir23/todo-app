import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
import { DOMManager } from "./domManager"
import { StorageManaging } from "./manager"

let dom = new DOMManager();
let storage = new StorageManaging(window.localStorage)
dom.hookSVGToElements()
dom.readTask()
// this was instantiated and since the task variable was zero, it didn't work so well

