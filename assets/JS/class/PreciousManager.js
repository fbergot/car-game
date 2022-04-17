import DataOfGameAndLevel from "./DataOfGameManager.js";

class PreciousManager {
   #_preciousPositions;

   constructor(ctx, precious) {
      this.ctx = ctx;
      this.precious = precious;
      this.preciousX_length = 35;
      this.preciousY_length = 35;
      this.#_preciousPositions = [
         { x: 165, y: 500 },
         { x: 300, y: 50 },
      ];
   }

   collisionDetection() {
      this.#_preciousPositions.forEach((precious) => {
         if (
            precious.x >= DataOfGameAndLevel.xCar &&
            precious.x <= DataOfGameAndLevel.xCar + DataOfGameAndLevel.xCar_length &&
            precious.y >= DataOfGameAndLevel.yCar &&
            precious.y <= DataOfGameAndLevel.yCar + DataOfGameAndLevel.yCar_length
         ) {
            alert("ok");
         }
      });
   }

   createPrecious(loopStep) {
      this.#_preciousPositions.forEach((precious) => {
         precious.y += loopStep;
         this.ctx.drawImage(
            this.precious,
            precious.x,
            precious.y,
            this.preciousX_length,
            this.preciousY_length
         );
      });
      this.collisionDetection();
   }
}

export default PreciousManager;
