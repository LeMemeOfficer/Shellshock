function drawBulletPath(player)
{
  ctx = myGameArea.context;
  ctx.strokeStyle = "gray";

  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(mousePosition[0], mousePosition[1]);
  ctx.stroke();
}

function explosion(xCoord, yCoord, radius)
{
  var hitPlayer;

  xCoord = Math.floor(xCoord);
  yCoord = Math.floor(yCoord);

  //detect hit
  players.forEach(player =>
  {
    var buffer = hitDetection([xCoord, yCoord], [player.x, player.y], radius, player.id);
    if(buffer != -1)
    {
      hitPlayer = buffer;
    }
  });

  console.log(hitPlayer, " got hit");
  //draw explosion
  newExplosion = new explosionAnimation(xCoord, yCoord);
  explosionsArray.push(newExplosion);

  var inExplosionCounter = 0;
  var startPoint;
  var endPoint;

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

  var xCheckedPos;
  var yCheckedPos;

  for(xCheckedPos = startPoint; xCheckedPos <= endPoint; xCheckedPos++)
  {
    inExplosionCounter = 0;
    for(yCheckedPos = yCoord + radius + 10; yCheckedPos >= ground.groundMatrix[xCheckedPos]; yCheckedPos--)
    {
      // if checked Point is in radius reach AND
      if(getDistance([xCoord, yCoord],[xCheckedPos * 2, yCheckedPos]) <= radius &&
         ground.groundMatrix[xCheckedPos] >= CANVAS_HEIGHT - yCheckedPos)
      {
        inExplosionCounter++;
      }
    }
    ground.groundMatrix[xCheckedPos] -= inExplosionCounter;
  }
  groundCanvas.clear();
  ground.drawGround();
}
