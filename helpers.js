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
