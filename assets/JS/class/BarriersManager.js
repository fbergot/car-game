import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";
import { insertInHTMLTarget } from "../utils.js";

// TODO
class BarriersManager {
   #rockImg;
   #ctx;

   constructor(rockImg, ctx) {
      this.#rockImg = rockImg;
      this.#ctx = ctx;
   }
}

export default BarriersManager;
