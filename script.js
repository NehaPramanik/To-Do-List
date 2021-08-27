var elements = [];

//Loading previous tasks
window.onload=function(){
    if(JSON.parse(localStorage.getItem("Tasks"))!=null){
        elements=JSON.parse(localStorage.getItem("Tasks"));
        display();
    }
}

//Adding new tasks
function addNewTask(){
    if(document.querySelector(".addText").value.trim()!=""){
        elements.push(document.querySelector(".addText").value.trim());
        display();
        document.querySelector(".addText").value="";
    }
} 

//Displaying updates and saving into local storage
function display(){
    document.querySelector(".list").innerHTML="";
    for(var i=0; i<elements.length; i++){
        document.querySelector(".list").innerHTML += "<div class='element'>" + elements[i] + "<img class='tickIcon' src='done.png' onclick='tick("+i+")'> <img class='dustbin' src='dustbin_icon.png' onclick='del("+i+")'></div>";
    }
    localStorage.setItem("Tasks", JSON.stringify(elements));
}

//Deleting task
function del(index){
    elements.splice(index, 1);
    display();
}

//Tick and untick
function tick(index){
    if(elements[index].includes("<strike>")){
        elements[index]=elements[index].replace("<strike>","");
        elements[index]=elements[index].replace("</strike>","");
    }
    else elements[index]="<strike>" + elements[index] + "</strike>";
    display();
}