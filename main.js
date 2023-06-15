var canvas = new fabric.Canvas('myCanvas');

blockImageWidth = 30;
blockImageHeight = 30;

playerX = 10;
playerY = 10;

var playerObject = "";
var blockImageObject = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(img){
        playerObject = img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY, left:playerX});

        canvas.add(playerObject);
    });
}

function NewImage(getImage)
{
    fabric.Image.fromURL(getImage, function(img){
        blockImageObject = img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY, left:playerX});

        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == "80")
    {
        console.log("p e shift pressionadas juntas");
        blockImageHeight = blockImageHeight + 10;
        blockImageWidth = blockImageWidth + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("m e shift pressionadas juntas");
        blockImageHeight = blockImageHeight - 10;
        blockImageWidth = blockImageWidth - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(keyPressed == "87")
    {
        up();
        console.log("cima");
    }

    if(keyPressed == "83")
    {
        down();
        console.log("baixo");
    }

    if(keyPressed == "65")
    {
        left();
        console.log("esquerda");
    }

    if(keyPressed == "68")
    {
        rigth();
        console.log("direita");
    }

 //--------------------------------------------------------

    if(keyPressed == "88")
    {
        NewImage("wall.jpg");
        console.log("x");
    }

    if(keyPressed == "71")
    {
        NewImage("ground.png");
        console.log("g");
    }

    if(keyPressed == "76")
    {
        NewImage("light_green.png");
        console.log("l");
    }

    if(keyPressed == "84")
    {
        NewImage("trunk.jpg");
        console.log("t");
    }

    if(keyPressed == "82")
    {
        NewImage("roof.jpg");
        console.log("r");
    }

    if(keyPressed == "89")
    {
        NewImage("yellow_wall.png");
        console.log("y");
    }

    if(keyPressed == "81")
    {
        NewImage("dark_green.png");
        console.log("q");
    }

    if(keyPressed == "85")
    {
        NewImage("unique.png");
        console.log("u");
    }

    if(keyPressed == "67")
    {
        NewImage("cloud.jpg");
        console.log("c");
    }
}

function up() {
    if(playerY >=0){
        playerY = playerY - blockImageHeight;
        console.log("autura da imagem do bloco = " + blockImageHeight);
        console.log("Quando a tecla direcional cima for pressionada, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if(playerY <=500){
        playerY = playerY + blockImageHeight;
        console.log("autura da imagem do bloco = " + blockImageHeight);
        console.log("Quando a tecla direcional baixo foi pressionada, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if(playerX >0){
        playerX = playerX - blockImageWidth;
        console.log("largura da imagem do bloco = " + blockImageWidth);
        console.log("Quando a tecla direcional esquerda foi pressionada, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function rigth() {
    if(playerX <=850){
        playerX = playerX + blockImageWidth;
        console.log("largura da imagem do bloco = " + blockImageWidth);
        console.log("Quando a tecla direcional direita foi pressionada, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}