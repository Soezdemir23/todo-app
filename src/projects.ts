import { Todo } from "./todos";

export class Project {
    private _name: string;

    private _todos: Todo[] = [];

    constructor(name: string) {
        this._name = name
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get todos() {
        return this._todos;
    }
    public set todos(value) {
        this._todos = value;
    }
}