import PreciousManager from "./PreciousManager.js";

class GameManager {
   constructor(dataGameAndLevelManager, utils) {
      this.scoreTarget = document.getElementById("score");
      this.lifeTarget = document.getElementById("life");
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 500;
      this.canvas.height = 690;
      this.dataGameAndLevelManager = dataGameAndLevelManager;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      this.preciousManager = new PreciousManager(this.ctx, this.images.precious.precious_1);
      this.x_car = 100;
      this.road_chunk_1_y = 0;
      this.road_chunk_2_y = -690;
      this.timerId = null;
   }

   initGame() {
      this.utils.insertInHTMLTarget(this.dataGameAndLevelManager.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(this.dataGameAndLevelManager.life, this.lifeTarget);
      document.addEventListener("keydown", this.carMovements.bind(this), false);
      this.onOff("on");
   }

   gameLoop() {
      this.ctx.clearRect(0, 0, 500, 690);
      this.createRoad();
      this.preciousManager.createPrecious(this.dataGameAndLevelManager.loopStep);
      this.createCar();

      this.timerId = window.setTimeout(this.gameLoop.bind(this), 50);
   }

   createRoad() {
      this.road_chunk_1_y += this.dataGameAndLevelManager.loopStep;
      this.road_chunk_2_y += this.dataGameAndLevelManager.loopStep;

      if (this.road_chunk_1_y >= 690) this.road_chunk_1_y -= 2 * 690;
      if (this.road_chunk_2_y >= 690) this.road_chunk_2_y -= 2 * 690;

      this.ctx.drawImage(this.images.roads.road_1, 0, this.road_chunk_1_y);
      this.ctx.drawImage(this.images.roads.road_2, 0, this.road_chunk_2_y);
   }

   createCar() {
      this.ctx.drawImage(this.images.cars.red_car, this.x_car, 620);
   }

   carMovements(e) {
      if ((e.key == "Right" || e.key == "ArrowRight") && this.x_car < 200) {
         this.x_car += 150;
      } else if ((e.key == "Left" || e.key == "ArrowLeft") && this.x_car > 200) {
         this.x_car -= 150;
      }
   }

   onOff(switchState) {
      switch (switchState) {
         case "on":
            this.gameLoop();
            break;
         case "off":
            window.clearTimeout(this.timerId);
            break;
         default:
            throw Error(`Bad switchState, given: ${swithState}`);
      }
   }
}

export default GameManager;
