import { Todo } from "./todos";

export class ProjectList {
    name: string;

    todos: Todo[] = [];

    constructor(name: string = "", todos: Todo[] = [] ) {
        this.name = name
        this.todos = todos
    }

}





