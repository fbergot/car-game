import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";
import { insertInHTMLTarget } from "../utils.js";

// TODO
class BarriersManager {
   #rockImg;
   #ctx;
   #rockX_length;
   #rockY_length;

   constructor(rockImg, ctx) {
      this.#rockImg = rockImg;
      this.#ctx = ctx;
      this.#rockX_length = 35;
      this.#rockY_length = 35;
      this.rangeX = [165, 300];
      this.rangeY = [-1500, -10000];
      this.prevInterval = 0;
   }

   createBarriers() {
      DGLM.currentLevelData().barriers.forEach((barrier, index, arrayOfBarriers) => {
         this.collisionDetection(barrier, function () {
            arrayOfBarriers.splice(index, 1);
            DGLM.lifeDecrement();
            insertInHTMLTarget(DGLM.life, "#life");
         });
         barrier.y += DGLM.loopStep;
         this.#ctx.drawImage(
            this.#rockImg,
            barrier.x,
            barrier.y,
            this.#rockX_length,
            this.#rockY_length
         );
         if (barrier.y > 690) {
            DGLM.nbBarriersCreated += 1;
            arrayOfBarriers.splice(index, 1);
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

   generateBarriers() {
      this.prevYInterval = -400;
      let i;

      const dataLevel = DGLM.currentLevelData();
      const barriers = [
         {
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: -600,
         },
      ];

      for (i = 0; i < dataLevel.barriersNumber; i++) {
         barriers.push({
            x: this.choiceValueLeftOrRight_X(this.rangeX),
            y: this.randomInRange(this.rangeY[0], this.rangeY[1]),
         });
      }

      dataLevel.barriers = barriers;
      console.log(barriers);
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

export default BarriersManager;
