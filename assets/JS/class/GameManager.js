import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";
import {
   insertInHTMLTarget,
   buildLevelWindowAndCountBeforeStart as winCount,
} from "../utils.js";
import Factory from "./factory/Factory.js";

class GameManager {
   constructor(utils) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 500;
      this.canvas.height = 690;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      this.controlAndUpdateData = new Factory("control", {});
      this.observer = new Factory("observer", {});
      this.preciousManager = new Factory("precious", {
         img: this.images.precious.precious_1,
         ctx: this.ctx,
      });
      this.carManager = new Factory("car", { img: this.images.cars.red_car, ctx: this.ctx });
      this.barriersManager = new Factory("barrier", {
         img: this.images.barriers.rocks.rocks_1,
         ctx: this.ctx,
      });
      this.roadManager = new Factory("road", {
         img1: this.images.roads.road_1,
         img2: this.images.roads.road_2,
         ctx: this.ctx,
      });
      this.end = false;
   }

   initGame() {
      this.utils.insertInHTMLTarget(DGLM.score, "#score");
      this.utils.insertInHTMLTarget(DGLM.life, "#life");

      DGLM.loadDataOfLevel(this.preciousManager.generatePrecious.bind(this.preciousManager));
      DGLM.loadDataOfLevel(this.barriersManager.generateBarriers.bind(this.barriersManager));
      DGLM.generateRandomElements.forEach((func) => {
         func();
      });

      console.log(DGLM.generateRandomElements);
      this.observer.subscribe(() => {
         this.on();
      }, "on");

      this.observer.subscribe(() => {
         this.off();
      }, "off");

      winCount(3, document.querySelector(".container-canvas"), () => {
         this.observer.trigger("on");
      });
   }

   /**
    * Recursive game loop
    */
   gameLoop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.roadManager.createRoad();
      this.preciousManager.createPrecious();
      this.carManager.createCar();
      this.barriersManager.createBarriers();
      // this.controlAndUpdateData.control();

      if (this.end) return;
      window.requestAnimationFrame(this.gameLoop.bind(this));
   }

   on() {
      this.gameLoop();
   }

   off() {
      this.end = true;
   }
}

export default GameManager;
