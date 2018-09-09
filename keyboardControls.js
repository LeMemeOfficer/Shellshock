var pressedKeys = [];

document.addEventListener('keydown', function(event)
{
  if(!(isSinglePlayer && players[activePlayer].isBot))
  {
    if(!pressedKeys.includes(event.keyCode))
    {
      pressedKeys.push(event.keyCode);
    }
    processMoveControlls(players[activePlayer], event.keyCode);
  }
});

document.addEventListener('keyup', function(event)
{
  if(!(isSinglePlayer && players[activePlayer].isBot))
  {
    pressedKeys = pressedKeys.filter(key => key !=  event.keyCode);

    players.forEach(player => processStopConditions(player, event.keyCode));
  }
});

document.addEventListener('mousemove', function(event)
{
  var rect = document.getElementById('gameArea').getBoundingClientRect();
  mousePosition[0] = event.clientX - rect.left - 2;
  mousePosition[1] = event.clientY - rect.top - 2;
});

document.addEventListener('mousedown', function(event)
{
  if(event.button == 0)
  {
    if(noWindowOpen() && !shotFired && mouseOverButton == "none" && !(isSinglePlayer && players[activePlayer].isBot))
    {
      if(soundOn)
      {
        sound_shot.play();
      }
      newBullet = new bullet(players[activePlayer].x, players[activePlayer].y,
        (mousePosition[0] - players[activePlayer].x) / 8,
        (mousePosition[1] - players[activePlayer].y) / 8);
        bulletsArray.push(newBullet);
        shotFired = true;
    }
    if(mouseOverButton != "none")
    {
      buttonAction();
    }
  }
});
