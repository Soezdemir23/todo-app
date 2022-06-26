import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
import { hookToElements } from "./hook_assets"
import { readTask } from "./domManager"
console.log("Hello World")

let todo = new Todo(
    "Write proejct"
)
hookToElements()

readTask()


console.log(todo.info())

let working = new Project("ToDo App")
working.todos.push(todo)
window.localStorage