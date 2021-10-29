import { currentPage, renderTodo, renderLink } from "./render";
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

/*if (localStorage.getItem("localProjektit") === null) {
    let projektit = [];
} else {
    let projektit = JSON.parse(localStorage.getItem("localProjektit"));
}*/

//let projektit = JSON.parse(localStorage.getItem("localProjektit"));
/*[{title: "eat",
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
index: 1}*///];

//export let localProjects = JSON.parse(localStorage.getItem("projects")); VÄLIAIKAINEN POIS

/*let todos = localProjects[0];
let komp = localProjects[1]; VÄLIAIKAINEN POIS*/



//export let projects = [
    /*todos, komp, kokeilu VÄLIAIKAINEN POIS*/
//];

export function createTodo(array) {
class Todo {
    constructor(title, description, dueDate, priority, num) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.num = num;
    }
}

    //let form = document.querySelector('form');
    let form = document.getElementById("todoForm");
    form.addEventListener('submit', addTodo) //{
       // event.preventDefault();
       // document.getElementById("todoForm").submit();
       // console.log("Korppi1");
       // location.reload();
       // addTodo(event);
       // renderLink(array);
    //});

    //SUBMIT
    function addTodo(event) {
       // event.preventDefault();
    //indexItem();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let num = pageIndex;

    let newTodo = new Todo(title, description, dueDate, priority, num);
    //projects[pageIndex].push(newTodo); VÄLIAIKAINEN POIS
    array.push(newTodo);
    
    //localStorage.setItem("projects", JSON.stringify(projects)); VÄLIAIKAINEN POIS
    localStorage.setItem("localProjektit", JSON.stringify(array));
    //location.reload();
    form.reset();
    //event.preventDefault();
    //renderLink(array);
    
}
};

//export default createTodo;