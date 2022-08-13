

export class Todo {
    title
    description
    dueDate
    priority
    notes
    done;
    checklist;
    repeat;
    repeatDate;
    cycle;
    belongsToProject
    myDay;
    constructor(
        title: string, description: string = "", done: boolean = false,
        priority: number = 0, checklist: any = {}, notes?: string | undefined, repeat?: number | undefined, 
        repeatDate?: Date |undefined, cycle?: string[] | undefined, dueDate?: Date |undefined, belongsToProject: string ="", myDay = false) {
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.done = done
        this.checklist = checklist
        this.repeat = repeat
        this.cycle = cycle
        this.repeatDate = repeatDate
        this.belongsToProject = belongsToProject
        this.myDay = myDay
    }
    public info() {
        return {
            "title": this.title,
            "description": this.description,
            "due date": this.dueDate,
            "priority": this.priority,
            "notes": this.notes,
            "checklist": {},
            "repeat": this.repeat,
            "cycle": this.cycle
        }
    }
}