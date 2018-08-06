function getFirstEdge(coordinates, width, height, angle)
{
  return getNextEdge(getNextEdge(coordinates, width / 2, angle, 2), height / 2, angle, 3);
}

function getNextEdge(coordinates, length, angle, angleModifier)
{
  var pointX = Math.round(coordinates[0] + length * Math.cos(Math.PI * (angle + 90 * angleModifier) / 180));
  var pointY = Math.round(coordinates[1] + length * Math.sin(Math.PI * (angle + 90 * angleModifier) / 180));
  var bufferPoint = [pointX, pointY];
  return bufferPoint;
}

function calcTilt(surrHeights)
{
  return (Math.atan((surrHeights[1] - surrHeights[2]) / 8, 16) * 180 / Math.PI);
}
