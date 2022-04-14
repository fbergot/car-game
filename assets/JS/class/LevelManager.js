class LevelManager {
   constructor() {
      this.levelsScoresTriggers = [
         { "level 1": 5, loopStep: 15 },
         { "level 2": 10, loopStep: 20 },
         { "level 3": 15, loopStep: 25 },
      ];
   }

   analyzeScoreToSetLevel(score) {
      this.levelsScoresTrigger.forEach((dataLevel, index) => {
         if (dataLevel[`level ${index}`] === score) {
            this.loopStep = dataLevel.loopStep;
         }
      });
   }
}

export default LevelManager;
