"use strict";

const addTodo = () =>{
    let input = document.querySelector(".input-todo");
    let inputToDo = input.value;
    if(inputToDo){
        let todoList = document.querySelector(".todo-container");

        let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-item");

        let todoContent = document.createElement("div");
            todoContent.classList.add("_button", "todo-content");
            todoContent.dataset.action = "cross";
            todoContent.innerHTML = inputToDo;
            todoContent.addEventListener("click", doAction);

        let xButton = document.createElement("button");
            xButton.classList.add("_button", "rmv-btn");
            xButton.dataset.action = "remove";
            xButton.innerHTML = "<i class=\"fa fa-times\" />";
            xButton.addEventListener("click", doAction);
    
        todoDiv.appendChild(todoContent);
        todoDiv.appendChild(xButton);
        todoList.appendChild(todoDiv);

        input.value = "";
    }
};


const crossTodo = (button) => {
    button.classList.add("todo-crossed");
    button.dataset.action = "";
}

const removeTodo = function(button) {
    button.parentElement.remove();
}

const doAction = (e) => {
    let button = e.currentTarget;
    let action = button.dataset.action;
    if(action === "add"){
        addTodo();
    }
    else if(action === "cross"){
        crossTodo(button);
    }
    else if(action === "remove"){
        removeTodo(button);
    }
}

let currentDate = document.querySelector(".current-date");
currentDate.innerHTML = new Date().toLocaleDateString();


let addButton = document.querySelector(".add-btn");
addButton.onclick = doAction;
