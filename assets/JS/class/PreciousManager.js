import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";
import { insertInHTMLTarget } from "../utils.js";

class PreciousManager {
   #preciousImg;
   #ctx;
   #preciousX_length;
   #preciousY_length;

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
      DGLM.currentLevelData().precious.forEach((precious, index, arrayOfPrecious) => {
         this.collisionDetection(precious, function () {
            arrayOfPrecious.splice(index, 1);
            DGLM.scoreInc();
            insertInHTMLTarget(DGLM.score, "#score");
         });
         precious.y += DGLM.loopStep;
         this.#ctx.drawImage(
            this.#preciousImg,
            precious.x,
            precious.y,
            this.#preciousX_length,
            this.#preciousY_length
         );
         if (precious.y > 690) {
            DGLM.nbPreciousCreated += 1;
            arrayOfPrecious.splice(index, 1);
         }
      });
   }
   /**
    * @param {{}} object
    * @param {number} index
    * @param {{}[]} arrayOfObjects
    */
   collisionDetection(object, funcForUpdate) {
      if (
         object.x >= DGLM.xCar &&
         object.x <= DGLM.xCar + DGLM.xCar_length &&
         object.y >= DGLM.yCar &&
         object.y <= DGLM.yCar + DGLM.yCar_length
      ) {
         funcForUpdate();
      }
   }

   generatePrecious() {
      this.prevYInterval = -400;
      let i;

      const dataLevel = DGLM.currentLevelData();
      const precious = [
         {
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: -600,
         },
      ];

      for (i = 0; i < dataLevel.preciousNumber; i++) {
         precious.push({
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: this.randomInRange(this.rangeY[0], this.rangeY[1]),
         });
      }

      dataLevel.precious = precious;
   }

   /**
    * @param {number} min
    * @param {number} max
    * @returns {number}
    */
   randomInRange(min, max) {
      this.prevYInterval -= -400;

      return Math.floor(
         Math.random() * (max - this.prevYInterval - min) + (min - this.prevYInterval)
      );
   }

   /**
    * Create X coord for all precious (choices: [165, 300])
    * @param {*} values
    * @returns {number}
    */
   choiceValueLeftOrRight_X(values) {
      return values[Math.floor(Math.random() + 0.5)];
   }
}

export default PreciousManager;
