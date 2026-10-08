let count=0;

const display=document.getElementById("countDisplay");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn= document.getElementById("decrementBtn");
const resetBtn= document.getElementById("resetBtn");

function updateDisplay(){
    display.textContent = count;
    if(count>0){
        display.style.color="green";
    }else if(count<0){
        display.style.color="red";
    }else{
        display.style.color="black";
    }
}

function increment(){
    count = count+1;
    updateDisplay();
}

function decrement(){
    count = count-1;
    updateDisplay();
}

function reset(){
    count=0;
    updateDisplay();
}

incrementBtn.addEventListener("click",increment);
decrementBtn.addEventListener("click",decrement);
resetBtn.addEventListener("click",reset);

updateDisplay();