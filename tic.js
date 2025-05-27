let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#message")

let turnO = true;


const winPattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const innableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};
const resetGame = ()=>{
    turnO = true;
    innableBox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.style.color = 'green'
            box.innerText ="O";
            turnO=false;
        }else{
            box.style.color = 'red'
            box.innerText ="X";
            turnO=true;
        }
     box.disabled = true;
     checkWinner();
    })
    
});

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showTie =()=>{
    msg.innerText= `Match is Tie`;
    disableBox();
    msgContainer.classList.remove("hide");}

const showWinner = (winner)=>{
    msg.innerText= `The Winner is : ${winner}`;
    disableBox();
    msgContainer.classList.remove("hide");
};



let checkWinner = ()=>{

    for(let pattern of winPattern){
        
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
            
                showWinner(pos1Val);
                return;
            }
       }
       
    }
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false; 
        }
    });

    if (allFilled) {
        showTie();
    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener('click',resetGame);