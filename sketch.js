var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var car1, car2, car3 ,car4,car5;



function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacle=new Hurdles();
  obstacle.erect();
}

 

function draw(){
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}