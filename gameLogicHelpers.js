//--------------------PARAMETER--------------------
var INTENSITY_MODIFIER = 3.2;
var COLOR_MODIFIER_DISTANCE = 300;
var CONE_OFFSET = 30;
var CONE_LENGTH = 100;
var CONE_WIDTH = 10;
//--------------------PARAMETER--------------------

function getNextPlayer()
{
  players[activePlayer].movementCounter = 0
  if(activePlayer < players.length - 1)
  {
    activePlayer++;
  }
  else
  {
    activePlayer = 0;
  }
  if(players[activePlayer].life <= 0)
  {
    getNextPlayer();
  }
}

function counter()
{
  this.id = 0;
  this.getNextId = function ()
  {
    return this.id++;
  }
}

function drawShootSpeedCone(player)
{
  var mainAngele = getAngle([player.x, player.y], [mousePosition[0], mousePosition[1]]);
  var distance = getDistance(getNextEdge([player.x, player.y], CONE_OFFSET, mainAngele, 2), [mousePosition[0], mousePosition[1]]);

  var pos1 = getNextEdge([player.x, player.y], CONE_OFFSET, mainAngele, 2);
  var pos2 = getNextEdge(pos1, distance / INTENSITY_MODIFIER, mainAngele + CONE_WIDTH, 2);
  var pos3 = getNextEdge(pos1, distance / INTENSITY_MODIFIER, mainAngele - CONE_WIDTH, 2);

  var colorModifier = distance / COLOR_MODIFIER_DISTANCE * 255;

  ctx = myGameArea.context;

  ctx.fillStyle = "rgb(" + colorModifier + ", 0," + (255 - colorModifier) + ")";

  ctx.beginPath();
  ctx.moveTo(pos1[0], pos1[1]);
  ctx.lineTo(pos2[0], pos2[1]);
  ctx.lineTo(pos3[0], pos3[1]);
  ctx.fill();

  pos2 = getNextEdge(pos1, CONE_LENGTH, mainAngele + CONE_WIDTH, 2);
  pos3 = getNextEdge(pos1, CONE_LENGTH, mainAngele - CONE_WIDTH, 2);

  ctx.fillStyle = "black"
  ctx.beginPath();
  ctx.moveTo(pos1[0], pos1[1]);
  ctx.lineTo(pos2[0], pos2[1]);
  ctx.lineTo(pos3[0], pos3[1]);
  ctx.lineTo(pos1[0], pos1[1]);
  ctx.stroke();
}

function buttonAction()
{
  switch (mouseOverButton) {
    case "nextPlayerReady":
      nextPlayerWindow.close();
      break;
  }
  mouseOverButton = "none";
}
