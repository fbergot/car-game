import CarManager from "./CarManager.js";
import PreciousManager from "./PreciousManager.js";
import dataGameAndLevel from "./DataOfGameManager.js";
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
      this.preciousManager = new PreciousManager(this.images.precious.precious_1, this.ctx);
      this.carManager = new CarManager(this.images.cars.red_car, this.ctx);
      this.roadManager = new RoadManager(
         this.images.roads.road_1,
         this.images.roads.road_2,
         this.ctx
      );
      this.timerId = null;
   }

   initGame() {
      this.utils.insertInHTMLTarget(dataGameAndLevel.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(dataGameAndLevel.life, this.lifeTarget);
      this.onOff("on");
   }

   gameLoop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.roadManager.createRoad();
      this.preciousManager.createPrecious();
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
