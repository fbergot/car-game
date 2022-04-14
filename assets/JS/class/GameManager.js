class GameManager {
   constructor(dataOfGameManager, utils) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 500;
      this.canvas.height = 690;
      this.scoreTarget = document.getElementById("score");
      this.lifeTarget = document.getElementById("life");
      this.dataOfGameManager = dataOfGameManager;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      this.x_Car = 100;
      this.road_chunk_1_y = 0;
      this.road_chunk_2_y = -690;
      this.stepRoad = 10;
   }

   initGame() {
      this.utils.insertInHTMLTarget(this.dataOfGameManager.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(this.dataOfGameManager.life, this.lifeTarget);
      window.addEventListener("keydown", this.carMovements.bind(this), false);
      this.gameLoop();
   }

   gameLoop() {
      this.ctx.clearRect(0, 0, 500, 690);
      this.createRoad();
      this.createCar();
      setTimeout(this.gameLoop.bind(this), this.dataOfGameManager.loopSpeed);
   }

   createRoad() {
      this.road_chunk_1_y += this.stepRoad;
      this.road_chunk_2_y += this.stepRoad;

      if (this.road_chunk_1_y >= 690) this.road_chunk_1_y -= 2 * 690;
      if (this.road_chunk_2_y >= 690) this.road_chunk_2_y -= 2 * 690;

      this.ctx.drawImage(this.images.roads.road_1, 0, this.road_chunk_1_y);
      this.ctx.drawImage(this.images.roads.road_2, 0, this.road_chunk_2_y);
   }

   createCar() {
      this.ctx.drawImage(this.images.cars.red_car, this.x_Car, 620);
   }

   carMovements(e) {
      if ((e.key == "Right" || e.key == "ArrowRight") && this.x_Car < 200) {
         this.x_Car += 150;
      } else if ((e.key == "Left" || e.key == "ArrowLeft") && this.x_Car > 200) {
         this.x_Car -= 150;
      }
   }
}

export default GameManager;
