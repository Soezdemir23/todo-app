import { Todo } from "./todos"
import { Project} from "./projects"
import './sass/style.scss'
console.log("Hello World")

let todo = new Todo(
    "Write proejct"
)


console.log(todo.info())

let working = new Project("ToDo App")
working.todos.push(todo)
window.localStorage