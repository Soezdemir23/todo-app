# ToDo-App
A wise man once said:
You ain't a developer if you haven't created a ToDo App so far.
Going to use local storage for that one.

## Sketching:
### Code drafting:
Create a Todo:
title [mandatory],

description, dueDate, priority, checklist = {}, notes: "", [optional]

Create a project class:
+ it takes as many todos as possible
+ it has a name

+ it takes further todos.
+ each is either ordered by
    + title
    + dueDate
    + priority
+ it can remove todos

What can I do with todos:
+ I can create a new one
+ I can delete the current one
+ I can edit them
+ I can move them to a project
+ I can move them out of a project
+ I can see the progress bar, also based on subtasks
+ it has a tasks done bar

What can I do with projects:
+ I can create them
+ I can edit them
+ I can complete the project.
+ I can see the progress based on completed tasks

What should a manager be able to do:
+ take the user information and put them in a task object
+ able to know how many tasks exist
+ able to know how many of them are 

### Layout Drafting:

+ Has three containers

#### List-Menu

+ Welcome header
    + use div, call the class header
+ Main
    + don't use section, use div, but call it section.
        + Default Setttings
            + MyDay
            + Due Date
            + Planned
            + All Tasks
        + Projects
            + Add default project that can be deleted later
+ New Project footer
    + use div, call the class header

#### Main Tasks

+ List header
    + Menu button für projects
    + 
+ Main 
    + To Do tasks
        + Tasks is a list container
            + contains a data set attribute to 
            + Checkmark for done or not done
            + Name for Task
                + Clicking it opens the Task Customization 
    + Done tasks
        + is a button that can collapse this submenu
        + Tasks
            + can still be customized and are then moved back if it happens
            + Checkmarks that are done are moved to here
            + The checkmark is checked
            + Text is striked
+ Add new Tasks
    + form
        + check svg inside button if the user wants to
            + hover is pulsing?
                + https://www.youtube.com/watch?v=PMGCOVfK-8s
        + Simple input text area.

#### Task Customization

+ form, optional entries. Load
    + Task
    + subtask
        + create a new subtask entry for the next subtask
    + into Project
        + take the information from localstorage
    + rmd
        + https://linuxhint.com/create-popup-menu-javascript/
        + Add To My Day 
        + Remind Me
        + Repeat
    + Priority
    + Notes

## License
MIT License.
Do what you want, fuck it up and it's your problem