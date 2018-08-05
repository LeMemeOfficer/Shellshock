var pressedKeys = [];

document.addEventListener('keydown', function(event)
{
  if(!pressedKeys.includes(event.keyCode))
  {
    pressedKeys.push(event.keyCode);
    //console.log(pressedKeys);
  }

  players.forEach(player => processMoveControlls(player, event.keyCode));
});

document.addEventListener('keyup', function(event)
{
  pressedKeys = pressedKeys.filter(key => key !=  event.keyCode);
  //console.log(pressedKeys);

  players.forEach(player => processStopConditions(player, event.keyCode));
});
