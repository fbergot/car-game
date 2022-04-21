class LevelManager {
   #indexLevel;
   #_currentLevelData;

   constructor() {
      this.levelsData = [
         {
            name: "Niveau 1",
            scoreTrigger: 8,
            preciousNumber: 20,
            precious: [],
            loopStep: 10,
            barriers: 10,
         },
         {
            name: "Niveau 2",
            scoreTrigger: 16,
            preciousNumber: 15,
            precious: [],
            loopStep: 20,
            barriers: 15,
         },
         {
            name: "Niveau 3",
            scoreTrigger: 20,
            preciousNumber: 15,
            precious: [],
            loopStep: 25,
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
      console.log(this.#_currentLevelData.name);
      this.levelsData.forEach((levelData, index) => {
         if (levelData.scoreTrigger * this.stepForScore === score) {
            this.#_currentLevelData = this.levelsData[++this.#indexLevel];
            this.loopStep = this.#_currentLevelData.loopStep;
         }
      });
   }

   currentLevelData() {
      return this.#_currentLevelData;
   }

   loadDataOfLevel() {}
}

export default LevelManager;
