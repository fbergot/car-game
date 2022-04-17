class LevelManager {
   #_currentLevelData;
   #indexLevel;
   #_levelsData;

   constructor() {
      this.#_levelsData = [
         {
            name: "Niveau 1",
            scoreTrigger: 5,
            loopStep: 12,
            precious: 10,
            barriers: 10,
         },
         {
            name: "Niveau 2",
            scoreTrigger: 16,
            loopStep: 20,
            precious: 15,
            barriers: 15,
         },
         {
            name: "Niveau 3",
            scoreTrigger: 20,
            loopStep: 25,
            precious: 20,
            barriers: 20,
         },
      ];
      this.#indexLevel = 0;
      this.#_currentLevelData = this.#_levelsData[this.#indexLevel];
   }

   /**
    * @param {number} score
    */
   analyzeScoreToSetLevel(score) {
      this.#_levelsData.forEach((levelData, index) => {
         if (levelData.scoreTrigger * this.stepForScore === score) {
            this.#_currentLevelData = this.#_levelsData[++this.#indexLevel];
            this.loopStep = this.#_currentLevelData.loopStep;
         }
      });
   }

   get currentLevelData() {
      return this.#_currentLevelData;
   }
}

export default LevelManager;
