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
   collisionDetection(object, index, arrayOfObjects) {
      if (
         object.x >= DataOfGameAndLevel.xCar &&
         object.x <= DataOfGameAndLevel.xCar + DataOfGameAndLevel.xCar_length &&
         object.y >= DataOfGameAndLevel.yCar &&
         object.y <= DataOfGameAndLevel.yCar + DataOfGameAndLevel.yCar_length
      ) {
         arrayOfObjects.splice(index, 1);
         DataOfGameAndLevel.scoreInc();
         insertInHTMLTarget(DataOfGameAndLevel.score, "#score");
      }
   }

   generatePrecious() {
      this.prevYInterval = -400;

      let i;
      const dataLevel = DataOfGameAndLevel.currentLevelData();
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
         this.#alreadyGenerate++;
      }

      dataLevel.precious = precious;
   }

   /**
    * Create Y random coord for all precious
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
    * Create X coord for all precious (choice between [165, 300])
    * @param {*} values
    * @returns {number}
    */
   choiceValueLeftOrRight_X(values) {
      return values[Math.floor(Math.random() + 0.5)];
   }
}

export default PreciousManager;
