console.log("game on");

var character = document.getElementById("character");
var block = document.getElementById("block");
var game = 1;
var currentScore = document.querySelector(".Score");
var score = 0;
let audioElement = new Audio(`SOUND.mp3`);

function jump(){
  if(character.classList != "animate"){
    character.classList.add("animate");
    // audioElement.play();
    setTimeout(function(){
      character.classList.remove("animate");
      // audioElement.play();
    },500);
  }
}

var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<40 && blockLeft>20 && characterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    audioElement.play();
    alert("u lose.");
    game = 0;
  }
},10);

function gameReset(){
  if(game == 0){
    location.reload();
    game = 1;
  }
}

var updateScore = setInterval(function(){
  if(game == 0){
    score = 0;
  } else {
    score++;
    currentScore.innerHTML = `Score: ${score}`;
  }
},100);
