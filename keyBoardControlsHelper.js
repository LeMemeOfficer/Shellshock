//--------------------PARAMETER--------------------
var playerSpeed = 2;
//--------------------PARAMETER--------------------

function processMoveControlls(currentPlayer, key)
{
  switch (key)
  {
    case currentPlayer.keyLeft://left
      if(!pressedKeys.includes(currentPlayer.keyRight)) currentPlayer.moveHorizontal(playerSpeed * (-1));
      else currentPlayer.stopHorizontal();
      break;

    case currentPlayer.keyDown://down
      if(!pressedKeys.includes(currentPlayer.keyUp)) currentPlayer.moveVertical(playerSpeed);
      else currentPlayer.stopVertical();
      break;

    case currentPlayer.keyRight://right
      if(!pressedKeys.includes(currentPlayer.keyLeft)) currentPlayer.moveHorizontal(playerSpeed);
      else currentPlayer.stopHorizontal();
      break;

    case currentPlayer.keyUp://up
      if(!pressedKeys.includes(currentPlayer.keyDown)) currentPlayer.moveVertical(playerSpeed * (-1));
      else currentPlayer.stopVertical();
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
