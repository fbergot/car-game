class Observer {
   constructor() {
      this.observers = {
         on: [],
         off: [],
      };
   }

   subscribe(func, type) {
      this.observers[type].push(func);
   }

   trigger(type) {
      if (this.observers[type].length) {
         this.observers[type].forEach((func) => {
            func();
         });
         return;
      }
      throw Error("No callback registered");
   }
}

export default new Observer();
