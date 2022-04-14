class DataOfGameManager {
   #_loopSpeed;
   #_score;
   #_life;
   #_stepForSpeed;
   #_stepForScore;

   constructor() {
      this.#_loopSpeed = 40;
      this.#_score = 0;
      this.#_life = 3;
      this.#_stepForSpeed = 20;
      this.#_stepForScore = 10;
   }

   get loopSpeed() {
      return this.#_loopSpeed;
   }

   loopSpeedAdjust(Switch) {
      if (Switch === "moreSpeed") this.#_loopSpeed -= this.#_stepForSpeed;
      else if (Switch === "lessSpeed") this.#_loopSpeed += this.#_stepForSpeed;
      else throw Error(`Bad switch. given: ${Switch}, accepted: moreSpeed or lessSpeed`);
   }

   get score() {
      return this.#_score;
   }

   scoreAdjust() {
      this.#_score += this.#_stepForScore;
   }

   get life() {
      return this.#_life;
   }

   lifeDecrement() {
      this.#_life -= 1;
   }
}

export default DataOfGameManager;
