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
