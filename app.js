let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow" , "green" , "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false)
        {
            started = true;
            levelUp();
        }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },150);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button is chosen here
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx)
{
    
    if(userSeq[idx] == gameSeq[idx])
        {
            if(userSeq.length === gameSeq.length)
                {
                   setTimeout(levelUp,1000);
                }
        }
        else {
            h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br>Press any key to start again.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function()
            {
                document.querySelector("body").style.backgroundColor = "white";
            },150);
            reset();
        }
    
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns)
    {
        btn.addEventListener("click", btnPress);
    }

function btnPress()
    {
        let btn = this;
        userFlash(btn);
    
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length - 1);
    }

function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}