import {pageIndex} from "./todos";

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
    let linkkiLista = [];
    if (localStorage.getItem("localLinkit") === null) {
        linkkiLista = ["Default"];
    } else {
    linkkiLista = JSON.parse(localStorage.getItem("localLinkit"));
    }

    const links = document.createElement("ul");
    links.classList.add("links");

    for (let g = 0; g < linkkiLista.length; g++) {
        const linkDiv = document.createElement("div");
        linkDiv.id = "linkDiv";
        linkDiv.dataset.index = g;
        const link = document.createElement("li");
        link.classList.add("li");
        link.innerHTML = linkkiLista[g];
        link.addEventListener("click", function() {
            location.reload();
            currentPage = g;
            localStorage.setItem("pageIndex", JSON.stringify(currentPage));
            let filteredArray = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i].num == JSON.parse(localStorage.getItem("pageIndex"))) {
                    filteredArray.push(array[i])}}
            renderLink(filteredArray);
        })
            linkDiv.dataset.index = g;
            const trashBtn = document.createElement("p");
            trashBtn.id = "trashBtn";
            trashBtn.textContent = "close";
                trashBtn.addEventListener("click", function() {
                    let r = confirm("Are you sure?");
                    if (r == true) {
                      linkkiLista.splice(linkDiv.dataset.index, 1);
                      localStorage.setItem("localLinkit", JSON.stringify(linkkiLista));

                      for (let i = 0; i < array.length; i++)
                      if (array[i].num == linkDiv.dataset.index) {
                         array.splice(i,1);
                         i--;
                      }
                      for (let i = 0; i < array.length; i++) {
                      if (array[i].num > linkDiv.dataset.index) {
                        array[i].num -= 1;}
                    }

                      localStorage.setItem("localProjektit", JSON.stringify(array));
                      console.log(linkDiv.dataset.index);
                      console.log(array);
                      location.reload();
                    } else {
                        return;
                    }
            });

        linkDiv.appendChild(link);
        linkDiv.appendChild(trashBtn);
        links.appendChild(linkDiv);
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
        linkkiLista.push(userInput);
        localStorage.setItem("localLinkit", JSON.stringify(linkkiLista));
        location.reload();
        
})
    navTitle.appendChild(links);

    const navFooter = document.createElement("div");
    navFooter.innerHTML = "&copy; Petteri Leino, 2021";
    nav.appendChild(navFooter);

    const content = document.body;   
    content.insertBefore(nav, content.firstChild);
}

//RENDER TODO
export function renderTodo(array) {
    const todoDiv = document.createElement("div");
    todoDiv.id = "todoDiv";

    let fullArray = array.map((_arrayElement) => Object.assign({}, _arrayElement));
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].num == JSON.parse(localStorage.getItem("pageIndex"))) {
            filteredArray.push(array[i])}}

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
            cardExpand.textContent = "expand_more";

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
                    for (let c = 0; c < fullArray.length; c++) {
                    if (this.parentElement.parentElement.childNodes[0].textContent == fullArray[c].title) {
                        fullArray.splice(c, 1);
                    }}

                    localStorage.setItem("localProjektit", JSON.stringify(fullArray));
                        trashButton(fullArray)
                        console.log(JSON.parse(localStorage.getItem("localProjektit")));
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
        const allText = document.createElement("div");
        allText.id = "allText";
        const h2Text = document.createElement("h2");
        const linkit = JSON.parse(localStorage.getItem("localLinkit"));
        if (linkit == null) {
            h2Text.textContent = "Default";
        } else {
        h2Text.textContent = linkit[pageIndex];
        }
        const frontTextDiv = document.createElement("div");
        frontTextDiv.id = "frontText";
        const frontText = document.createElement("p");
        frontText.innerHTML = "Welcome! <br> Here you can add task to-do on the list. <br> Click the button to show more information!";
        const content = document.getElementById("content");
        allText.appendChild(frontText);
        allText.appendChild(h2Text);
        frontTextDiv.appendChild(allText);
        content.appendChild(frontTextDiv);
    }

    export function renderLink(array) {
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