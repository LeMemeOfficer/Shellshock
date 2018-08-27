function drawBulletPath(player)
{
  ctx = myGameArea.context;
  ctx.fillStyle = "black";

  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(mousePosition[0], mousePosition[1]);
  ctx.stroke();
}

function explosion(xCoord, yCoord, radius)
{
  var inExplosionCounter = 0;

  if(xCoord % 2 == 0)
  {
    startPoint = (xCoord - radius) / 2;
    endPoint = (xCoord + radius) / 2;
  }
  else
  {
    startPoint = (xCoord - radius + 1) / 2;
    endPoint = (xCoord + radius -1) / 2;
  }

  for(i = startPoint; i <= endPoint; i++)
  {
    inExplosionCounter = 0;
    for(j = CANVAS_HEIGHT; j > ground.groundMatrix[i]; j--)
    {
      if(getDistance([xCoord, yCoord],[i * 2, j]) <= radius &&
         ground.groundMatrix[i] > CANVAS_HEIGHT - j)
      {
        inExplosionCounter++;
      }
    }
    ground.groundMatrix[i] -= inExplosionCounter;
  }
  groundCanvas.clear();
  ground.drawGround();
}
