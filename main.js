let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

const saveTodo = (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    li.className = "container list";
    li.innerText = input.value;
    let button = document.createElement("button");
    button.className="btn btn-sm btn-danger float-end"
    button.innerText = "X"


    li.appendChild(button);
    ul.appendChild(li);


    form.reset()

}
form.addEventListener("submit" , saveTodo);

const deleteTodo = (e) =>{
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        // if(window.confirm("Delete selected item?")){
            ul.removeChild(li)
        // }
    }

}

ul.addEventListener("click" , deleteTodo)