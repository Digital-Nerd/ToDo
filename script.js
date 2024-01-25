const inputBox= document.getElementById("inputBox");
const listContainer= document.getElementById("listContainer");

function addTask(){
    const task= inputBox.value;
    if(task===""){
        alert("Please enter a task");
        return;
    }
    else{
        const taskElement= document.createElement("li");
        taskElement.innerHTML= task;
        taskElement.setAttribute("id", task);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        listContainer.appendChild(taskElement);
        taskElement.appendChild(span);
        taskElement.setAttribute("onclick", "checkTask(event)");  
        span.setAttribute("onclick", "deleteTask(event)");
    }
    inputBox.value= "";
    saveData();
} 

function checkTask(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
}

function deleteTask(e){
    if(e.target.tagName==="SPAN"){
        let task= e.target.parentNode;
        listContainer.removeChild(task);
        saveData();
    }
}

function saveData(){
    localStorage.setItem("listItems", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML= localStorage.getItem("listItems");
}
loadData();