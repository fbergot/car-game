import CarManager from "../CarManager.js";
import PreciousManager from "../PreciousManager.js";
import BarriersManager from "../BarriersManager.js";
import RoadManager from "../RoadManager.js";
import Observer from "../observer/Observer.js";
import ControlAndUpdateData from "../ControlAndUpdateData.js";

class Factory {
   static #instance;
   #gameInstances;

   static _getFactoryInst() {
      if (!this.#instance) {
         this.#instance = new Factory();
         return this.#instance;
      }
      return this.#instance;
   }

   constructor() {
      this.#gameInstances = {};
   }

   getGameInstance(type, params) {
      switch (type) {
         case "precious":
            if ("precious" in this.#gameInstances) return this.#gameInstances.precious;
            else this.#gameInstances.precious = new PreciousManager(params.img, params.ctx);
            return this.#gameInstances.precious;

         case "car":
            if ("car" in this.#gameInstances) return this.#gameInstances.car;
            else this.#gameInstances.car = new CarManager(params.img, params.ctx);
            return this.#gameInstances.car;

         case "barrier":
            if ("barrier" in this.#gameInstances) return this.#gameInstances.barrier;
            else this.#gameInstances.barrier = new BarriersManager(params.img, params.ctx);
            return this.#gameInstances.barrier;

         case "road":
            if ("road" in this.#gameInstances) return this.#gameInstances.road;
            else
               this.#gameInstances.road = new RoadManager(
                  params.img1,
                  params.img2,
                  params.ctx
               );
            return this.#gameInstances.road;

         case "observer":
            if ("observer" in this.#gameInstances) return this.#gameInstances.observer;
            else this.#gameInstances.observer = new Observer();
            return this.#gameInstances.observer;

         case "control":
            if ("control" in this.#gameInstances) return this.#gameInstances.control;
            else this.#gameInstances.control = new ControlAndUpdateData();
            return this.#gameInstances.control;

         default:
            throw Error(`Bad type, given: ${type}`);
      }
   }
}

export default Factory;
