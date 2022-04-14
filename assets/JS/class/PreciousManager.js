class PreciousManager {
   #_preciousPositions;

   constructor(ctx, precious) {
      this.ctx = ctx;
      this.precious = precious;
      this.#_preciousPositions = [
         { x: 150, y: 200 },
         { x: 250, y: 50 },
      ];
   }
   // TODO detect collision...

   createPrecious(loopStep) {
      this.#_preciousPositions.forEach((precious) => {
         precious.y += loopStep;
         this.ctx.drawImage(this.precious, precious.x, precious.y, 35, 35);
      });
   }
}

export default PreciousManager;
