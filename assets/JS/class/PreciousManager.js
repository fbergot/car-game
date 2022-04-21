import DataOfGameAndLevel from "./DataOfGameManager.js";
import { insertInHTMLTarget } from "../utils.js";

class PreciousManager {
   #preciousImg;
   #ctx;
   #_preciousPositions;
   #preciousX_length;
   #preciousY_length;
   #alreadyGenerate;

   constructor(preciousImg, ctx) {
      this.#preciousImg = preciousImg;
      this.#ctx = ctx;
      this.#preciousX_length = 35;
      this.#preciousY_length = 35;
      this.rangeX = [165, 300];
      this.rangeY = [-1500, -10000];
      this.prevY = 0;
   }

   createPrecious() {
      DataOfGameAndLevel.currentLevelData().precious.forEach(
         (precious, index, arrayOfPrecious) => {
            precious.y += DataOfGameAndLevel.loopStep;
            this.#ctx.drawImage(
               this.#preciousImg,
               precious.x,
               precious.y,
               this.#preciousX_length,
               this.#preciousY_length
            );
            this.collisionDetection(precious, index, arrayOfPrecious);
         }
      );
   }

   /**
    * @param {{x: number, y: number}} precious
    */
   collisionDetection(precious, index, arrayOfPrecious) {
      if (
         precious.x >= DataOfGameAndLevel.xCar &&
         precious.x <= DataOfGameAndLevel.xCar + DataOfGameAndLevel.xCar_length &&
         precious.y >= DataOfGameAndLevel.yCar &&
         precious.y <= DataOfGameAndLevel.yCar + DataOfGameAndLevel.yCar_length
      ) {
         arrayOfPrecious.splice(index, 1);
         DataOfGameAndLevel.scoreInc();
         insertInHTMLTarget(DataOfGameAndLevel.score, "#score");
      }
   }

   /**
    * @param {number} numberOfPrecious
    * @param {number[]} lRPositions
    * @memberof PreciousManager
    */
   generatePrecious() {
      const precious = [
         {
            x: this.randomValue(this.rangeX),
            y: -500,
         },
      ];
      const dataLevel = DataOfGameAndLevel.currentLevelData();
      let i;

      for (i = 0; i < dataLevel.preciousNumber; i++) {
         precious.push({
            x: this.randomValue(this.rangeX),
            y: this.randomInRange(this.rangeY[0], this.rangeY[1], precious),
         });
         this.#alreadyGenerate++;
      }

      dataLevel.precious = precious;
   }

   /**
    *
    *
    * @param {*} min
    * @param {*} max
    */
   randomInRange(min, max, precious) {
      return Math.floor(Math.random() * (max - min) + min) + 800;
   }

   randomValue(values) {
      return values[Math.floor(Math.random() + 0.5)];
   }
}

export default PreciousManager;
