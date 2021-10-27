//import {/*localProjects*/ projektit, indexItem, pageIndex} from "./todos";

//let pageIndex = JSON.parse(localStorage.getItem("pageIndex"));

function todoForm() {
    let content = document.getElementById("content");
    let todoForm = document.createElement("form");
    todoForm.id = "todoForm";

    let title = document.createElement("input");
    title.id = "title";
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Task");

    let description = document.createElement("input");
    description.id = "description";
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "Description");

    let dueDate = document.createElement("input");
    dueDate.id = "dueDate";
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");

    const priorityOpt = ["Low", "Medium", "High"];
    let priority = document.createElement("select");
    priority.id = "priority";
    priority.setAttribute("type", "text");
    priority.setAttribute("name", "priority");
    const p = document.createElement("p");
    p.textContent = "Priority:";

    for (var i = 0; i < priorityOpt.length; i++) {
        var option = document.createElement("option");
        option.value = priorityOpt[i];
        option.text = priorityOpt[i];
        priority.appendChild(option);
    }

    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Add +");
    submitBtn.id = "submitBtn";

    todoForm.appendChild(title);
    todoForm.appendChild(description);
    todoForm.appendChild(dueDate);
    todoForm.appendChild(p);
    todoForm.appendChild(priority);
    todoForm.appendChild(submitBtn);
    content.appendChild(todoForm);
}
/*
    //TEMPORARY CLEAR BUTTON
    function clearBtn() {
    const content = document.getElementById("content");
    let clearBtn = document.createElement("button");
    clearBtn.id = "clearBtn";
    clearBtn.textContent = "Clear";
    clearBtn.addEventListener("click", function() {
        localStorage.clear();
        renderTodo();
    });
    content.appendChild(clearBtn);
}
*/
function header() {
    const header = document.createElement("div");
    header.id = "header";
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "To-Do List";
    header.appendChild(headerTitle);

    const content = document.body;
    content.insertBefore(header, content.firstChild);
}

//NAV BAR
export let currentPage = 0;
function nav(array) {


    const nav = document.createElement("div");
    nav.id = "nav";
    const navTitle = document.createElement("h3");
    navTitle.textContent = "Projects:";
    nav.appendChild(navTitle);

    //LINKS
    /*let linkList = ["Default", "Testi1", "Kokeilu5"];
    if (localStorage.getItem("linkList1000") === null) {
        linkList = ["Default", "Testi1", "Kokeilu5"];
    } else {
    linkList = JSON.parse(localStorage.getItem("linkList1000"));
    } VÄLIAIKAINEN POIS*/

    let linkkiLista = [];
    if (localStorage.getItem("localLinkit") === null) {
        linkkiLista = ["Default"];
    } else {
    linkkiLista = JSON.parse(localStorage.getItem("localLinkit"));
    }

    //const linkit = JSON.parse(localStorage.getItem("linkList1000"));
    const links = document.createElement("ul");
    links.classList.add("links");

    for (let g = 0; g < linkkiLista.length; g++) { //linkkiLista = linkList
        const link = document.createElement("li");
        link.dataset.index = g;
        link.classList.add("li");
        link.innerHTML = linkkiLista[g];
        link.addEventListener("click", function() {
            currentPage = g;
            let filteredArray = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i].num == currentPage) {
                    filteredArray.push(array[i])}}
            renderLink(filteredArray);
        })
        links.appendChild(link);
    }

    navTitle.appendChild(links);

    //CREATE NEW PROJECT
    const createNew = document.createElement("p");
    createNew.id = "createNew";
    createNew.textContent = "New Project +";
    navTitle.appendChild(createNew);

    createNew.addEventListener("click", function() {
        let userInput = prompt("Project name?");
        const link = document.createElement("li");
        link.classList.add("li");
        link.textContent = userInput;
        navTitle.appendChild(links);
        links.appendChild(link);

        linkkiLista.push(userInput);  //linkkiLista = linkList
        //localStorage.setItem("linkList1000", JSON.stringify(linkList)); VÄLIAIKAINEN POIS
        localStorage.setItem("localLinkit", JSON.stringify(linkkiLista));

})
    navTitle.appendChild(links);

    const navFooter = document.createElement("div");
    navFooter.innerHTML = "&copy; Petteri Leino, 2021";
    nav.appendChild(navFooter);

    const content = document.body;   
    content.insertBefore(nav, content.firstChild);
}

