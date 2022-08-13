import { Todo } from "./todos"
import { ProjectList } from "./projects"
import './sass/style.scss'
import { DOMManager } from "./domManager"
import { StorageManaging } from "./manager"

// get 





let storage = new StorageManaging(window.localStorage)
let dom = new DOMManager(storage);
dom.hookSVGToElements()
dom.repopulateTasksListDOM()
dom.readTaskFromDOM()
dom.listContext()
dom.formContext()
dom.redrawSubmenus()
//dom.populateSubtask()
// this was instantiated and since the task variable was zero, it didn't work so well

if (localStorage.getItem("Test") === null) {
    localStorage.setItem("Test", JSON.stringify({
        "name": "Test",
        "todos": [
            {
                "title": "coralla",
                "description": "This is the first todo",
                "dueDate": "2022-08-06T11:16:38.937Z",
                "priority": 3,
                "done": false,
                "checklist": {},
                "repeat": 1,
                "repeatDate": "2022-07-31T00:38:54.094Z",
                "cycle": [
                    "8th August 2022",
                    "10th August 2022",
                    "10th October 2022",
                    "28th August 2022"
                ],
                "myDay": true,
                "notes": "We can write notes for you",
                "belongsToProject": "Test"
            },
            {
                "title": "corallb",
                "description": "This is the second todo",
                "dueDate": "2022-08-06T11:16:38.937Z",
                "priority": 3,
                "done": false,
                "checklist": {},
                "repeat": 1,
                "repeatDate": "2022-07-31T00:38:54.094Z",
                "cycle": [
                    "8th August 2022",
                    "10th August 2022",
                    "10th October 2022",
                    "28th August 2022"
                ],
                "myDay": true,

                "belongsToProject": "Test"

            }, {
                "title": "corallc",
                "description": "This is the third todo",
                "dueDate": "2022-08-06T11:16:38.937Z",
                "priority": 3,
                "done": false,
                "checklist": {},
                "repeat": 1,
                "repeatDate": "2022-07-31T00:38:54.094Z",
                "cycle": [
                    "8th August 2022",
                    "10th August 2022",
                    "10th October 2022",
                    "28th August 2022"
                ],
                "myDay": true,

                "belongsToProject": "Test"

            },
            {
                "title": "coralld",
                "description": "this is the fourth todo",
                "dueDate": "2022-08-06T11:16:38.937Z",
                "priority": 3,
                "done": false,
                "checklist": {},
                "repeat": 1,
                "repeatDate": "2022-07-31T00:38:54.094Z",
                "cycle": [
                    "8th August 2022",
                    "10th August 2022",
                    "10th October 2022",
                    "28th August 2022"
                ],
                "myDay": true,

                "belongsToProject": "Test"

            }
        ]
    })
    )
    
dom.InitialBoarding("Test")
}else {
    dom.setUpTasksContainer(dom.storageManager.allTasks())

}
dom.addNewProject()
dom.ProjectListMenu()
