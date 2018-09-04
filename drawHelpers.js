function getFirstEdge(coordinates, width, height, angle)
{
  return getNextEdge(getNextEdge(coordinates, width / 2, angle, 2), height / 2, angle, 3);
}

function getNextEdge(coordinates, length, angle, angleModifier)
{
  var pointX = Math.round(coordinates[0] + length * Math.cos(Math.PI * (angle + 90 * angleModifier) / 180));
  var pointY = Math.round(coordinates[1] + length * Math.sin(Math.PI * (angle + 90 * angleModifier) / 180));
  var bufferPoint = [pointX, pointY];
  return bufferPoint;
}

function drawCircle(ctx, xPos, yPos, radius, color)
{
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(xPos, yPos, radius, 0,2*Math.PI);
  ctx.fill();
}

function writeText(canvas, xPos, yPos, size, font, text, color)
{
  ctx = canvas.context;
  ctx.fillStyle = color;
  ctx.font = size + "px " + font;
  ctx.textAlign = "center";
  ctx.fillText(text, xPos, yPos);
}

function toastText(xPos, yPos, size, font, text, color)
{
  this.id = toastTextId.getNextId();

  this.existenceTimeCounter = 0;

  this.update = function()
  {
    if(this.existenceTimeCounter < 50)
    {
      writeText(myGameArea, xPos, yPos - this.existenceTimeCounter, size, font, text, color);
      this.existenceTimeCounter++;
    }
    else
    {
      toastTextArray = toastTextArray.filter(toastText => toastText._id != this._id);
    }
  }
}
