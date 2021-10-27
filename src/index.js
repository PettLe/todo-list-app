import {createTodo, localProjects, /*projektit*/} from "./todos.js"
import {projects, todos, komp} from "./todos"
import "./style.css";
import renderAll, { linkkiLista } from "./render"
import { pageIndex, indexItem } from "./todos.js";


let projektit = [{title: "eat",
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
num: 1}];
//Checking localStorage for projects and page index
/*if (localStorage.getItem("localProjects") === null) {
    projects = [];
} else {
projects = JSON.parse(localStorage.getItem("localProjects"));
}
VÄLIAIKAINEN POIS*/
// Ei toimi ellei commenttaa pois noita. Mut ei toimi niiden kanssakaan
/*if (localStorage.getItem("localProjektit") === null) {
    projektit = [];
} else {
    projektit = JSON.parse(localStorage.getItem("localProjektit"));
}*/


indexItem();

const linkCount = document.getElementsByClassName("li").length;
if (localStorage.getItem("pageIndex") === null || localStorage.getItem("pageIndex") > linkCount) {
    pageIndex = 0;
} else {
pageIndex = JSON.parse(localStorage.getItem("pageIndex"));
}
//console.log(linkkiLista);
//console.log(pageIndex);
//console.log(JSON.parse(localStorage.getItem("localProjektit")));
console.log(projektit);

//let projects1 = JSON.parse(localStorage.getItem("localProjects"));

renderAll(projektit);
createTodo();
