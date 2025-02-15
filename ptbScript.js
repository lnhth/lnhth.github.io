//ptb:
const ptb = document.querySelector('.ptb');
const img1 = "img/firstPic.PNG";
const img2 = "img/NYEptb.PNG";
const ptbText = document.querySelector('#ptbText2');
const text1 = "31 dec. 2024";
const text2 = "31 dec. 2025";

ptb.addEventListener("click", ()=>{
    if(ptb.getAttribute('src') === img1){
        ptb.setAttribute('src', img2);
    }
    else {
    ptb.setAttribute('src', img1);
    }
    if(ptbText.innerHTML === text1){
        ptbText.innerHTML = text2;
    }
    else {
        ptbText.innerHTML = text1;
    }
});

//letter:
const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const letter = document.querySelector('.letter');
const pocket = document.querySelector('.pocket');

envelope.addEventListener("click", ()=>{
    if(flap.classList.contains('close')){
        openLetter();
    }
    else{
        closeLetter();
    }
});

function openLetter() {
    let rightBtn = document.querySelector('#rightButton');
    let leftBtn = document.querySelector('#leftButton');
    flap.style.backfaceVisibility = "visible";
    flap.classList.remove('close');
    flap.classList.add('open');
    letter.classList.remove('close');
    letter.classList.add('open');
    pocket.classList.remove('close');
    pocket.classList.add('open');
    envelope.classList.remove('close');
    envelope.classList.add('open');
    rightBtn.addEventListener("click", ()=>{
        setTimeout(()=>{
            flap.style.backfaceVisibility = "hidden";
        }, 150);
    });
    leftBtn.addEventListener("click", ()=>{
        setTimeout(()=>{
            flap.style.backfaceVisibility = "visible";
        }, 200);
    });
}
function closeLetter() {
    flap.classList.remove('open');
    flap.classList.add('close');
    letter.classList.remove('open');
    letter.classList.add('close');
    pocket.classList.remove('open');
    pocket.classList.add('close');
    envelope.classList.remove('open');
    envelope.classList.add('close');
    setTimeout(()=>{
        flap.style.backfaceVisibility = "hidden";
    }, 500);
}

//scratch:
let canvas = document.querySelector('.canvas');
let context = canvas.getContext('2d');

const init = ()=>{
    context.fillStyle = "rgb(176, 59, 59)";
    context.fillRect(0, 0, 300, 150);
};

let mouseX = 0;
let mouseY = 0;
let isDragged = false;

let events = {
    mouse:{
        down: "mousedown", 
        move: "mousemove",
        up: "mouseup",
    }, 
    touch:{
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

const isTouchDevice = ()=>{
    try {
        document.createEvent('TouchEvent');
        deviceType = "touch";
        return true;
    } catch (e) {
    deviceType = "mouse";
    return false;
    }
};

console.log(isTouchDevice());

let rectLeft = canvas.getBoundingClientRect().left;
let rectTop = canvas.getBoundingClientRect().top;

const getXY = (e)=>{
    mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
    mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
};

isTouchDevice();
canvas.addEventListener(events[deviceType].down, (event)=>{
    isDragged = true;
    getXY(event);
    scratch(mouseX, mouseY);
    canvas.style.cursor = "grabbing";
});

canvas.addEventListener(events[deviceType].move, (event)=>{
    if (!isTouchDevice()){
        event.preventDefault();
    }
    if(isDragged){
        getXY(event);
        scratch(mouseX, mouseY);
    }
});

canvas.addEventListener(events[deviceType].up, ()=>{
    isDragged = false;
    canvas.style.cursor = "grab";
});

canvas.addEventListener("mouseleave", ()=>{
    isDragged = false;
});

const scratch = (x, y)=>{
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 12, 0, 2 * Math.PI);
    context.fill();
};

window.onload = init();