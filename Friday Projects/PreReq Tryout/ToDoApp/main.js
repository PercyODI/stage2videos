var todos = []

function RefreshToDos() {
    console.log("Refreshing ToDos");
    let pendingToDoSection = document.getElementById("pendingToDoSection");
    pendingToDoSection.innerHTML = "";

    let completedToDoSection = document.getElementById("completedToDoSection");
    completedToDoSection.innerHTML = "";

    for (var todo of todos) {
        if (todo.completed == null) {
            pendingToDoSection.innerHTML += "<div id='todo_" + todo.id + "' class='toDoItem pendingToDoItem'>" +
                "<span>" + todo.text + "</span>" +
                "</div>"
        }
        if (todo.completed != null) {
            completedToDoSection.innerHTML += "<div id='todo_" + todo.id + "' class='toDoItem completedToDoItem'>" +
                "<span>" + todo.text + "</span>" +
                "</div>"
        }
    }

    var pendingToDoElements = document.getElementsByClassName("pendingToDoItem");
    for (let pendingToDoElement of pendingToDoElements) {
        
        pendingToDoElement.onclick = function (ev) {
            let elementId = pendingToDoElement.id.replace("todo_", "")
            CompleteToDo(elementId);
        };
    }

    var completedToDoElements = document.getElementsByClassName("completedToDoItem");
    for (let completedToDoElement of completedToDoElements) {
        completedToDoElement.onclick = function (ev) {
            let elementId = completedToDoElement.id.replace("todo_", "")
            UncompleteToDo(elementId);
        };
    }
}

function AddNewToDo(text) {
    console.log("Adding ToDo");
    if(text == ""){
        return;
    }
    todos.push({
        id: Math.random().toString(36).substr(2, 9),
        text: text,
        date: new Date(),
        completed: null
    });

    RefreshToDos();
}

function CompleteToDo(id) {
    var foundTodo = todos.find(function (todo) {
        return todo.id === id
    });
    foundTodo.completed = new Date();
    RefreshToDos();
}

function UncompleteToDo(id) {
    var foundTodo = todos.find(function (todo) {
        return todo.id === id
    });
    foundTodo.completed = null;
    RefreshToDos();
}


document.getElementById("newToDoBtn").onclick = function (ev) {
    let newToDoInput = document.getElementById("newToDoInput");
    AddNewToDo(newToDoInput.value);
    newToDoInput.value = ""
}

document.getElementById("newToDoInput").onkeypress = function(e) {
    if(e.keyCode ===13){
        AddNewToDo(newToDoInput.value);
        newToDoInput.value = ""
    }
};

