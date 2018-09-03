//--------------------PARAMETER--------------------
var TILT_SMOOTH_MODIFICATOR = 25;
//--------------------PARAMETER--------------------

function calcTilt(surroundingHeights)
{
  return (Math.atan((surroundingHeights[1] - surroundingHeights[2]) / TILT_SMOOTH_MODIFICATOR, 16) * 180 / Math.PI);
}

function drawPlayer(edge1, edge2, edge3, edge4, color)
{
  ctx = myGameArea.context;
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(edge1[0],edge1[1]);
  ctx.lineTo(edge2[0],edge2[1]);
  ctx.lineTo(edge3[0],edge3[1]);
  ctx.lineTo(edge4[0],edge4[1])
  ctx.fill();
}
