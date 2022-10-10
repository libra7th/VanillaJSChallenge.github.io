const IMAGES = ['hd-wallpaper-1657175_1920.jpg',
'wallpapers-743766.jpg',
'water-surface-7494189_1920.jpg',
'won-743764.jpg'];

function setImageBackground(imgNumber) 
{
    // const imgBackground = new Image();
    // imgBackground.src = `res/${IMAGES[imgNumber]}`;
    // imgBackground.classList.add("bgimg");
    // document.body.appendChild(imgBackground);

	document.body.style.backgroundImage = `url('res/${IMAGES[imgNumber]}')`;
}

function getNumberRandom() 
{
    const numResult = Math.floor(Math.random() * IMAGES.length);
    return numResult;
}

setImageBackground(getNumberRandom());