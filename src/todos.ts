

export class Todo {
     title
     description
     dueDate
     priority
     notes
     done;
     checklist;
     repeat;

    
    constructor(title: string, description: string="", done:boolean = false, dueDate: string ="", priority: number = 0,  checklist: any = {}, notes?: string|undefined, repeat?: number | undefined) {
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.done = done
        this.checklist = checklist
        this.repeat = repeat
    }
    public info() {
        return {
            "title": this.title,
            "description": this.description,
            "due date": this.dueDate,
            "priority": this.priority,
            "notes": this.notes,
            "checklist": {},
            "repeat": this.repeat
        }
    }
}