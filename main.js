var bg_array = ['bg1.jpeg','bg2.jpeg','bg3.jpg','bg4.jpg']
var random_number = Math.floor(Math.random()*4)
var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
var roverWidth = 100;
var roverHeight = 90;
background_image = bg_array[random_number];
rover_image = "rover.png";
rover_X = 10;
rover_Y = 10;

function add() {
    background_imagetag = new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = background_image;
    rover_imagetag = new Image();
    rover_imagetag.onload = uploadRover;
    rover_imagetag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imagetag,rover_X,rover_Y,roverWidth,roverHeight);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
    keyPressed = e.keyCode
    if (keyPressed == '37') {
        left()
        console.log('left')
    }
    if (keyPressed == '38') {
        up()
        console.log('up')
    }
    if (keyPressed == '39') {
        right()
        console.log('right')
    }
    if (keyPressed == '40') {
        down()
        console.log('down')
    }
}

function up() {
    if(rover_Y > 0) {
        rover_Y = rover_Y - 10;
        uploadBackground()
        uploadRover()
    }
}

function down() {
    if(rover_Y < 510) {
        rover_Y = rover_Y + 10;
        uploadBackground()
        uploadRover()
    }
}

function left() {
    if(rover_X > 0) {
        rover_X = rover_X - 10;
        uploadBackground()
        uploadRover()
    }
}

function right() {
    if(rover_X < 700) {
        rover_X = rover_X + 10;
        uploadBackground()
        uploadRover()
    }
}