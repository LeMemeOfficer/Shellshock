//--------------------PARAMETER--------------------
var MAX_MOVEMENT = 100;
var OFFSET_GROUND = 8;
var OFFSET_WALL = 10;
//--------------------PARAMETER--------------------

function figure(width, height, angle, color, x, y, keyLeft, keyRight, id, name)
{
  //Controls
  this.keyLeft = keyLeft
  this.keyRight = keyRight

  //Appearence
  this.width = width;
  this.height = height;
  this.color = color

  //Coordinates
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;

  this.angle = 0;

  //Identification
  this.id = id;
  this.name = name;

  //Game logic
  this.movementCounter = 0;

  //Draw on Canvas
  this.update = function()
  {
    groundHeight = [ground.groundMatrix[ this.x      / 2], //ground heigth at tank center
                    ground.groundMatrix[(this.x - 8) / 2], //ground heigth at left offset
                    ground.groundMatrix[(this.x + 8) / 2]];//ground heigth at right offset

    //Position player on ground
    this.y = CANVAS_HEIGHT - groundHeight[0] - OFFSET_GROUND;
    this.angle = calcTilt(groundHeight);
    var cannonAngle = getAngle([this.x, this.y], [mousePosition[0], mousePosition[1]]);

    //draw tank
    drawBarrel(myGameArea, this.x, this.y, image_tank_blue_cannon, this.width / 1.5, this.height / 1.5, cannonAngle);
    drawImageCenteredAndScaledAndRotated(myGameArea, this.x, this.y, image_tank_blue, this.width, this.height, this.angle);

    writeText(myGameArea, this.x, this.y -20, 12, "Arial", this.name);
  }

  this.newPos = function()
  {
    //Check if player is in boundaries of canvas
    if(inBetween(this.x + this.speedX, OFFSET_WALL, myGameArea.canvas.width - OFFSET_WALL))
    {
      this.x += this.speedX;
    };
  }

  //Movement
  this.moveHorizontal = function(speed)
  {
    //If player has movement left
    if(this.movementCounter < MAX_MOVEMENT)
    {
      this.speedX = speed;
      this.movementCounter++;
    }
    else
    {
      this.speedX = 0;
    }
  }

  this.stopHorizontal = function()
  {
    this.speedX = 0;
  }

  this.gotHit = function()
  {
    toastTextt = new toastText(this.x, this.y - 30, 15, "Arial", "-10 HP", "black");
    toastTextArray.push(toastTextt);
  }
}
