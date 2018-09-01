//load images
var image_carton = new Image();
image_carton.src = "images/patterns/ground_carton2.png";

var image_carton_ripped = new Image();
image_carton_ripped.src = "images/patterns/ground_carton_ripped2.png";

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

    var pattern = ctx.createPattern(image_carton, "repeat");
    var pattern_outline = ctx.createPattern(image_carton_ripped, "repeat");

    ctx.fillStyle = pattern;
    ctx.lineWidth = 10;
    ctx.strokeStyle = pattern_outline;

    ctx.beginPath();
    ctx.moveTo(groundCanvas.canvas.width, groundCanvas.canvas.height + 10);
    ctx.lineTo(-10, groundCanvas.canvas.height + 10);
    ctx.lineTo(-10, groundCanvas.canvas.height - (this.groundMatrix[0] - 1))
    for(i = 0; i < this.groundMatrix.length; i++)
    {
      ctx.lineTo(i * 2, groundCanvas.canvas.height - (this.groundMatrix[i] - 1));
    }

    ctx.fill();
    ctx.stroke();
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
