import DataOfGameAndLevel from "./DataOfGameManager.js";
import { insertInHTMLTarget } from "../utils.js";

class PreciousManager {
   #preciousImg;
   #ctx;
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
      this.prevYInterval = 0;
   }

   createPrecious() {
      DataOfGameAndLevel.currentLevelData().precious.forEach(
         (precious, index, arrayOfPrecious) => {
            this.collisionDetection(precious, index, arrayOfPrecious);
            precious.y += DataOfGameAndLevel.loopStep;
            this.#ctx.drawImage(
               this.#preciousImg,
               precious.x,
               precious.y,
               this.#preciousX_length,
               this.#preciousY_length
            );
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

   generatePrecious() {
      const precious = [
         {
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: -500,
         },
      ];
      const dataLevel = DataOfGameAndLevel.currentLevelData();
      let i;

      for (i = 0; i < dataLevel.preciousNumber; i++) {
         precious.push({
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: this.randomInRange(this.rangeY[0], this.rangeY[1], precious),
         });
         this.#alreadyGenerate++;
      }
      dataLevel.precious = precious;
   }

   /**
    * @param {number} min
    * @param {number} max
    */
   randomInRange(min, max, precious) {
      this.prevYInterval -= -400;
      return Math.floor(
         Math.random() * (max - this.prevYInterval - min) + (min - this.prevYInterval)
      );
   }

   /**
    * @param {*} values
    * @returns {number}
    */
   choiceValueLeftOrRight_X(values) {
      return values[Math.floor(Math.random() + 0.5)];
   }
}

export default PreciousManager;
