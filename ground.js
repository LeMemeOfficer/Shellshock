function ground()
{
  this.groundMatrix = [];

  this.clearGround = function()
  {
    this.canvas.getContext("2d").clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  this.drawGround = function()
  {
    ctx = groundCanvas.context;
    ctx.fillStyle = "green";

    ctx.beginPath();
    ctx.moveTo(groundCanvas.canvas.width, groundCanvas.canvas.height);
    ctx.lineTo(0, groundCanvas.canvas.height);
    for(i = 0; i < this.groundMatrix.length; i++)
    {
      ctx.lineTo(i * 2, groundCanvas.canvas.height - (this.groundMatrix[i] - 1));
    }

    ctx.fill();
  }

  this.createGroundMatrix = function()
  {
    this.lastHeight = 300;
    this.currenHeight = this.lastHeight;

    //Roughly creating Terrian
    for(i = 0; i <= CANVAS_WIDTH / 2; i++)
    {
      this.currenHeight = getNextHeight(this.lastHeight, this.currenHeight - this.lastHeight);
      this.buffer = [];
      this.groundMatrix[i] = this.currenHeight;
      this.lastHeight = this.currenHeight;
    }

    //Smoothing Terrain
    for(i = 1; i <= this.groundMatrix.length; i++)
    {
      if((this.groundMatrix[i - 1] < this.groundMatrix[i]) && (this.groundMatrix[i + 1] < this.groundMatrix[i]))
      {
        this.groundMatrix[i] -= 1;
      }
      else if((this.groundMatrix[i - 1] > this.groundMatrix[i]) && (this.groundMatrix[i + 1] > this.groundMatrix[i]))
      {
        this.groundMatrix[i] += 1;
      }
    }
  }
}
