//const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick()
{
	//console.log(loginInput.value);
	alert(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);