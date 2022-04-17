import DataOfGameAndLevel from "./DataOfGameManager.js";

class CarManager {
   constructor(carImage, ctx) {
      this.carImage = carImage;
      this.ctx = ctx;
      this.x_carMin = 115;
      this.x_carMax = 245;
      document.addEventListener("keydown", this.carMovements.bind(this), false);
   }

   carMovements(e) {
      if (
         (e.key == "Right" || e.key == "ArrowRight") &&
         DataOfGameAndLevel.xCar === this.x_carMin
      ) {
         DataOfGameAndLevel.xCar = this.x_carMax;
      } else if (
         (e.key == "Left" || e.key == "ArrowLeft") &&
         DataOfGameAndLevel.xCar === this.x_carMax
      ) {
         DataOfGameAndLevel.xCar = this.x_carMin;
      }
   }

   createCar() {
      this.ctx.drawImage(
         this.carImage,
         DataOfGameAndLevel.xCar,
         DataOfGameAndLevel.yCar,
         DataOfGameAndLevel.xCar_length,
         DataOfGameAndLevel.yCar_length
      );
   }
}

export default CarManager;
