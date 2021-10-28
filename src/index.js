import {createTodo, localProjects} from "./todos.js";
import {projektit} from "./todos.js";
import "./style.css";
import renderAll, { linkkiLista, currentPage } from "./render.js"
import { pageIndex, indexItem } from "./todos.js";


/*export let projektit = [{title: "eat",
description: "so you dont die",
dueDate: "now",
priority: "high",
num: 0},

{title: "apina",
description: "gorilla",
dueDate: "marakatti",
priority: "Low",
num: 0,},

{title: "tämä on",
description: "toinen valmiiksi",
dueDate: "itselaitettu",
priority: "merkintä",
num: 1}];*/
//Checking localStorage for projects and page index
/*if (localStorage.getItem("localProjects") === null) {
    projects = [];
} else {
projects = JSON.parse(localStorage.getItem("localProjects"));
}
VÄLIAIKAINEN POIS*/
// Ei toimi ellei commenttaa pois noita. Mut ei toimi niiden kanssakaan
if (localStorage.getItem("localProjektit") === null) {
    projektit = [];
} else {
    projektit = JSON.parse(localStorage.getItem("localProjektit"));
}
//let projektit1 = projektit;


const linkCount = document.getElementsByClassName("li");
if (localStorage.getItem("pageIndex") === null || localStorage.getItem("pageIndex") > linkCount) {
    pageIndex = 0;
} else {
pageIndex = JSON.parse(localStorage.getItem("pageIndex"));
}
//console.log(linkkiLista);
//indexItem();
console.log(pageIndex);
console.log(projektit);
//console.log(currentPage);
//console.log(JSON.parse(localStorage.getItem("localProjektit")));
//console.log(projektit1);
//let projects1 = JSON.parse(localStorage.getItem("localProjects"));

renderAll(projektit);
createTodo();


/*const projectList = document.getElementsByClassName("li");
for (let j = 0; j < projectList.length; j++) {
    projectList[j].addEventListener("click", function() {
        console.log(currentPage);
    })
}*/

