
let gameseq=[];
let userseq=[];
let btns= ["pink","red","green","yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false)
    {
        console.log("game was started");
        started= true;
        levelup();
    }
}
);
function gameflash(btn) {
    
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
    function userflash(btn) {
    
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },250);
}
function levelup()
{
    userseq=[];
    level++;
   h2.innerText=`level ${level}`;
   let randomidx =Math.floor(Math.random()*3);
    let randcolor = btns[randomidx];
    let randBtn=document.querySelector(`.${randcolor}`);
    // console.log(randomidx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameseq.push(randcolor);
    console.log(gameseq);
   gameflash(randBtn);
}
function checkans(idx) {
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelup,1000);
        }
    }
    else{
        
        h2.innerHTML=`Gameover!  your score was <b>${level}</b> <br> highestscore is ${highestscore(level)} press any key to restart`;
          document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        
    }
}
let highestscores=0;
function highestscore(level){
    
    if(level>highestscores){
    highestscores=level;
    return highestscores;
    }
    else{
        return highestscores;
    }
}
function btnPress(){
    
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  checkans(userseq.length-1);
}
let allbtns =document.querySelectorAll(".btn");
 for (  btn of allbtns) {
    btn.addEventListener("click", btnPress );
}
function reset(){
    level=0;
    started=false;
    userseq=[];
    gameseq=[];
}
