function getFirstEdge(coordinates, width, height, globalAngle)
{
  var length = Math.round(Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2)) / 2);
  var x = Math.asin(Math.PI * (height / length) / 180)
  var angle = Math.round(x + 180 + globalAngle);
  return getNextEdge(coordinates, length, angle, 0)
}

function getNextEdge(coordinates, length, angle, angleModifier)
{
  var pointX = Math.round(coordinates[0] + length * Math.cos(Math.PI * (angle + 90 * angleModifier) / 180));
  var pointY = Math.round(coordinates[1] + length * Math.sin(Math.PI * (angle + 90 * angleModifier) / 180));
  var bufferPoint = [pointX, pointY];
  return bufferPoint;
}
