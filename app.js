let Gameseq = [];
let Userseq = [];

let btns = ["red" , "lightgreen" , "orange" , "blueviolet"];

let started = 0;
let level = 0;

document.addEventListener("keypress", function() {
    if(started == 0) {
        console.log("game started");
        started = 1;
        levelup();
    }
})

// makes btn white flash
function gameflash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    } , 250);
}

// makes btn green flash
function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    } , 250);
}

//level up and do random flash
let h2 = document.querySelector("h2");
function levelup(){
    Userseq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    Gameseq.push(randcolor);
    console.log(Gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    if(Userseq[idx] == Gameseq[idx]){
        if(Userseq.length == Gameseq.length){
            setTimeout(levelup(), 1000);
        }
    }
    else{
        h2.innerHTML = `GAME OVER! Your SCORE was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress(){
    // console.log(this);gc
    let btn = this;
    // userflash(btn);

    usercolor = btn.getAttribute("id");
    Userseq.push(usercolor);

    checkAns(Userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress)
}

function reset(){
    started = 0;
    Userseq = [];
    Gameseq = [];
    level =  0;
}