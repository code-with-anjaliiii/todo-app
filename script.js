let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");
let list = document.getElementById("list");
let tasks = [];

let savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
savedTasks.forEach(function(task) {
    let ele = document.createElement("li");
        let del = document.createElement("button");
        del.textContent = "Delete";
        ele.textContent = task;
        ele.className = "task";
        list.appendChild(ele);
        ele.appendChild(del);
        del.addEventListener("click", function(){
            ele.remove();
            updateStorage();
        })
});
addButton.addEventListener("click", function () {
    let task = taskInput.value;
    if (task === "") {
        alert("Field is blank");
    } 
      else {
        let ele = document.createElement("li");
        let del = document.createElement("button");
        del.textContent = "Delete";
        ele.textContent = task;
        ele.className = "task";
        list.appendChild(ele);
        ele.appendChild(del);
        updateStorage();
        del.addEventListener("click", function(){
            ele.remove();
            updateStorage();
        })
        taskInput.value = "";
        console.log("perfect!");
    }
})
function updateStorage(){
    let allTasks = [];
    let liItems = list.querySelectorAll("li");
    liItems.forEach(function(li){
        allTasks.push(li.firstChild.textContent);
    });
  localStorage.setItem("myTasks", JSON.stringify(allTasks));
}