// import {v4 as uuidV4 } from "uuid";

type Task = {
    id: number,
    title: string,
    completed: boolean,
    createdAt: Date
}

let newId: number = 0;

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new_task_form") as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>("#new_task_title");
const tasks : Task[] = [];
tasks.forEach(addTodo);

form?.addEventListener("submit", e => {
    e.preventDefault();

    if( input?.value == "" || input?.value == null ) return;

    const task : Task = {
        id: newId,
        title: input.value,
        completed: true,
        createdAt: new Date()
    }
    tasks.push(task);
    addTodo(task);
    input.value = "";
});

function addTodo(task: Task) :void {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        label.setAttribute("class", "done");
    });
    
    if(task.completed) {
        checkbox.checked = task.completed;
        label.setAttribute("class", "done");
        checkbox.disabled = task.completed;
    }
    label.append(checkbox, task.title);
    
    item.append(label);
    list?.append(item);
}