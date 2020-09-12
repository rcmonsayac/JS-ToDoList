

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
            todoContent.addEventListener("click", crossTodo);

        let xButton = document.createElement("span");
            xButton.classList.add("_button", "rmv-btn");
            xButton.dataset.action = "remove";
            xButton.innerHTML = "<i class=\"fa fa-times\" />";
            xButton.addEventListener("click", removeTodo);
    
        todoDiv.appendChild(todoContent);
        todoDiv.appendChild(xButton);
        todoList.appendChild(todoDiv);

        input.value = "";
    }
};


const crossTodo = function() {
    this.classList.add("todo-crossed");
    this.dataset.action = "";
}

const removeTodo = function() {
    this.parentElement.remove();
}


let currentDate = document.querySelector(".current-date");
currentDate.innerHTML = new Date().toLocaleDateString();


let addButton = document.querySelector(".add-btn");
addButton.onclick = addTodo;
