function explosionAnimation(xPos, yPos, explosionType)
{
  this.id = explosionId.getNextId();

  //positionOfExplosion
  this.xPos = xPos;
  this.yPos = yPos;

  this.explosionType = explosionType;

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
    switch (this.explosionType) {
      case 0:
        drawImageCentered(myGameArea, xPos, yPos, image_explosion1);
        break;
      case 1:
        drawImageCentered(myGameArea, xPos, yPos, image_explosion2);
        break;
      case 2:
        drawImageCentered(myGameArea, xPos, yPos, image_explosion3);
        break;
    }
  }
}
