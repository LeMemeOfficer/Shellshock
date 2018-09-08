//--------------------PARAMETER--------------------
var INTENSITY_MODIFIER = 3.2;
var COLOR_MODIFIER_DISTANCE = 300;
var CONE_OFFSET = 30;
var CONE_LENGTH = 100;
var CONE_WIDTH = 10;
//--------------------PARAMETER--------------------

function getNextPlayer()
{
  if(numberPlayersLeft() > 0)
  {
    players[activePlayer].movementCounter = 0;
    players[activePlayer].currMovement = getRandomInt(0, MAX_MOVEMENT) + 1;
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
}

function getNextPlayerId(currentPlayerId)
{
  if(numberPlayersLeft() > 0)
  {
    var nextPlayerId;
    if(currentPlayerId < players.length - 1)
    {
      nextPlayerId = players[currentPlayerId + 1].id;
    }
    else
    {
      nextPlayerId = players[0].id;
    }
    if(players[nextPlayerId].life <= 0)
    {
      nextPlayerId = getNextPlayerId(nextPlayerId);
    }
    return(nextPlayerId);
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
    case "toggle_sound":
      soundOn = false;
      break;
    case "toggle_music":
      musicOn = false;
      break;
    case "toggle_sound_muted":
      soundOn = true;
      break;
    case "toggle_music_muted":
      musicOn = true;
      break;
    case "gameStart":
      gameStartWindow.close();
      break;
    case "gameStartSinglePlayer":
      isSinglePlayer = true;
      gameStartWindow.close();
      chooseGameModeWindow.activate();
      break;
    case "gmEasy":
      gameMode = BOTMODE_EASY;
      chooseGameModeWindow.close();
      break;
    case "gmMedium":
      gameMode = BOTMODE_MEDIUM;
      chooseGameModeWindow.close();
      break;
    case "gmHard":
      gameMode = BOTMODE_HARD;
      chooseGameModeWindow.close();
      break;
    case "gmImpossible":
      gameMode = BOTMODE_IMPOSSIBLE;
      chooseGameModeWindow.close();
      break;
    case "restartGame":
      location = location;
      break;
  }
  mouseOverButton = "none";
}

function waitForRoundEnd()
{
  if(bulletsArray.length == 0 && explosionsArray.length == 0)
  {
    roundEnded = true;
  }
}

function noWindowOpen()
{
  if(!gameStartWindow.active && !nextPlayerWindow.active)
  {
    return true;
  }
  return false;
}

function numberPlayersLeft()
{
  var livingPlayers = 0;
  for(i = 0; i < players.length; i++)
  {
    if(players[i].life > 0)
    {
      livingPlayers++;
    }
  }
  return livingPlayers;
}

function getLastLivingPlayerName()
{
  if(numberPlayersLeft() == 1)
  {
    for(i = 0; i < players.length; i++)
    {
      if(players[i].life > 0)
      {
        return players[i].name;
      }
    }
  }
}
