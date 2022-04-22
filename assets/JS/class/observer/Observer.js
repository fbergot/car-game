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
      if (this.observers[type].length != 0) {
         this.observers[type][0]();
      }
   }
}

export default new Observer();