export function renderTodo(array) {
    const todoDiv = document.createElement("div");
    todoDiv.id = "todoDiv";

    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].num == currentPage) {
            filteredArray.push(array[i])}}

        console.log(filteredArray);
        console.log(currentPage)
    for (let i = 0; i < filteredArray.length; i++) {

            const cardElement1 = document.createElement("div");
            cardElement1.classList.add("cardElem");
            const cardElement2 = document.createElement("div");
            cardElement2.classList.add("cardElem");
            const cardElement3 = document.createElement("div");
            cardElement3.classList.add("cardElem");
            const cardElement4 = document.createElement("div");
            cardElement4.classList.add("cardElem");
            const cardElement5 = document.createElement("div");
            cardElement5.classList.add("cardElem");

            const cardTitle = document.createElement("h3");           
            const cardDescription = document.createElement("p");    
            const cardDueDate = document.createElement("p");     
            const cardPriority = document.createElement("p");

            const cardExpand = document.createElement("button");
            cardExpand.classList.add("expandBtn");
            cardExpand.textContent = "Open";

            for (let item in filteredArray[i]) {
                cardTitle.textContent = (filteredArray[i].title);
                cardDescription.textContent = (filteredArray[i].description);
                cardDueDate.textContent = (filteredArray[i].dueDate);
                cardPriority.innerHTML = "Priority: " + "<br>" + (filteredArray[i].priority);
            }

            const todo = document.createElement('div');
            todo.id = "todoCard";
            todo.dataset.index = i;
            const content = document.getElementById("content");

            //DELETE BUTTON
            const trashBtn = document.createElement("p");
            trashBtn.id = "trashBtn";
            trashBtn.textContent = "delete";
                trashBtn.addEventListener("click", function() {
                    array.splice(todo.dataset.index, 1);
                    localStorage.setItem("localProjektit", JSON.stringify(array));
                        trashButton(array);
            });
            
            cardElement1.appendChild(cardTitle);
            cardElement2.appendChild(cardDescription);
            cardElement3.appendChild(cardDueDate);
            cardElement4.appendChild(cardPriority);
            cardElement5.appendChild(trashBtn);

          const visibleCard = document.createElement("div");
          visibleCard.id = "todoMain";
          visibleCard.appendChild(cardElement1);
          visibleCard.appendChild(cardElement3);
          visibleCard.appendChild(cardExpand);
          visibleCard.appendChild(cardElement5);

          const hiddenCard = document.createElement("div");
          hiddenCard.id = "hiddenCard";
          hiddenCard.appendChild(cardElement2);
          hiddenCard.appendChild(cardElement4);

            function classToggle() {
                todo.classList.toggle("visible");
                if (!todo.contains(hiddenCard)) {
                todo.appendChild(hiddenCard);
                } else {
                    todo.removeChild(hiddenCard);
                } 
              }
            cardExpand.addEventListener("click", classToggle, false)
            todo.appendChild(visibleCard);
            todoDiv.insertBefore(todo, todoDiv.firstChild);           
            content.appendChild(todoDiv);
           //}
        }
    }

    function trashButton(array) {
        const content = document.getElementById("content");
        content.innerHTML = "";
            frontText();
            todoForm();
            renderTodo(array);
    }

    function frontText() {
        const frontTextDiv = document.createElement("div");
        frontTextDiv.id = "frontText";
        const frontText = document.createElement("p");
        frontText.innerHTML = "Welcome! <br> Here you can add task to-do on the list. <br> Click the button to show more information!";
        const content = document.getElementById("content");
        frontTextDiv.appendChild(frontText);
        content.appendChild(frontTextDiv);
    }

    function renderLink(array) {
        const content = document.getElementById("content");
        content.innerHTML = "";
         frontText();
         todoForm();
         renderTodo(array);
    }


export default function renderAll(array) {
    nav(array);
    header();
    frontText();
    todoForm();
    renderTodo(array);
}