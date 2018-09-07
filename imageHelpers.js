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

var image_tank_blue = new Image();
image_tank_blue.src = "images/assets/tank_blue.png";

var image_tank_blue_cannon = new Image();
image_tank_blue_cannon.src = "images/assets/tank_blue_cannon.png";

var image_tank_red = new Image();
image_tank_red.src = "images/assets/tank_red.png";

var image_tank_red_cannon = new Image();
image_tank_red_cannon.src = "images/assets/tank_red_cannon.png";

var image_tank_destroyed = new Image();
image_tank_destroyed.src = "images/assets/tank_destroyed.png";

var image_sky = new Image();
image_sky.src = "images/patterns/sky.png";

var icon_menu = new Image();
icon_menu.src = "images/icons/menu_icon.png"

var icon_music = new Image();
icon_music.src = "images/icons/music_icon.png"

var icon_music_muted = new Image();
icon_music_muted.src = "images/icons/music_muted_icon.png"

var icon_sound = new Image();
icon_sound.src = "images/icons/sound_icon.png"

var icon_sound_muted = new Image();
icon_sound_muted.src = "images/icons/sound_muted_icon.png"
//--------------------LOAD IMAGES--------------------

function drawImageCentered(canvas, xPos, yPos, image)
{
  ctx = canvas.context;
  ctx.drawImage(image, xPos - Math.floor(image.width / 2), yPos - Math.floor(image.height / 2));
}

function drawImageCenteredAndScaled(canvas, xPos, yPos, image, width, height)
{
  ctx = canvas.context;
  ctx.drawImage(image, xPos -width / 2, yPos -height / 2, width, height);
}

function drawImageCenteredAndScaledAndRotated(canvas, xPos, yPos, image, width, height, angle)
{
  ctx = canvas.context;
  ctx.save();
  ctx.translate(xPos, yPos);
  ctx.rotate(angle * Math.PI / 180);
  ctx.drawImage(image, -width / 2, -height / 2, width, height);
  ctx.restore();
}

function drawBarrel(canvas, xPos, yPos, image, width, height, angle)
{
  ctx = canvas.context;
  ctx.save();
  ctx.translate(xPos, yPos);
  ctx.rotate(angle * Math.PI / 180);
  ctx.drawImage(image, -width, -height / 2, width, height);
  ctx.restore();
}
