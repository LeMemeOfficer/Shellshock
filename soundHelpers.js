sound_baem = new sound("sounds/sound_baem.wav");
sound_boom = new sound("sounds/sound_boom.wav");
sound_pow = new sound("sounds/sound_pow.wav");
sound_shot = new sound("sounds/sound_shot.wav");
sound_motor = new sound("sounds/sound_motor.wav");
sound_round_ended = new sound("sounds/sound_round_ended.wav");
sound_ohNo = new sound("sounds/sound_ohNo.wav");
music = new sound("sounds/music.wav");
music.setVolume(0.4);

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    this.setVolume = function()
    {
      this.sound.volume = 0.2;
    }
}

function playExplosionSound(type)
{
  switch (type) {
    case 0:
      sound_baem.play();
      break;
    case 1:
      sound_boom.play();
      break;
    case 2:
      sound_pow.play();
      break;
  }
}
