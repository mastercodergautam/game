// generation of random value
var y=Math.floor(Math.random()*10+1) 
guess=1;
function submit(){
username=localStorage.getItem("player_name");

// count of attempts
var x=document.getElementById("guessField").value ;
// until hit
if(x==y){
    alert("CONGRATULATIONS!!!"+username+" YOU GUSSED IT RIGHT IN "
    +guess+" GUESS");
    guess=1;
}
else if(x>y){
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    

}
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
    
}
}
function playAgain(){
    y=Math.floor(Math.random()*10+1);
}
// function for the number sent by the user