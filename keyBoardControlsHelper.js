//--------------------PARAMETER--------------------
var PLAYER_SPEED = 2;
//--------------------PARAMETER--------------------

function processMoveControlls(currentPlayer, key)
{
  switch (key)
  {
    case currentPlayer.keyLeft://left
      if(!pressedKeys.includes(currentPlayer.keyRight)) currentPlayer.moveHorizontal(PLAYER_SPEED * (-1));
      else currentPlayer.stopHorizontal();
      break;

    case currentPlayer.keyRight://right
      if(!pressedKeys.includes(currentPlayer.keyLeft)) currentPlayer.moveHorizontal(PLAYER_SPEED);
      else currentPlayer.stopHorizontal();
      break;

    default:
      break;
  }
}

function processStopConditions(currentPlayer, key)
{
  //If left or right was released, and neither is beeing pressed, stop player
  if((key == currentPlayer.keyLeft || key == currentPlayer.keyRight) && !pressedKeys.includes(currentPlayer.keyLeft) && !pressedKeys.includes(currentPlayer.keyRight))
  {
    currentPlayer.stopHorizontal();
  }

  //If up or down was released, and neither is beeing pressed, stop player
  else if((key == currentPlayer.keyUp || key == currentPlayer.keyDown) && !pressedKeys.includes(currentPlayer.keyUp) && !pressedKeys.includes(currentPlayer.keyDown))
  {
    currentPlayer.stopVertical();
  }
}
