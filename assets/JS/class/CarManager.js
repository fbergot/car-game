import DataOfGameAndLevelManager from "./DataOfGameManager.js";

class CarManager {
   constructor(carImage, ctx) {
      this.carImage = carImage;
      this.ctx = ctx;
      this.x_carMin = 105;
      this.x_carMax = 245;
      this.y_car = 620;
      document.addEventListener("keydown", this.carMovements.bind(this), false);
   }

   carMovements(e) {
      if (
         (e.key == "Right" || e.key == "ArrowRight") &&
         DataOfGameAndLevelManager.xCar === this.x_carMin
      ) {
         DataOfGameAndLevelManager.xCar = this.x_carMax;
      } else if (
         (e.key == "Left" || e.key == "ArrowLeft") &&
         DataOfGameAndLevelManager.xCar === this.x_carMax
      ) {
         DataOfGameAndLevelManager.xCar = this.x_carMin;
      }
   }

   createCar() {
      this.ctx.drawImage(this.carImage, DataOfGameAndLevelManager.xCar, this.y_car);
   }
}

export default CarManager;
