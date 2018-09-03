function getDistance(p1, p2)
{
  return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
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
