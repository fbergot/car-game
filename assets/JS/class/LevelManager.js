class LevelManager {
   #indexLevel;
   #_currentLevelData;

   constructor() {
      this.levelsData = [
         {
            name: "Niveau 1",
            preciousNumber: 20,
            scoreTrigger: 100,
            precious: [],
            loopStep: 10,
            barriers: 10,
         },
         {
            name: "Niveau 2",
            preciousNumber: 15,
            scoreTrigger: 200,
            precious: [],
            loopStep: 15,
            barriers: 15,
         },
         {
            name: "Niveau 3",
            preciousNumber: 15,
            scoreTrigger: 300,
            precious: [],
            loopStep: 20,
            barriers: 20,
         },
      ];
      this.#indexLevel = 0;
      this.#_currentLevelData = this.levelsData[this.#indexLevel];
   }

   /**
    * @param {number} score
    */
   analyzeScoreToSetLevel(score) {
      console.log(score, this.stepForScore, this.levelsData[0].scoreTrigger);
      this.levelsData.forEach((levelData, index) => {
         if (levelData.scoreTrigger === score) {
            this.#_currentLevelData = this.levelsData[++this.#indexLevel];
            this.loopStep = this.#_currentLevelData.loopStep;
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
      generateFunction();
   }

   controlLevelInProgress() {}
}

export default LevelManager;
