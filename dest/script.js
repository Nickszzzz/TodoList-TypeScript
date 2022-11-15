"use strict";
// import {v4 as uuidV4 } from "uuid";
let newId = 0;
const list = document.querySelector("#list");
const form = document.getElementById("new_task_form");
const input = document.querySelector("#new_task_title");
const tasks = [];
tasks.forEach(addTodo);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const task = {
        id: newId,
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    addTodo(task);
    input.value = "";
});
function addTodo(task) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        label.setAttribute("class", "done");
        label.setAttribute("class", "done");
        checkbox.disabled = task.completed;
    });
    if (task.completed) {
        checkbox.checked = task.completed;
        label.setAttribute("class", "done");
        checkbox.disabled = task.completed;
    }
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
