class LevelManager {
   constructor() {
      this.levelsData = [
         {
            name: "Niveau 1",
            scoreTrigger: 5,
            loopStep: 15,
         },
         {
            name: "Niveau 2",
            scoreTrigger: 10,
            loopStep: 20,
         },
         {
            name: "Niveau 3",
            scoreTrigger: 15,
            loopStep: 25,
         },
      ];
   }

   analyzeScoreToSetLevel(score) {
      this.levelsData.forEach((levelData, index) => {
         if (levelData.scoreTrigger === score) {
            this.loopStep = levelData.loopStep;
         }
      });
   }
}

export default LevelManager;
