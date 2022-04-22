import CarManager from "./CarManager.js";
import PreciousManager from "./PreciousManager.js";
import dataGameAndLevel from "./DataOfGameManager.js";
import RoadManager from "./RoadManager.js";
import { insertInHTMLTarget } from "../utils.js";
import ControlAndUpdateData from "./ControlAndUpdateData.js";
import Observer from "./observer/Observer.js";
import DataOfGameManager from "./DataOfGameManager.js";

class GameManager {
   constructor(utils) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 500;
      this.canvas.height = 690;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      this.preciousManager = new PreciousManager(this.images.precious.precious_1, this.ctx);
      this.preciousManager.update = this.carManager = new CarManager(
         this.images.cars.red_car,
         this.ctx
      );
      this.roadManager = new RoadManager(
         this.images.roads.road_1,
         this.images.roads.road_2,
         this.ctx
      );
      this.end = false;
   }

   initGame() {
      this.utils.insertInHTMLTarget(dataGameAndLevel.score, "#score");
      this.utils.insertInHTMLTarget(dataGameAndLevel.life, "#life");
      dataGameAndLevel.loadDataOfLevel(
         this.preciousManager.generatePrecious.bind(this.preciousManager)
      );
      dataGameAndLevel.generateRandomPrecious();

      Observer.subscribe(() => {
         this.on();
      }, "on");

      Observer.subscribe(() => {
         this.off.bind(this)();
      }, "off");

      Observer.trigger("on");
   }

   /**
    * Recursive game loop
    */
   gameLoop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.roadManager.createRoad();
      this.preciousManager.createPrecious();
      this.carManager.createCar();
      ControlAndUpdateData.control();

      if (this.end) return;
      window.requestAnimationFrame(() => this.gameLoop());
   }

   on() {
      this.gameLoop();
   }

   off() {
      this.end = true;
   }

   update() {
      dataGameAndLevel.scoreInc();
      insertInHTMLTarget(dataGameAndLevel.score, "#score");
   }
}

export default GameManager;
