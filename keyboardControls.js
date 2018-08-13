var pressedKeys = [];

document.addEventListener('keydown', function(event)
{
  if(!pressedKeys.includes(event.keyCode))
  {
    pressedKeys.push(event.keyCode);
  }
  processMoveControlls(players[activePlayer], event.keyCode);
  // players.forEach(player => processMoveControlls(player, event.keyCode));
});

document.addEventListener('keyup', function(event)
{
  pressedKeys = pressedKeys.filter(key => key !=  event.keyCode);

  players.forEach(player => processStopConditions(player, event.keyCode));
});

document.addEventListener('mousemove', function(event)
{
  var rect = document.getElementById('gameArea').getBoundingClientRect();
  mousePosition[0] = event.clientX - rect.left;
  mousePosition[1] = event.clientY - rect.top;
});
