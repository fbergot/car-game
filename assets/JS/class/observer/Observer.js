class Observer {
   constructor() {
      this.observers = {
         on: [],
         off: [],
         generatePrecious: [],
      };
   }

   /**
    * @param {() => void} func
    * @param {string} type
    */
   subscribe(func, type) {
      this.observers[type].push(func);
   }

   /**
    * @param {string} type
    */
   trigger(type) {
      console.log(type);
      if (type in this.observers) {
         this.observers[type].forEach((func) => {
            func();
         });
      }
   }
}

export default Observer;
