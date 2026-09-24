let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");
let list = document.getElementById("list");


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
        del.addEventListener("click", function(){
            ele.remove();
        })
        taskInput.value = "";
        console.log("perfect!");
    }
})