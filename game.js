let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".res");
let newGame=document.querySelector(".new");

let turnO=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turnO=true;
    enableBoxes();
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
    }
}

const show=(winner) =>{
    disableboxes();
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true
        }
        box.disabled=true;
        
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2!="" && pos3 !=""){
            if(pos1 === pos2 && pos2===pos3 && pos3===pos1){
                console.log("winner",pos1);
                show(pos1);
            }
        }
    }
};

