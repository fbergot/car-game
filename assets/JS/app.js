import DataOfGameManager from "./class/DataOfGameManager.js";
import GameManager from "./class/GameManager.js";
import * as utils from "./utils.js";

const dataOfGameManager = new DataOfGameManager();
const gameManager = new GameManager(dataOfGameManager, utils);

gameManager.initGame();
