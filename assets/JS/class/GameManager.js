class GameManager {
   constructor(dataOfGameManager, utils) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.scoreTarget = document.getElementById("score");
      this.lifeTarget = document.getElementById("life");
      this.dataOfGameManager = dataOfGameManager;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      // car move
      this.x_Car = 100;
      // way move
      this.way_1_y = 0;
      this.way_2_y = -690;
   }

   initGame() {
      this.utils.insertInHTMLTarget(this.dataOfGameManager.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(this.dataOfGameManager.life, this.lifeTarget);
      window.addEventListener("keydown", this.carMovements.bind(this), false);
      this.gameLoop();
   }

   carMovements(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
         this.x_Car += 150;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
         this.x_Car -= 150;
      }
   }

   gameLoop() {
      this.ctx.clearRect(0, 0, 500, 690);
      this.way();
      setTimeout(this.gameLoop.bind(this), this.dataOfGameManager.loopSpeed);
   }

   way() {
      this.way_1_y += 10;
      this.way_2_y += 10;

      if (this.way_1_y >= 690) this.way_1_y -= 2 * 690;
      if (this.way_2_y >= 690) this.way_2_y -= 2 * 690;

      this.ctx.drawImage(this.images.ways.way_1, 0, this.way_1_y);
      this.ctx.drawImage(this.images.ways.way_2, 0, this.way_2_y);
      this.ctx.drawImage(this.images.cars.red_car, this.x_Car, 620);
   }
}

export default GameManager;
