var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;

var track, runner1_img, runner2_img, runner3_img, runner4_img;

function preload(){
  track = loadImage("images/track.jpg");
  runner1_img = loadImage("images/runner1.jpg");
  runner2_img = loadImage("/images/runner2.png");
  runner3_img = loadImage("images/runner3.png");
  runner4_img = loadImage("images/runner 4.jpg");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
