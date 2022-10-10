const formTodo	= document.querySelector(".form-todo"),
    inputTodo	= formTodo.querySelector("input"),
    listTodo	= document.querySelector(".ul-todo");

const	TODOS_LS= 'toDos';
let		liTodos	= [];

function handleToDoSubmit(_event) 
{
    _event.preventDefault();
    const currentValue = inputTodo.value;
    loadTodos(currentValue);
    inputTodo.value = "";
}
formTodo.addEventListener("submit", handleToDoSubmit);


function deleteToDo(_event) 
{
    const btnClick = _event.target;
    const liItem = btnClick.parentNode;
    listTodo.removeChild(liItem);
    const cleanToDos = liTodos.filter(function(toDo) 
	{
        return toDo.id !== parseInt(liItem.id);
    });
    liTodos = cleanToDos;
    saveToDos();
}

function saveToDos() 
{
    localStorage.setItem(TODOS_LS, JSON.stringify(liTodos));
}

function loadTodos(_text) 
{
    const liItem	= document.createElement("li");
    const btnDel	= document.createElement("button");
    const spanTxt	= document.createElement("span");
    
	const numId		= liTodos.length + 1;
    
	btnDel.classList.add("btnStyle");
    btnDel.innerText = "\u{274C}";
    btnDel.addEventListener("click", deleteToDo);
    spanTxt.innerText = _text;
    liItem.appendChild(spanTxt);
    liItem.appendChild(btnDel);
    liItem.id = numId;
    listTodo.appendChild(liItem);
    const toDoObj = {
        text: _text,
        id: numId
    };
    liTodos.push(toDoObj);
    saveToDos();
}

const loadedToDos = localStorage.getItem(TODOS_LS);
if ( null !== loadedToDos )
{
    const jsonTodos = JSON.parse(loadedToDos);
    jsonTodos.forEach((toDo) =>
	{
        loadTodos(toDo.text);
    });
}
