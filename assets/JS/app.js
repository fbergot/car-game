import DataOfGameManager from "./class/DataOfGameManager.js";
import GameManager from "./class/GameManager.js";
import * as utils from "./utils.js";

const dataGameAndLevelManager = new DataOfGameManager();
const gameManager = new GameManager(dataGameAndLevelManager, utils);

gameManager.initGame();
