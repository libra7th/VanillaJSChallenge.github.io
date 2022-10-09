const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick()
{
	//alert(loginInput.value);
	const userName = loginInput.value;
	if ("" === userName)
	{
		alert("Please write your name.");
	}
	else if( 15 < userName.length )
	{
		alert("Input value is too long.")
	}
}

function onLoginSubmit(_event)
{
	_event.preventDefault();
	const userName = loginInput.value;
	alert(userName)
}

loginForm.addEventListener("submit", onLoginSubmit);
//loginButton.addEventListener("click", onLoginBtnClick);