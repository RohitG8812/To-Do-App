const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add(){
    if(inputBox.value === ''){
        alert("Your Must Need to Write something");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // alert("Task Completed")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // alert("Task Was Removed")
        saveData();
    }
}, false);

inputBox.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      Add();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();