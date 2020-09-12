




const createToDoElement = (inputToDo) => {

};

const addTodo = () =>{
    let input = document.querySelector(".input-todo");
    let inputToDo = input.value;
    if(inputToDo){
        let todoList = document.querySelector(".todo-container");

        let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-item");

        let todoContent = document.createElement("div");
            todoContent.classList.add("todo-content");

        let xButton = document.createElement("button");
            xButton.classList.add("rmv-btn");
    
        todoContent.innerHTML = inputToDo;
        xButton.innerHTML = "<i class=\"fa fa-times\"></i>";
    
        todoDiv.appendChild(todoContent);
        todoDiv.appendChild(xButton);
    
        todoList.appendChild(todoDiv);
    }
};

let currentDate = document.querySelector(".current-date");
currentDate.innerHTML = new Date().toLocaleDateString();


let buttons = document.querySelector("._button");


buttons.addEventListener("click", e => {
    button = e.target;
    let action = button.dataset.action;
    if(action === "add"){
        addTodo();
    }
})
