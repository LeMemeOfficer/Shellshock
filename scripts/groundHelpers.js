//--------------------PARAMETER--------------------
var MAX_VARIANCE_CHANGE = 2;
//--------------------PARAMETER--------------------

function getNextHeight(lastHeight, lastVariance)
{
  return lastHeight + getRandomInt(lastVariance - MAX_VARIANCE_CHANGE, lastVariance + MAX_VARIANCE_CHANGE);
}
