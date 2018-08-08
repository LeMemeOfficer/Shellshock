function drawBulletPath(player)
{
  ctx = myGameArea.context;
  ctx.fillStyle = "black";

  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(mousePosition[0], mousePosition[1]);
  ctx.stroke();
}
