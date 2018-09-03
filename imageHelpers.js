//--------------------LOAD IMAGES--------------------
var image_explosion1 = new Image();
image_explosion1.src = "images/assets/explosion1.png";

var image_explosion2 = new Image();
image_explosion2.src = "images/assets/explosion2.png";

var image_explosion3 = new Image();
image_explosion3.src = "images/assets/explosion3.png";

var image_carton = new Image();
image_carton.src = "images/patterns/ground_carton2.png";

var image_carton_ripped = new Image();
image_carton_ripped.src = "images/patterns/ground_carton_ripped2.png";
//--------------------LOAD IMAGES--------------------

function drawImageCentered(canvas, xPos, yPos, image)
{
  ctx = canvas.context;
  ctx.drawImage(image, xPos - Math.floor(image.width / 2), yPos - Math.floor(image.height / 2));
}
