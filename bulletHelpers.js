function removeBullet(idOfBulletToRemove)
{
  bulletsArray = bulletsArray.filter(bullet => bullet.id != idOfBulletToRemove);
}

// Gibt nur letzten Spieler zurück, array an [0] und abfragen ob Array leer?
function hitDetection(bombPos, explosionRadius)
{
  var buffer = [];

  players.forEach(player =>
  {
    if(getDistance(bombPos, [player.x, player.y]) <= explosionRadius * 2)
    {
      buffer[player.id] = 50;
    }
    else
    {
      buffer[player.id] = 0;
    }
  });

  return buffer;
}

function coordUnderGround(xPos, yPos)
{
  if(yPos >= CANVAS_HEIGHT - ground.groundMatrix[Math.floor(xPos / 2)])
  {
    return true;
  }
  return false;
}

function explode(xPos, yPos, radius)
{
  xPos = Math.floor(xPos);
  yPos = Math.floor(yPos);

  var hitInfo = hitDetection([xPos, yPos], radius);
  console.log(hitInfo);
  for(i = 0; i < hitInfo.length; i++)
  {
    if(hitInfo[i] > 0)
    {
      players[i].gotHit(hitInfo[i]);
    }
  }

  //choose explosion type
  var explosionType = Math.floor(Math.random() * 3);

  //play explosion sound
  if(soundOn)
  {
    playExplosionSound(explosionType);
  }

  //draw explosion
  newExplosion = new explosionAnimation(xPos, yPos, explosionType);
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
