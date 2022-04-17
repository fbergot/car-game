class LevelManager {
   #_currentLevelData;
   #_levelsData;

   constructor() {
      this.#_levelsData = [
         {
            name: "Niveau 1",
            scoreTrigger: 0,
            loopStep: 15,
            precious: 10,
            barriers: 10,
         },
         {
            name: "Niveau 2",
            scoreTrigger: 5,
            loopStep: 20,
            precious: 15,
            barriers: 15,
         },
         {
            name: "Niveau 3",
            scoreTrigger: 10,
            loopStep: 25,
            precious: 20,
            barriers: 20,
         },
      ];
      this.#_currentLevelData = this.#_levelsData[0];
   }

   analyzeScoreToSetLevel(score) {
      this.#_levelsData.forEach((levelData, index) => {
         if (levelData.scoreTrigger === score) {
            this.loopStep = levelData.loopStep;
         }
      });
   }

   get currentLevelData() {
      return this.#_currentLevelData;
   }
}

export default LevelManager;
