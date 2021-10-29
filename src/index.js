import {createTodo} from "./todos.js";
import "./style.css";
import renderAll from "./render.js"
import { pageIndex } from "./todos.js";

let projektit;
if (localStorage.getItem("localProjektit") === null) {
    projektit = [];
} else {
    projektit = JSON.parse(localStorage.getItem("localProjektit"));
}

const linkCount = document.getElementsByClassName("li");
if (localStorage.getItem("pageIndex") === null || localStorage.getItem("pageIndex") > linkCount) {
    pageIndex = 0;
    localStorage.setItem("pageIndex", JSON.stringify(pageIndex));
} else {
pageIndex = JSON.parse(localStorage.getItem("pageIndex"));
}
(function runAll() {
renderAll(projektit);
createTodo(projektit);
})();