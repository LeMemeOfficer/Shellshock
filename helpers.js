//load images
var image_explosion1 = new Image();
image_explosion1.src = "images/assets/explosion1.png";

function inBetween(variable, min, max)
{
  if(variable >= min && variable <= max)
  {
    return true;
  }
  return false;
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNear(number, variance)
{
  return getRandomInt(number - variance, number + variance);
}

function getNextPlayer()
{
  players[activePlayer].movementCounter = 0
  if(activePlayer < players.length - 1)
  {
    activePlayer++;
  }
  else
  {
    activePlayer = 0;
  }
}

function drawCircle(ctx, xPos, yPos, radius, color)
{
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(xPos, yPos, radius, 0,2*Math.PI);
  ctx.fill();
}

function drawExplosion(xPos, yPos)
{
  ctx = myGameArea.context;
  ctx.drawImage(image_explosion1, xPos - Math.floor(image_explosion1.width / 2), yPos - Math.floor(image_explosion1.height / 2));
}
