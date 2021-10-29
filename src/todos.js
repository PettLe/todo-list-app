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
    let form = document.getElementById("todoForm");
    form.addEventListener('submit', addTodo)

    //SUBMIT
    function addTodo(event) {
       // event.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let num = pageIndex;

    let newTodo = new Todo(title, description, dueDate, priority, num);
    array.push(newTodo);   
    localStorage.setItem("localProjektit", JSON.stringify(array));
    form.reset();   
}
};