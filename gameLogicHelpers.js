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

function counter()
{
  this.id = 0;
  this.getNextId = function ()
  {
    return this.id++;
  }
}

function drawBulletPath(player)
{
  ctx = myGameArea.context;
  ctx.strokeStyle = "gray";

  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(mousePosition[0], mousePosition[1]);
  ctx.stroke();
}
