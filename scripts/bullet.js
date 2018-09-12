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

    var prevX = this.xPos;
    var prevY = this.yPos;

    this.yPos += this.verticalSpeed;
    this.xPos += this.horizontalSpeed;
    
    //calulate how many steps to check inbetween two frames
    if(!inBetween(this.horizontalSpeed, -1, 1))
    {
      var timesToCheckBetween = (Math.floor(this.xPos - prevX));
      var positiveAgain = 1;
      if(timesToCheckBetween < 0)
      {
        timesToCheckBetween *= -1;
        positiveAgain *= -1;
      }

      //calctulate steps between y coordinates
      var ySteps = (this.yPos - prevY) / timesToCheckBetween;
      for(i = 1; i <= timesToCheckBetween; i ++)
      {
        currXPos = (prevX + i * positiveAgain);
        currYPos =  prevY + ySteps * i;
        if(coordUnderGround(currXPos, currYPos) ||
           !inBetween(currXPos, 0, CANVAS_WIDTH) ||
           currYPos > CANVAS_HEIGHT)
        {
          drawCircle(groundCanvas.context, (prevX + i * positiveAgain), prevY + ySteps * i, 6, "black");
          explode((prevX + i * positiveAgain), prevY + ySteps * i, 26);
          removeBullet(this.id);
          break;
        }
      }
    }
    else
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
