//--------------------PARAMETER--------------------
var MAX_MOVEMENT = 25;
//--------------------PARAMETER--------------------

function figure(width, height, angle, color, x, y, keyLeft, keyRight, id)
{
  //Controls
  this.keyLeft = keyLeft
  this.keyRight = keyRight

  //Appearence
  this.width = width;
  this.height = height;

  //Coordinates
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;

  this.angle = 0;

  //Identification
  this.id = id;

  //Game logic
  this.movementCounter = 0;

  //Draw on Canvas
  this.update = function()
  {
    var edge1 = getFirstEdge([this.x, this.y], this.width, this.height, this.angle)
    var edge2 = getNextEdge(edge1, this.width, this.angle, 0)
    var edge3 = getNextEdge(edge2, this.height, this.angle, 1)
    var edge4 = getNextEdge(edge3, this.width, this.angle, 2)

    ctx = myGameArea.context;
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(edge1[0],edge1[1]);
    ctx.lineTo(edge2[0],edge2[1]);
    ctx.lineTo(edge3[0],edge3[1]);
    ctx.lineTo(edge4[0],edge4[1])
    ctx.fill();
  }

  this.newPos = function(groundHeight)
  {

    //Check if player is in boundaries of canvas
    if(inBetween(this.x + this.speedX, 10, myGameArea.canvas.width - 10))
    {
      this.x += this.speedX;
    };

    //Set set player on ground
    this.y = CANVAS_HEIGHT - groundHeight[0] - 2;
    this.angle = calcTilt(groundHeight);
  }

  //Movement
  this.moveHorizontal = function(speed)
  {
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
}
