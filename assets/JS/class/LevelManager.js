import ControlAndUpdateData from "./ControlAndUpdateData.js";

class LevelManager {
   #indexLevel;
   #_currentLevelData;

   constructor() {
      this.levelsData = [
         {
            name: 1,
            preciousNumber: 15,
            scoreTrigger: 100,
            precious: [],
            loopStep: 10,
            barriers: 10,
         },
         {
            name: 2,
            preciousNumber: 15,
            scoreTrigger: 150,
            precious: [],
            loopStep: 14,
            barriers: 15,
         },
         {
            name: 3,
            preciousNumber: 15,
            scoreTrigger: 200,
            precious: [],
            loopStep: 18,
            barriers: 20,
         },
         {
            name: 4,
            preciousNumber: 15,
            scoreTrigger: 250,
            precious: [],
            loopStep: 22,
            barriers: 20,
         },
         {
            name: 5,
            preciousNumber: 15,
            scoreTrigger: 300,
            precious: [],
            loopStep: 26,
            barriers: 20,
         },
      ];
      this.#indexLevel = 0;
      this.#_currentLevelData = this.levelsData[this.#indexLevel];
      this.generateRandomPrecious;
   }

   /**
    * @param {number} score
    */
   analyzeScoreToSetLevel(score) {
      this.levelsData.forEach((levelData, index, sourceArray) => {
         if (levelData.scoreTrigger === score) {
            if (this.#indexLevel < sourceArray.length - 1) {
               this.#indexLevel++;
               this.#_currentLevelData = this.levelsData[this.#indexLevel];
               this.loopStep = this.#_currentLevelData.loopStep;
               levelData.preciousNumber -= 1;
               this.generateRandomPrecious();
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
      this.generateRandomPrecious = generateFunction;
   }

   controlLevelInProgress() {}
}

export default LevelManager;
