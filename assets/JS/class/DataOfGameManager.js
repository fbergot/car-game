import LevelManager from "./LevelManager.js";

class DataOfGameManager extends LevelManager {
   #_score;
   #_life;
   #_stepForScore;
   // control speed of road
   #_loopStep;
   // data car
   #_xCar;
   #_xCar_length;
   #_yCar;
   #_yCar_length;

   constructor() {
      super();
      this.#_score = 0;
      this.#_life = 3;
      this.#_stepForScore = 10;
      this.#_loopStep = 8;
      this.#_xCar = 120;
      this.#_xCar_length = 120;
      this.#_yCar = 620;
      this.#_yCar_length = 80;
   }

   get loopStep() {
      return this.#_loopStep;
   }

   set loopStep(newloopStep) {
      this.#_loopStep = newloopStep;
   }

   get score() {
      return this.#_score;
   }

   scoreIncAndAnalyzeDataLevel() {
      this.#_score += this.#_stepForScore;
      this.analyzeScoreToSetLevel(this.#_score);
   }

   get life() {
      return this.#_life;
   }

   lifeDecrement() {
      this.#_life -= 1;
   }

   get xCar() {
      return this.#_xCar;
   }

   set xCar(newValue) {
      this.#_xCar = newValue;
   }

   get xCar_length() {
      return this.#_xCar_length;
   }

   get yCar() {
      return this.#_yCar;
   }

   get yCar_length() {
      return this.#_yCar_length;
   }
}

export default new DataOfGameManager();
