//load images
var image_explosion1 = new Image();
image_explosion1.src = "images/assets/explosion1.png";

var image_explosion2 = new Image();
image_explosion2.src = "images/assets/explosion2.png";

var image_explosion3 = new Image();
image_explosion3.src = "images/assets/explosion3.png";

function explosionObject(xPos, yPos)
{
  this.id = explosionId.getNextId();

  //positionOfExplosion
  this.xPos = xPos;
  this.yPos = yPos;

  this.explosionType = Math.floor(Math.random() * 3);

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
        ctx = myGameArea.context;
        ctx.drawImage(image_explosion1, xPos - Math.floor(image_explosion1.width / 2), yPos - Math.floor(image_explosion1.height / 2));
        break;
      case 1:
        ctx = myGameArea.context;
        ctx.drawImage(image_explosion2, xPos - Math.floor(image_explosion2.width / 2), yPos - Math.floor(image_explosion2.height / 2));
        break;
      case 2:
        ctx = myGameArea.context;
        ctx.drawImage(image_explosion3, xPos - Math.floor(image_explosion3.width / 2), yPos - Math.floor(image_explosion3.height / 2));
        break;
      default:

    }
  }
}
