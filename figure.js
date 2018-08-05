function figure(width, height, angle, color, x, y, keyUp, keyLeft, keyDown, keyRight, id)
{
  //Controls
  this.keyUp = keyUp
  this.keyLeft = keyLeft
  this.keyDown = keyDown
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

  this.newPos = function()
  {
    //Check if player is in boundaries of canvas
    if(inBetween(this.x + this.speedX, 0, myGameArea.canvas.width - this.width))
    {
      this.x += this.speedX;
    };

    //Check if player is in boundaries of canvas
    if(inBetween(this.y + this.speedY, 0, myGameArea.canvas.height - this.height))
    {
      this.y += this.speedY;
    };
  }

  //Movement
  this.moveVertical = function(speed)
  {
    this.speedY = speed;
  }

  this.moveHorizontal = function(speed)
  {
    this.speedX = speed;
  }

  this.stopHorizontal = function()
  {
    this.speedX = 0;
  }

  this.stopVertical = function()
  {
    this.speedY = 0;
  }
}
