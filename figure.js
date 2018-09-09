//--------------------PARAMETER--------------------
var MAX_MOVEMENT = 50;
var MAX_LIFE = 100;
var OFFSET_GROUND = 10;
var OFFSET_WALL = 10;

var BOTMODE_EASY = 0.75;
var BOTMODE_MEDIUM = 0.5;
var BOTMODE_HARD = 0.25;
var BOTMODE_IMPOSSIBLE = 0;
//--------------------PARAMETER--------------------

function figure(width, height, angle, x, y, keyLeft, keyRight, id, name, tankImg, cannonImg, color, possibleBot)
{
  //Controls
  this.keyLeft = keyLeft
  this.keyRight = keyRight

  //relevant if Bot
  this.isBot = possibleBot;
  this.currMovement = 50;

  //Appearence
  this.width = width;
  this.height = height;
  this.body = tankImg;
  this.cannon = cannonImg;
  this.color = color;

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
  this.life = MAX_LIFE;

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

    writeText(myGameArea, this.x, this.y -20, 12, "Arial", this.name);

    //draw tank
    if(this.life > 0)
    {
      drawBarrel(myGameArea, this.x, this.y, this.cannon, this.width / 1.5, this.height / 1.5, cannonAngle);
      drawImageCenteredAndScaledAndRotated(myGameArea, this.x, this.y, this.body, this.width, this.height, this.angle);
    }
    else
    {
      drawImageCenteredAndScaledAndRotated(myGameArea, this.x, this.y, this.body, this.width * 1.3, this.height * 1.3, this.angle);
    }
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
      if(soundOn)
      {
        sound_motor.play();
      }
    }
    else
    {
      this.stopHorizontal();
    }
  }

  this.botMove = function()
  {
    if(noWindowOpen())
    {
      if(this.currMovement > 0)
      {
        this.moveHorizontal(-PLAYER_SPEED);
        this.currMovement--;
      }
      else
      {
        this.stopHorizontal();
        if(!shotFired)
        {
          //play shot sound
          if(soundOn)
          {
            sound_shot.play();
          }

          var targetPlayer = getRandomInt(0, players.length -1);
          while(!players[targetPlayer].isBot || players[targetPlayer].life <= 0)
          {
            targetPlayer = getRandomInt(0, players.length);
          }
          targetPlayer = 0;
          var shotY = getRandomInt(-20, -40);
          var perfectShot = (this.x - players[targetPlayer].x) / (shotY / GRAVITY * 2);
          var shotX = getRandomInt(perfectShot * (1 - gameMode), perfectShot * (1 + gameMode));
          newBullet = new bullet(this.x, this.y, shotX, shotY);
          bulletsArray.push(newBullet);
          shotFired = true;
        }
      }
    }
  }

  this.stopHorizontal = function()
  {
    this.speedX = 0;
    sound_motor.stop();
  }

  this.gotHit = function(damage)
  {
    newToastText = new toastText(this.x, this.y - 30, 15, "Arial", "-" + damage + " HP", "black");
    toastTextArray.push(newToastText);
    this.life -= damage;
    if(this.life <= 0)
    {
      this.body = image_tank_destroyed;
    }
  }
}
