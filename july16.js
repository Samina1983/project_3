
let rondomNum=Math.trunc(Math.random()*100)+1;
console.log(rondomNum);

let currentScore=10;
let historyHighScore=0;

let checkbtn=document.querySelector('.checkbtn');
let reset=document.querySelector('.resetbtn');
let msg=document.querySelector('.congrats');
let userInput=document.querySelector('input');
let currntScore=document.querySelector('.crrntscore');
let reveal=document.querySelector('.reveal');
let highscore=document.querySelector('.highscore');



const guesses= [];

function printList() {
let text = "<ul >";
guesses.forEach(myFunction);
text += "</ul>";

document.getElementById("list").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

}


checkbtn.addEventListener('click',function(){


if(currentScore>0){
    if(Number(userInput.value)===rondomNum){
        guesses.push(userInput.value);
        document.body.style.backgroundColor = "pink";
        msg.textContent='Congrats!  you win the game!';
        msg.style.color='green';
        msg.style.fontSize='44px';
        reveal.textContent="The number was " + rondomNum;
        
       if (currentScore>historyHighScore){
        historyHighScore=currentScore;
        highscore.textContent=String(historyHighScore);
       } 
        
    }
    else {
     

        if(Number(userInput.value)>rondomNum){
            console.log(userInput.value);   
            guesses.push(userInput.value);
            msg.textContent='Wrong number! too high! try  smaller value';
            msg.style.color='red';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);

        }
        else if (Number(userInput.value)<rondomNum) {
            console.log(userInput.value);   
            guesses.push(userInput.value);
            msg.textContent='Wrong number! too low! try  greater value';
            msg.style.color='red';
            msg.style.fontSize='34px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
        }
        else {
            msg.textContent='Enter in a number between 1 and 100';
            msg.style.color='red';
            msg.style.fontSize='34px';
        }

    }
    
}
else {
    alert("game is over, you ran out of guesses");  

}

reset.addEventListener('click', function(){
    currentScore = 10;
    document.body.style.backgroundColor = "";
    guesses.length=(0);
    printList();
    reveal.textContent = "";
    msg.textContent='';
    currntScore.textContent=String(currentScore);
    rondomNum=Math.trunc(Math.random()*100)+1;
    console.log(rondomNum);
    userInput.value = "";
})
console.log(guesses.length);
printList();
}
)



