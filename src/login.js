///////////////////////////////////////////////////////////////
// variable(view object) and handler
const formLogin	= document.querySelector(".form-login");
const inputLogin= formLogin.querySelector(".input-login");
const pGreeting = document.querySelector(".p-greeting");

const USER_LS = "currentUser",
    CSS_HIDDEN = "hidden";

function handleSubmit(_event) 
{
	// 기본 동작 막기
	_event.preventDefault();
	const currentValue = inputLogin.value;
	localStorage.setItem(USER_LS, currentValue);
	setStateGreeting(currentValue);
}
formLogin.addEventListener("submit", handleSubmit);
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// main process and function
function mainLogin() 
{
	const currentUser = localStorage.getItem(USER_LS);
	if ( null === currentUser )
		setStateInput();
	else
		setStateGreeting(currentUser);
}

function setStateInput() 
{
    formLogin.classList.remove(CSS_HIDDEN);
	pGreeting.classList.add(CSS_HIDDEN);
}

function setStateGreeting(_name)
{
    formLogin.classList.add(CSS_HIDDEN);
    pGreeting.classList.remove(CSS_HIDDEN);
    pGreeting.innerText = `Welcome ${_name}`;
}

mainLogin();
///////////////////////////////////////////////////////////////