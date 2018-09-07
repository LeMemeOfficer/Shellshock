function nextPlayerMenu()
{
  //window Appearence
  this.active = false;
  this.xPos = CANVAS_WIDTH / 2;
  this.yPos = CANVAS_HEIGHT / 2;
  this.width = 300;
  this.height = 150;
  this.radius = 10;
  this.color = "#38B95D";

  this.playerName;

  this.draw = function()
  {
    drawRoundedBox(this.xPos, this.yPos, this.width, this.height, this.radius, this.color);
    writeText(myGameArea, this.xPos, this.yPos - this.height / 8, 35, "Oswald", this.playerName + "'s turn", "Black");
    drawButton(this.xPos, this.yPos + this.height / 6, 160, 40, 0, "#6AB9DF", "#3A9CCC", "black", "nextPlayerReady");
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

function gameStartScreen()
{
  this.active = true;
  this.xPos = CANVAS_WIDTH / 2;
  this.yPos = CANVAS_HEIGHT / 2;
  this.width = 300;
  this.height = 150;
  this.radius = 10;
  this.color = "#38B95D";

  this.draw = function()
  {
    drawRoundedBox(this.xPos, this.yPos, this.width, this.height, this.radius, this.color);
    writeText(myGameArea, this.xPos, this.yPos - this.height / 8, 35, "Oswald", "Doodle Panzers", "Black");
    drawButton(this.xPos, this.yPos + this.height / 6, 160, 40, 0, "#6AB9DF", "#3A9CCC", "black", "gameStart");
    writeText(myGameArea, this.xPos, this.yPos + this.height / 6 + 7, 20, "Oswald", "Start!", "Black");
  }

  this.close = function()
  {
    this.active = false;
  }
}

function gameFinishedScreen()
{
  this.active = false;
  this.xPos = CANVAS_WIDTH / 2;
  this.yPos = CANVAS_HEIGHT / 2;
  this.width = 300;
  this.height = 150;
  this.radius = 10;
  this.color = "#38B95D";

  this.draw = function()
  {
    drawRoundedBox(this.xPos, this.yPos, this.width, this.height, this.radius, this.color);
    writeText(myGameArea, this.xPos, this.yPos - this.height / 8, 35, "Oswald", getLastLivingPlayerName() + " won!", "Black");
    drawButton(this.xPos, this.yPos + this.height / 6, 160, 40, 0, "#6AB9DF", "#3A9CCC", "black", "restartGame");
    writeText(myGameArea, this.xPos, this.yPos + this.height / 6 + 7, 20, "Oswald", "New game!", "Black");
  }

  this.activate = function()
  {
    this.active = true;
  }
}

function drawPlayerGui()
{
  var xPos = players[activePlayer].x;
  var yPos = CANVAS_HEIGHT - 50;
  var width = 100;
  var height = 80;
  var radius = 5;
  var color = players[activePlayer].color;
  drawRoundedBox(xPos, yPos, width, height, radius, color);
  writeText(myGameArea, xPos, yPos - height / 4, 15, "Oswald", players[activePlayer].name, "Black")
  drawBar(xPos + width / 8, yPos, 15, 60, "blue", "green", MAX_LIFE, players[activePlayer].life);
  drawBar(xPos + width / 8, yPos + height / 4, 15, 60, "blue", "green", MAX_MOVEMENT, MAX_MOVEMENT - players[activePlayer].movementCounter);
  drawImageCenteredAndScaled(myGameArea, xPos - width / 3, yPos, icon_life, 15, 15);
  drawImageCenteredAndScaled(myGameArea, xPos - width / 3, yPos + height / 4, icon_feul, 15, 15);
}

function drawMenuBar()
{
  drawMenuIcon(CANVAS_WIDTH - 40, 35, icon_menu, "open_menu", 35);
  if(musicOn)
  {
    drawMenuIcon(CANVAS_WIDTH - 40 * 2, 35, icon_music, "toggle_music",35);
  }
  else
  {
    drawMenuIcon(CANVAS_WIDTH - 40 * 2, 35, icon_music_muted, "toggle_music_muted",35);
  }
  if(soundOn)
  {
    drawMenuIcon(CANVAS_WIDTH - 42 * 3, 35, icon_sound, "toggle_sound", 35);
  }
  else
  {
    drawMenuIcon(CANVAS_WIDTH - 42 * 3, 35, icon_sound_muted, "toggle_sound_muted", 35);
  }
}