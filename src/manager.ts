import { DOMManager } from "./domManager";
import { Todo } from "./todos";

/**
 * There is StorageManager, but that name is already taken by the libraries.
 * It's job is to look for tasks in the background and pass it to the domManager
 * in order to populate the frontend
 * 
 */
export class StorageManaging {
    private localStorage: Storage;
    constructor(localstorage: Storage) {
        this.localStorage = localstorage
    }

    public insertTaskObjectIntoStorage(Task: Todo) {
        this.localStorage.setItem("name", JSON.stringify(Task))
    }
    
}