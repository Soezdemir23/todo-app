# ToDo-App
A wise man once said:
You ain't a developer if you haven't created a ToDo App so far.
Therefore we are creating a Todo App.


There it is
https://soezdemir23.github.io/todo-app/

## What did you use to make it?
+ Typescript
+ SASS, a preprocessor for CSS
+ localstorage
+ Material Symbols and Icons from Google (https://fonts.google.com/icons)
+ used a bundler to take care of all asset management
+ localstorage as a current Database to load and save tasks and projects from
+ lots of patience and time


## Features:
+ Tasks
+ Tasks customization
    + title and description, divided by double hyphen
    + subtasks
    + specific filters for 
        + adding it to your days todo
        + allowing the user to repeat the todo with each time
        + calculate and display dates by a sequence of numbers and a starting date
        + due dates
        + Priorities
        + Project assignment (one per task for now)
        + Notes for additional information
+ Projects
    + create projects
    + assign todos to them easily
    + remove the tasks
    + remove the project

+ localstorage
    + You can SAVE your todos and as long as you don't remove your history, it will come back
    + I still advise you to write necessary information down, just in case you have to delete your cookies or something.

## This is half-baked, why have you released it in this state?

The minimum functionality of the app has been provided. I spent an extensive amount of time doing something for which frameworks already exist. This project exhausted me, using all my free time and I learned a lot from it. I want to carry on and learn how to make this better when I come back. Hopefully this time where working on this would be more fun.

## Addendum

After cloning and installing it to make a quick commit and push it, I encountered an error.
It required:

+ following this guide: https://github.com/nodejs/node-gyp#on-windows 
+ npm install --save-dev node-sass
+ npm update

Please let me know if you had trouble with it. Orr better yet, just use the online version provided above