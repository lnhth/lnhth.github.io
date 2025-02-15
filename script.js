//book:
const leftBtn = document.querySelector('#leftButton');
const rightBtn = document.querySelector('#rightButton');
const book = document.querySelector('.book');
const page1 = document.querySelector('#p1');
const page2 = document.querySelector('#p2');
const page3 = document.querySelector('#p3');

let currentLocation = 1;
let nbPages = 3;
let maxLocation = nbPages + 1;

function leftBtnCursorD() {
    leftBtn.style.cursor = "default";
}
function leftBtnCursorP() {
    leftBtn.style.cursor = "pointer";
}

function rightBtnCursorD() {
    rightBtn.style.cursor = "default";
}
function rightBtnCursorP() {
    rightBtn.style.cursor = "pointer";
}

function openBook() {
    book.style.transform = "translateX(50%)";
    if (window.innerWidth <= 600) {
        leftBtn.style.transform = "translateX(-380%)";
        rightBtn.style.transform = "translateX(380%)";
    }
    else {
        leftBtn.style.transform = "translateX(-750%)";
        rightBtn.style.transform = "translateX(750%)";
    }
}

function closeBook(start) {
    if (start) {
        book.style.transform = "translateX(0%)";
    }
    else {
        book.style.transform = "translateX(100%)";
    }
    leftBtn.style.transform = "translateX(0)";
    rightBtn.style.transform = "translateX(0)";
}

function nextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
            openBook();
            leftBtn.style.opacity = 1;
            setTimeout(() => {
                page1.style.zIndex = 1;
                page2.style.zIndex = 2;
                page3.style.zIndex = 1;
            }, 500);
            leftBtnCursorP();
            page1.classList.add("flipped");
            break;
            case 2:
            page2.classList.add("flipped");
            setTimeout(()=>{
                page1.style.zIndex = 1;
                page2.style.zIndex = 1;
                page3.style.zIndex = 2;
            }, 300);
            break;
            case 3:
            closeBook(false);
            rightBtnCursorD();
            rightBtn.style.opacity = 0;
            page3.classList.add("flipped");
            page3.style.zIndex = 3;
            break;
            default:
            throw new Error("Unknown");
        }
        currentLocation++;
    }
}

function previousPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
            closeBook(true);
            leftBtnCursorD();
            leftBtn.style.opacity = 0;
            page1.classList.remove("flipped");
            page1.style.zIndex = 4;
            break;
            case 3:
            page2.classList.remove("flipped");
            page2.style.zIndex = 3;
            page3.style.zIndex = 2;
            break;
            case 4:
            openBook();
            rightBtnCursorP();
            rightBtn.style.opacity = 1;
            page3.classList.remove("flipped");
            page3.style.zIndex = 3;
            break;
            default:
            throw new Error("Unknown");
        }
        currentLocation--;
    }
}

leftBtn.addEventListener("click", previousPage);
rightBtn.addEventListener("click", nextPage);

//front page 1:
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const gif = document.querySelector('#gif');
const text = document.querySelector('#q-f1');
const subText = document.querySelector('#subText-f1');

const messages = [
    "pretty please??" ,
    "woowwww" ,
    "you don't love me :(",
    "really?"
];
let messageIndex = 0;

function YES() {
    gif.src = "img/yay.gif";
    gif.style.height = "60%";
    text.textContent = "YAYYY!!";
    text.style.transform = "scale(120%)";
    subText.textContent = "this is us btw <3";
    yesBtn.remove();
    noBtn.remove();
}

function NO() {
    let yesBtnCurrentWidth = parseFloat(window.getComputedStyle(yesBtn).width);
    let yesBtnCurrentHeight = parseFloat(window.getComputedStyle(yesBtn).height);
    let yesBtnCurrentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    let noBtnCurrentWidth = parseFloat(window.getComputedStyle(noBtn).width);
    let noBtnCurrentHeight = parseFloat(window.getComputedStyle(noBtn).height);
    let noBtnCurrentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);

    yesBtn.style.width = (yesBtnCurrentWidth * 1.25) + "px";
    yesBtn.style.height = (yesBtnCurrentHeight * 1.25) + "px";
    yesBtn.style.fontSize = (yesBtnCurrentSize * 1.25) + "px";
    noBtn.style.width = (noBtnCurrentWidth * 0.85) + "px";
    noBtn.style.height = (noBtnCurrentHeight * 0.85) + "px";
    noBtn.style.fontSize = (noBtnCurrentSize * 0.85) + "px";

    gif.style.height = "49%";
    gif.src = "img/nopls.gif";
    
    subText.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

yesBtn.addEventListener("click", YES);
noBtn.addEventListener("click", NO);

//back page 1:
const container = document.querySelectorAll('.container');

container.forEach(container => {
    let degrees = 0;

    container.addEventListener("click", function() {
    degrees += 180;
    container.style.transform = `rotateY(${degrees}deg)`;
    });
});