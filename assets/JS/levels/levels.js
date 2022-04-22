const easyLevel = [
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

const mediumLevel = [
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

const hardLevel = [
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

/**
 * @param {string} level
 * @returns {{name: number, preciousNumber: number, scoreTrigger: number, precious: [], loopStep: number, barriers: number,}[]}
 */
export const selectLevel = (level) => {
   switch (level) {
      case "easy":
         return easyLevel;
      case "medium":
         return mediumLevel;
      case "hard":
         return hardLevel;
      default:
         throw Error(`Bad level, given: ${level}`);
   }
};
