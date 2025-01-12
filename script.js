const box = document.getElementById("box");
const lsc = document.getElementById("list-container");

function addtask(){
    if(box.value === ''){
        alert("please enter a task");
    }
    else{
        let ts = document.createElement("li");
        ts.innerHTML = box.value;
        lsc.appendChild(ts);
        let sp = document.createElement("span");
        sp.innerHTML = "\u00d7";
        ts.appendChild(sp);
    }
    box.value = "";
    saveData();
}

lsc.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function saveData(){
    localStorage.setItem("data", lsc.innerHTML);
}

function showData(){
    lsc.innerHTML  = localStorage.getItem("data"); 
}
showData();

