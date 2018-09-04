function removeBullet(idOfBulletToRemove)
{
  bulletsArray = bulletsArray.filter(bullet => bullet.id != idOfBulletToRemove);
}

function hitDetection(bombPos, explosionRadius)
{
  var buffer = -1;

  players.forEach(player =>
  {
    if(getDistance(bombPos, [player.x, player.y]) <= explosionRadius)
    {
      buffer = player.id;
    }
  });

  return buffer;
}

function explode(xPos, yPos, radius)
{
  xPos = Math.floor(xPos);
  yPos = Math.floor(yPos);

  var hitPlayer = hitDetection([xPos, yPos], radius);

  if(hitPlayer != -1)
  {
    players[hitPlayer].gotHit();
  }

  //draw explosion
  newExplosion = new explosionAnimation(xPos, yPos);
  explosionsArray.push(newExplosion);

  //Area to check if in explosion
  var startPoint = Math.floor((xPos - radius) / 2);
  var endPoint = Math.floor((xPos + radius) / 2);
  var lowestToCheck = yPos + radius + 2;

  //Coordinates of position that is currently checked
  var xCheckedPos;
  var yCheckedPos;

  for(xCheckedPos = startPoint; xCheckedPos <= endPoint; xCheckedPos++)
  {
    var inExplosionCounter = 0;
    for(yCheckedPos = lowestToCheck; yCheckedPos >= ground.groundMatrix[xCheckedPos]; yCheckedPos--)
    {
      //If distance between checked position and center of explosion is smaller than explosion radius AND
      //Point is still part of Ground
      if(getDistance([xPos, yPos],[xCheckedPos * 2, yCheckedPos]) <= radius &&
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
