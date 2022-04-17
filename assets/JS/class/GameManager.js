import CarManager from "./CarManager.js";
import PreciousManager from "./PreciousManager.js";
import dataGameAndLevelManager from "./DataOfGameManager.js";
import RoadManager from "./RoadManager.js";

class GameManager {
   constructor(utils) {
      this.scoreTarget = document.getElementById("score");
      this.lifeTarget = document.getElementById("life");
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 500;
      this.canvas.height = 690;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      this.preciousManager = new PreciousManager(this.ctx, this.images.precious.precious_1);
      this.carManager = new CarManager(this.images.cars.red_car, this.ctx);
      this.roadManager = new RoadManager(
         this.images.roads.road_1,
         this.images.roads.road_2,
         this.ctx
      );
      this.road_chunk_1_y = 0;
      this.road_chunk_2_y = -690;
      this.timerId = null;
   }

   initGame() {
      this.utils.insertInHTMLTarget(dataGameAndLevelManager.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(dataGameAndLevelManager.life, this.lifeTarget);
      this.onOff("on");
   }

   gameLoop() {
      this.ctx.clearRect(0, 0, 500, 690);
      this.preciousManager.createPrecious(dataGameAndLevelManager.loopStep);
      this.roadManager.createRoad();
      this.carManager.createCar();

      this.timerId = window.requestAnimationFrame(this.gameLoop.bind(this), 50);
   }

   onOff(switchState) {
      switch (switchState) {
         case "on":
            this.gameLoop();
            break;
         case "off":
            window.cancelAnimationFrame(this.timerId);
            break;
         default:
            throw Error(`Bad switchState, given: ${swithState}`);
      }
   }
}

export default GameManager;
