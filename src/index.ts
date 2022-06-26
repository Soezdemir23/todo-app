import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
import { DOMManager } from "./domManager"


console.log("Hello World")

let todo = new Todo(
    "Write proejct"
)
let dom = new DOMManager();
dom.hookSVGToElements()
let result = dom.readTask()
console.log("Result is: ", result)


console.log(todo.info())

let working = new Project("ToDo App")
working.todos.push(todo)
window.localStorage