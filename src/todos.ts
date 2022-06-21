export class Todo {
    private _title
    private _description
    private _dueDate
    private _priority    
    private _notes
    private _checklist

    constructor(title: string, description: string, dueDate: string, priority: number,  checklist: any = {}, notes?: string|undefined) {
        this._title = title;
        this._description = description
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes
        this._checklist = checklist
    }
    public get title() {
        return this._title
    }
    public set title(value) {
        this._title = value
    }
    public get description() {
        return this._description
    }
    public set description(value) {
        this._description = value
    }
    public get dueDate() {
        return this._dueDate
    }
    public set dueDate(value) {
        this._dueDate = value
    }
    public get priority() {
        return this._priority
    }
    public set priority(value) {
        this._priority = value
    }
    public get notes() {
        return this._notes
    }
    public set notes(value) {
        this._notes = value
    }
    public get checklist() {
        return this._checklist
    }
    public set checklist(value) {
        this._checklist = value
    }

    public info() {
        return {
            "title": this.title,
            "description": this.description,
            "due date": this.dueDate,
            "priority": this.priority,
            "notes": this.notes,
            "checklist": {}
        }
    }
}