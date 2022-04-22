import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";
import * as utils from "../utils.js";
import Factory from "./factory/Factory.js";

class ControlAndUpdateData {
   constructor() {
      this.observer = new Factory("observer");
      this.countRoadLoop = 0;
   }

   control() {
      if (
         DGLM.nbPreciousCreated + DGLM.score / 10 == DGLM.currentLevelData().preciousNumber &&
         DGLM.score < DGLM.currentLevelData().scoreTrigger
      ) {
         this.observer.trigger("off");
         alert("Perdu !");
      }
   }
}

export default ControlAndUpdateData;
