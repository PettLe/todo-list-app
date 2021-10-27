import { currentPage } from "./render";
//import {projektit} from "./index.js";

export let pageIndex = 0;
export function indexItem() {
    const projectList = document.getElementsByClassName("li");
    for (let j = 0; j < projectList.length; j++) {
        projectList[j].addEventListener("click", function() {
            pageIndex = j;
            localStorage.setItem("pageIndex", JSON.stringify(pageIndex));
            console.log(pageIndex);
        })
    }
}

let projektit = [/*{title: "eat",
description: "so you dont die",
dueDate: "now",
priority: "high",
index: 0},

{title: "apina",
description: "gorilla",
dueDate: "marakatti",
priority: "Low",
index: 0,},

{title: "tämä on",
description: "toinen valmiiksi",
dueDate: "itselaitettu",
priority: "merkintä",
index: 1}*/];

//export let localProjects = JSON.parse(localStorage.getItem("projects")); VÄLIAIKAINEN POIS

/*let todos = localProjects[0];
let komp = localProjects[1]; VÄLIAIKAINEN POIS*/



//export let projects = [
    /*todos, komp, kokeilu VÄLIAIKAINEN POIS*/
//];

export function createTodo() {
class Todo {
    constructor(title, description, dueDate, priority, num) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.num = num;
    }
}

    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        addTodo(event);
    });

    //SUBMIT
    function addTodo(event) {
    //indexItem();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let num = currentPage;

    let newTodo = new Todo(title, description, dueDate, priority, num);
    //projects[pageIndex].push(newTodo); VÄLIAIKAINEN POIS
    projektit.push(newTodo);
    

    //localStorage.setItem("projects", JSON.stringify(projects)); VÄLIAIKAINEN POIS
    localStorage.setItem("localProjektit", JSON.stringify(projektit));
    form.reset();
    event.preventDefault();

    
}
};

//export default createTodo;