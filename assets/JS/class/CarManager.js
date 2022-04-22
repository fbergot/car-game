import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";

class CarManager {
   constructor(carImage, ctx) {
      this.carImage = carImage;
      this.ctx = ctx;
      this.x_carMin = 120;
      this.x_carMax = 258;
      document.addEventListener("keydown", this.carMovements.bind(this), false);
   }

   carMovements(e) {
      if ((e.key == "Right" || e.key == "ArrowRight") && DGLM.xCar === this.x_carMin) {
         DGLM.xCar = this.x_carMax;
      } else if ((e.key == "Left" || e.key == "ArrowLeft") && DGLM.xCar === this.x_carMax) {
         DGLM.xCar = this.x_carMin;
      }
   }

   createCar() {
      this.ctx.drawImage(
         this.carImage,
         DGLM.xCar,
         DGLM.yCar,
         DGLM.xCar_length,
         DGLM.yCar_length
      );
   }
}

export default CarManager;
