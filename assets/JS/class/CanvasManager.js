class CanvasManager {
   constructor(idOfCanvastarget) {
      this._canvas = document.getElementById(idOfCanvastarget);
      this._ctx = this._canvas.getContext("2d");
   }

   get canvas() {
      return this._canvas;
   }

   get ctx() {
      return this._ctx;
   }
}

export default CanvasManager;
