//--------------------PARAMETER--------------------
var GRAVITY = 2;
//--------------------PARAMETER--------------------

function bullet(xCoord, yCoord, horizontalSpeed, verticalSpeed)
{
  this.id = getBulletId();

  //BulletPosition
  this.xPos = xCoord;
  this.yPos = yCoord;

  //BulletMovement (Vertical)
  this.VerticalSpeed = verticalSpeed;

  this.update = function()
  {
    this.VerticalSpeed += GRAVITY;
    this.yPos += this.VerticalSpeed
    this.xPos += horizontalSpeed;

    if(this.yPos >= CANVAS_HEIGHT - ground.groundMatrix[Math.floor(this.xPos / 2)] ||
       this.yPos >= CANVAS_HEIGHT)
    {
      explosion(this.xPos, this.yPos, 26);
      bulletsArray = bulletsArray.filter(bullet => bullet.id != this.id);
    }

    this.draw();
  }

  this.draw = function()
  {
    ctx = myGameArea.context;
    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, 5, 0,2*Math.PI);
    ctx.fill();
  }
}
