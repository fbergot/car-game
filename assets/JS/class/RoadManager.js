import ControlAndUpdateData from "./ControlAndUpdateData.js";
import DataGameAndLevelManager from "./DataOfGameManager.js";

class RoadManager {
   constructor(road1, road2, ctx) {
      this.road1 = road1;
      this.road2 = road2;
      this.ctx = ctx;
      this.road_chunk_1_y = 0;
      this.road_chunk_2_y = -690;
   }

   createRoad() {
      this.road_chunk_1_y += DataGameAndLevelManager.loopStep;
      this.road_chunk_2_y += DataGameAndLevelManager.loopStep;

      if (this.road_chunk_1_y >= 690) this.road_chunk_1_y -= 2 * 690;
      if (this.road_chunk_2_y >= 690) {
         this.road_chunk_2_y -= 2 * 690;
         ControlAndUpdateData.control();
      }

      this.ctx.drawImage(this.road1, 0, this.road_chunk_1_y);
      this.ctx.drawImage(this.road2, 0, this.road_chunk_2_y);
   }
}

export default RoadManager;
