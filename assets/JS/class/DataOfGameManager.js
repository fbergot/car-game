import LevelManager from "./LevelManager.js";

class DataOfGameManager extends LevelManager {
   #_score;
   #_life;
   #_stepForScore;
   #_loopStep;
   #_xCar;

   constructor() {
      super();
      this.#_score = 0;
      this.#_life = 3;
      this.#_stepForScore = 10;
      this.#_loopStep = 10;
      this.#_xCar = 105;
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
}

export default new DataOfGameManager();
