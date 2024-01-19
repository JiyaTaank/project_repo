let userscr=document.querySelector("#u");
let compscr=document.querySelector("#c");
let restart=document.querySelectorAll(".button");
let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let getcompchoice=()=>{
    let options=["rock","paper","scissor"];
   let randomidx=Math.floor(Math.random()*3);
   if(options[randomidx]==="rock"){
    document.querySelector("#rock").style.opacity="50%";
    document.querySelector("#paper").style.opacity="100";
    document.querySelector("#scissor").style.opacity="100";

   }
   else if(options[randomidx]==="paper"){
    document.querySelector("#paper").style.opacity="50%";
    document.querySelector("#rock").style.opacity="100%";
    document.querySelector("#scissor").style.opacity="100%";
   }
   else{
    document.querySelector("#scissor").style.opacity="50%";
    document.querySelector("#paper").style.opacity="100%";
    document.querySelector("#rock").style.opacity="100%";
   }

   return options[randomidx];
}

let drawgame=()=>{
    console.log("Draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="#00100B";
}

let showWinner=(userwin)=>{
    if(userwin==true){
        console.log("you win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        userscore++;
        userscr.innerText=userscore;

    }else {
        console.log("you lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        compscore++;
        compscr.innerText=compscore;
        }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        let userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});


let playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    let compchoice= getcompchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
       drawgame();
    }else{

        let userwin=true;

        if(userchoice==="rock"){
           userwin= compchoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            userwin= compchoice==="scissor"? false:true;
        }else{
            userwin= compchoice==="rock"? false:true;
        }

        showWinner(userwin);

    }
    restart.addEventListener("click",() =>{
        userscore=0;
        compscore=0;
        userscr.innerText=0;
        compscr.innerText=0;
       
    })

}

