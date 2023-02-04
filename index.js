document.query
function randomDiceNum(){
    var num = Math.floor(Math.random()*6)+1;
    return num;
}
function imageSrc(num){
  var img = "images/dice"+num+".png"
  return img;
}

var imgImageSource = document.querySelectorAll("img")
var num1 = randomDiceNum();
img1 = imageSrc(num1);
imgImageSource[0].setAttribute("src",img1);
var num2 = randomDiceNum();
img2 = imageSrc(num2);
imgImageSource[1].setAttribute("src",img2);

if(num1===num2){
  document.querySelector("h1").innerHTML = "Draw";
}
else if(num1>num2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(num1<num2){
  document.querySelector("h1").innerHTML = "Player2 wins";
}
