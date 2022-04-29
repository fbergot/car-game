import Factory from "./factory/Factory.js";
import { dataOfGameManager as DGLM } from "./DataOfGameManager.js";

class RoadManager {
   constructor(road1, road2, ctx) {
      this.road1 = road1;
      this.road2 = road2;
      this.ctx = ctx;
      this.road_chunk_1_y = 0;
      this.road_chunk_2_y = -690;
      this.controlAndUpdateData = Factory._getFactoryInst().getGameInstance("control", {});
   }

   createRoad() {
      this.road_chunk_1_y += DGLM.loopStep;
      this.road_chunk_2_y += DGLM.loopStep;

      switch (true) {
         case this.road_chunk_1_y >= 690:
            this.road_chunk_1_y -= 2 * 690;
            break;
         case this.road_chunk_2_y >= 690:
            this.road_chunk_2_y -= 2 * 690;
            this.controlAndUpdateData.control();
      }

      this.ctx.drawImage(this.road1, 0, this.road_chunk_1_y);
      this.ctx.drawImage(this.road2, 0, this.road_chunk_2_y);
   }
}

export default RoadManager;
