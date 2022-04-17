import DataOfGameAndLevel from "./DataOfGameManager.js";

class PreciousManager {
   #_preciousPositions;

   constructor(preciousImg, ctx) {
      this.preciousImg = preciousImg;
      this.ctx = ctx;
      this.preciousX_length = 35;
      this.preciousY_length = 35;
      this.#_preciousPositions = [
         { x: 165, y: 400 },
         { x: 300, y: 50 },
      ];
   }

   collisionDetection(precious) {
      if (
         precious.x >= DataOfGameAndLevel.xCar &&
         precious.x <= DataOfGameAndLevel.xCar + DataOfGameAndLevel.xCar_length &&
         precious.y >= DataOfGameAndLevel.yCar &&
         precious.y <= DataOfGameAndLevel.yCar + DataOfGameAndLevel.yCar_length
      ) {
         alert("ok");
      }
   }

   createPrecious() {
      this.#_preciousPositions.forEach((precious) => {
         precious.y += DataOfGameAndLevel.loopStep;
         this.ctx.drawImage(
            this.preciousImg,
            precious.x,
            precious.y,
            this.preciousX_length,
            this.preciousY_length
         );
         this.collisionDetection(precious);
      });
   }
}

export default PreciousManager;
