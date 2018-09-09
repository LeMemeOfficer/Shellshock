function getDistance(p1, p2)
{
  return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

function getAngle(p1, p2)
{
  return (Math.atan2(p1[1] - p2[1], p1[0] - p2[0]) * 180 / Math.PI)
}

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

function strToBool(string)
{
  if(string == "true")
  {
    return true;
  }
  return false;
}
