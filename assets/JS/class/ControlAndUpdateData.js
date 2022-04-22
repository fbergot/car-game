import DataOfGameManager from "./DataOfGameManager.js";
import * as utils from "../utils.js";
import Observer from "./observer/Observer.js";

class ControlAndUpdateData {
   constructor() {
      this.countRoadLoop = 0;
   }

   control() {
      if (
         DataOfGameManager.nbPreciousCreated + DataOfGameManager.score / 10 ==
            DataOfGameManager.currentLevelData().preciousNumber &&
         DataOfGameManager.score < DataOfGameManager.currentLevelData().scoreTrigger
      ) {
         Observer.trigger("off");
         alert("Perdu !");
      }
   }
}

export default new ControlAndUpdateData();
