//const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick()
{
	alert("login")
}

loginButton.addEventListener("click", onLoginBtnClick)