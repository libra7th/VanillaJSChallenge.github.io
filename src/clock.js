const h1Clock = document.querySelector(".h1-title");

function handleTimer() 
{
    const dtNow = new Date();
    const hours = dtNow.getHours();
    const minutes = dtNow.getMinutes();
    const seconds = dtNow.getSeconds();
    h1Clock.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

setInterval(handleTimer, 1000);