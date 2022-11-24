class Game {
  constructor(){ 
    this.ctx = null;
    this.bg = null;
  }

  startGame(){
    console.log('starting...')
    const canvas = document.getElementById('canvas');

    this.ctx = canvas.getContex('2d');

    const car = new Car();

    const background = new Image();

    background.src = '.\images\road.png'

    background.onload = () => {
      this.bg = background
      console.log(this.bg)
      this.updateCanvas()
      this.drawPlayer()
    };

  }

drawPlayer(){
  this.ctx.drawImage(
    this.player.img,
    this.player.posX,
    this.player.posY,
    this.player.width,
    this.player.height
  );
}



  updateCanvas(){
    this.ctx.drawImage(this.bg, 0, 0, 500, 700)
  }
}

class Car{
  constructor(width, height, posX, posY){
    this.width= width;
    this.height= height;
    this.posX= posX;
    this.posY = posY;
  }

  createCar() {
    const car = new Image()
    car.src = "./images\car.png"

    car.onload = () =>
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
};
