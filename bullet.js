//--------------------PARAMETER--------------------
var GRAVITY = 2;
//--------------------PARAMETER--------------------

function bullet(xPos, yPos, horizontalSpeed, verticalSpeed)
{
  //Bullet identification
  this.id = bulletId.getNextId();

  //Bullet position
  this.xPos = xPos;
  this.yPos = yPos;

  //BulletMovement
  this.verticalSpeed = verticalSpeed;
  this.horizontalSpeed = horizontalSpeed;

  this.update = function()
  {
    this.verticalSpeed += GRAVITY;
    this.yPos += this.verticalSpeed;
    this.xPos += this.horizontalSpeed;

    //If Bullet is under ground level or out of canvas
    if(this.yPos >= CANVAS_HEIGHT - ground.groundMatrix[Math.floor(this.xPos / 2)] ||
       this.yPos >= CANVAS_HEIGHT)
    {
      explode(this.xPos, this.yPos, 26);
      removeBullet(this.id);
    }
    this.drawBullet();
  }

  this.drawBullet = function()
  {
    drawCircle(myGameArea.context, this.xPos, this.yPos, 5, "black");
  }
}
