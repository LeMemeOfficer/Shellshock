function explosionObject(xPos, yPos)
{
  this.id = explosionId.getNextId();

  //positionOfExplosion
  this.xPos = xPos;
  this.yPos = yPos;

  this.existenceTimeCounter = 0;

  this.update = function()
  {
    if(this.existenceTimeCounter < 5)
    {
      this.drawExplosion();
      this.existenceTimeCounter++;
    }
    else
    {
      explosionsArray = explosionsArray.filter(explosion => explosion.id != this.id);
    }
  }

  this.drawExplosion = function()
  {
    ctx = myGameArea.context;
    ctx.drawImage(image_explosion1, xPos - Math.floor(image_explosion1.width / 2), yPos - Math.floor(image_explosion1.height / 2));
  }
}
