//--------------------PARAMETER--------------------
var TILT_SMOOTH_MODIFICATOR = 25;
//--------------------PARAMETER--------------------

function calcTilt(surroundingHeights)
{
  return (Math.atan((surroundingHeights[1] - surroundingHeights[2]) / TILT_SMOOTH_MODIFICATOR, 16) * 180 / Math.PI);
}
