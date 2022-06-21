import { Todo } from "./todos"
import { Project} from "./projects"

console.log("Hello World")

let todo = new Todo(
    "Write proejct", "I need to get this job done", "23rd June, 2022", 3,{"think about your needs": true, "create the draft": false},
)


console.log(todo.info())

let working = new Project("ToDo App")
working.todos.push(todo)
window.localStorage.setItem(`${working.name}`, JSON.stringify(working))