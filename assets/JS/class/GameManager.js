class GameManager {
   constructor(canvasManager, dataOfGameManager, utils) {
      this.scoreTarget = document.getElementById("score");
      this.lifeTarget = document.getElementById("life");
      this.canvasManager = canvasManager;
      this.dataOfGameManager = dataOfGameManager;
      this.utils = utils;
      this.images = this.utils.imagesBuilder();
      // car movements
      this.x_Car = 200;
   }

   initGame() {
      this.utils.insertInHTMLTarget(this.dataOfGameManager.score, this.scoreTarget);
      this.utils.insertInHTMLTarget(this.dataOfGameManager.life, this.lifeTarget);
      document.addEventListener("keydown", this.setCarMovements, false);

      //    this.gameLoop();
   }

   setCarMovements() {
      if (e.key == "Right" || e.key == "ArrowRight") {
         this.x_Car += 20;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
         this.x_Car -= 20;
      }
   }

   gameLoop() {
      console.log("test");
      setInterval(this.loop, dataOfGame.loopSpeed);
   }
}

export default GameManager;
