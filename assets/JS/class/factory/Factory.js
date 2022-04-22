import CarManager from "../CarManager.js";
import PreciousManager from "../PreciousManager.js";
import BarriersManager from "../BarriersManager.js";
import RoadManager from "../RoadManager.js";
import Observer from "../observer/Observer.js";
import ControlAndUpdateData from "../ControlAndUpdateData.js";

class Factory {
   #instances;

   constructor(type, params) {
      this.#instances = {};

      switch (type) {
         case "precious":
            if ("precious" in this.#instances) return this.#instances.precious;
            else this.#instances.precious = new PreciousManager(params.img, params.ctx);
            return this.#instances.precious;

         case "car":
            if ("car" in this.#instances) return this.#instances.car;
            else this.#instances.car = new CarManager(params.img, params.ctx);
            return this.#instances.car;

         case "barrier":
            if ("barrier" in this.#instances) return this.#instances.barrier;
            else this.#instances.barrier = new BarriersManager(params.img, params.ctx);
            return this.#instances.barrier;

         case "road":
            if ("road" in this.#instances) return this.#instances.road;
            else this.#instances.road = new RoadManager(params.img1, params.img2, params.ctx);
            return this.#instances.road;

         case "observer":
            if ("observer" in this.#instances) return this.#instances.observer;
            else this.#instances.observer = new Observer();
            return this.#instances.observer;

         case "control":
            if ("control" in this.#instances) return this.#instances.control;
            else this.#instances.control = new ControlAndUpdateData();
            return this.#instances.control;

         default:
            throw Error(`Bad type, given: ${type}`);
      }
   }
}

export default Factory;
