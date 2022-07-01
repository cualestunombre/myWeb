const toDo = document.querySelector(".to_do");
const toDoList=document.querySelector(".to-do__list");
function handleSubmit(event){
    let toDos = JSON.parse(localStorage.getItem("toDo"));
    event.preventDefault();
    input=this.querySelector("input");
    if (toDos.length<=10){
        value=input.value;
        input.value="";
        paintToDo(value);
        saveToDos(value);
    }
    else{
        alert("최대 11개까지만 작성하실 수 있어요.");
    }
}
    

function handleDelete(event){
    const li = event.target.parentElement.parentElement;
    const value = li.innerText;
    let index=0;
    if (li.tagName=="LI"){
        let deleteToDoList=JSON.parse(localStorage.getItem("toDo"));
        for (i in deleteToDoList){
            console.log("2");
            if (deleteToDoList[i]==value){
                index=i;
            }
        }
        deleteToDoList.splice(index,1);
        localStorage.setItem("toDo",JSON.stringify(deleteToDoList));
        li.remove();
    }
}


function saveToDos(value){
    let toDoarr=JSON.parse(localStorage.getItem("toDo"));
    if (toDoarr==null){
        toDoarr=[value];
        localStorage.setItem("toDo",JSON.stringify(toDoarr));
    }
    else{
        toDoarr.push(value);
        localStorage.setItem("toDo",JSON.stringify(toDoarr));
    }
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("span");
    const text = document.createElement("span");
    li.classList.toggle("recome");
    text.innerText="삭제";
    button.appendChild(text);
    button.className="button";
    button.classList.add("small-button");
    li.appendChild(span);
    span.innerText=newTodo;
    span.className="todo_text";
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",handleDelete);
}
toDo.addEventListener("submit",handleSubmit);

const toDoLoad = JSON.parse(localStorage.getItem("toDo"));
if (toDoLoad!=null && toDoLoad!=""){
    for (i in toDoLoad){
        paintToDo(toDoLoad[i]);
    }
}