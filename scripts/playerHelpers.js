//--------------------PARAMETER--------------------
var TILT_SMOOTH_MODIFICATOR = 25;
//--------------------PARAMETER--------------------

function calcTilt(surroundingHeights)
{
  return (Math.atan((surroundingHeights[1] - surroundingHeights[2]) / TILT_SMOOTH_MODIFICATOR, 16) * 180 / Math.PI);
}

//--------------------BOT_LOGIC--------------------
function getTargetPlayer()
{
  var targetPlayer = getRandomInt(0, players.length -1);
  while(players[targetPlayer].isBot || players[targetPlayer].life <= 0)
  {
    targetPlayer = getRandomInt(0, players.length -1);
  }
  return targetPlayer;
}
