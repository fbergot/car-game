import LevelManager from "./LevelManager.js";

class DataOfGameManager extends LevelManager {
   #_score;
   #_life;
   /** @var #_loopStep: control speed of road, barriers and precious.. */
   #_loopStep;
   #_xCar;
   #_xCar_length;
   #_yCar;
   #_yCar_length;
   #_nbPreciousCreated;

   constructor() {
      super();
      this.#_score = 0;
      this._stepForScore = 10;
      this.#_life = 3;
      this.#_loopStep = this.#_loopStep || this.currentLevelData().loopStep;
      this.#_xCar = 120;
      this.#_xCar_length = 120;
      this.#_yCar = 620;
      this.#_yCar_length = 80;
      this.#_nbPreciousCreated = 0;
      this.timerId = 0;
   }

   get score() {
      return this.#_score;
   }

   scoreInc() {
      this.#_score += this._stepForScore;
      this.analyzeScoreToSetLevel(this.#_score);
   }

   get life() {
      return this.#_life;
   }

   lifeDecrement() {
      this.#_life -= 1;
   }

   get stepForScore() {
      return this._stepForScore;
   }

   get loopStep() {
      return this.#_loopStep;
   }

   set loopStep(newloopStep) {
      this.#_loopStep = newloopStep;
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

   get nbPreciousCreated() {
      return this.#_nbPreciousCreated;
   }

   set nbPreciousCreated(value) {
      return (this.#_nbPreciousCreated = value);
   }
}

export const dataOfGameManager = new DataOfGameManager();
