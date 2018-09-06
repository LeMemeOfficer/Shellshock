function nextPlayerMenu()
{
  //window Appearence
  this.active = false;
  this.xPos = CANVAS_WIDTH / 2;
  this.yPos = CANVAS_HEIGHT / 2;
  this.height = 150;
  this.width = 300;
  this.radius = 10;
  this.color = "#38B95D";

  this.playerName;

  this.draw = function()
  {
    drawRoundedBox(this.xPos, this.yPos, this.height, this.width, this.radius, this.color);
    writeText(myGameArea, this.xPos, this.yPos - this.height / 8, 35, "Oswald", this.playerName + "'s turn", "Black");
    drawButton(this.xPos, this.yPos + this.height / 6, 40, 160, 0, "#6AB9DF", "#3A9CCC", "black", "nextPlayerReady");
    writeText(myGameArea, this.xPos, this.yPos + this.height / 6 + 7, 20, "Oswald", "Ready", "Black");
  }

  this.close = function()
  {
    this.active = false;
    shotFired = false;
    roundEnded = false;
    getNextPlayer();
  }

  this.activate = function(playerName)
  {
    this.playerName = playerName;
    this.active = true;
  }
}
