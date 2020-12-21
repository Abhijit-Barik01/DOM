var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomImage1Source="images/"+randomImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomImage1Source);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImage2Source="images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2Source);

//player wining decision
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins😎";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins🤷‍♂️";
}
else{
  document.querySelector("h1").innerHTML="draw🤨"
}
