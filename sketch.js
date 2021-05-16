let database;
let car1,car2,car3,car4,car5;
let player,form,game;
let track;
let allPlayers;
let playerCount=0;
let gameState=0;
let car1_img,car2_img,car3_img,car4_img,car5_img;
let can;
let cars=[];

function preload(){
    track=loadImage("images/track.png");
    car1_img=loadImage("images/car1.png");
    car2_img=loadImage("images/car2.png");
    car3_img=loadImage("images/car3.png");
    car4_img=loadImage("images/car4.png");
    car5_img=loadImage("images/car5.png");

}

function setup(){
    can=createCanvas(displayWidth,displayHeight);

    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }

    if(gameState===2){
        game.end();
    }
}