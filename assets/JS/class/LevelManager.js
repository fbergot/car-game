import { selectLevel } from "../levels/levels.js";

class LevelManager {
   #indexLevel;
   #_currentLevelData;

   constructor() {
      this.levelsData = [...selectLevel("easy")];
      this.#indexLevel = 0;
      this.#_currentLevelData = this.levelsData[this.#indexLevel];
      this.generateRandomElements = [];
   }

   /**
    * @param {number} score
    */
   analyzeScoreToSetLevel(score) {
      this.levelsData.forEach((levelData, _, sourceArray) => {
         if (levelData.scoreTrigger === score) {
            if (this.#indexLevel < sourceArray.length - 1) {
               this.#indexLevel++;
               this.#_currentLevelData = this.levelsData[this.#indexLevel];
               this.loopStep = this.#_currentLevelData.loopStep;
               levelData.preciousNumber -= 1;
               this.generateRandomElements.forEach((func) => {
                  func();
               });
               return;
            }
            alert("bien joué !");
         }
      });
   }

   currentLevelData() {
      return this.#_currentLevelData;
   }

   /**
    * @param {() => void} generateFunction
    */
   loadDataOfLevel(generateFunction) {
      this.generateRandomElements.push(generateFunction);
   }

   controlLevelInProgress() {}
}

export default LevelManager;
