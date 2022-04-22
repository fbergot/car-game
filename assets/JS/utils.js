/**
 * @param {string} path
 * @param {{width: number, height: number}} { width, height }
 * @returns {HTMLImageElement}
 */
const toBuildIMG = (path, { width, height }) => {
   const img = new Image(width, height);
   img.src = path;

   return img;
};

export const imagesBuilder = () => {
   return {
      roads: {
         road_1: toBuildIMG("assets/img/roads/road_1.jpg", { width: 100, height: 100 }),
         road_2: toBuildIMG("assets/img/roads/road_2.jpg", { width: 100, height: 100 }),
      },

      cars: {
         red_car: toBuildIMG("assets/img/cars/redCar.png", {
            width: 100,
            height: 100,
         }),
         yellow_car: toBuildIMG("assets/img/cars/yellowCar.png", {
            width: 100,
            height: 100,
         }),
      },

      barriers: {
         rocks: {
            rocks_1: toBuildIMG("assets/img/barriers/rock_1.png", {
               width: 100,
               height: 100,
            }),
            rocks_2: toBuildIMG("assets/img/barriers/rock_2.png", {
               width: 100,
               height: 100,
            }),
         },
      },

      precious: {
         precious_1: toBuildIMG("assets/img/precious/precious_1.png", {
            width: 100,
            height: 100,
         }),
         precious_2: toBuildIMG("assets/img/precious/precious_2.png", {
            width: 100,
            height: 100,
         }),
      },
   };
};

/**
 * @param {string} text
 * @param {HTMLElement} target
 */
export const insertInHTMLTarget = (text, tagOfTarget) => {
   document.querySelector(tagOfTarget).innerText = text;
};

/** ToDO ... */
export const buildAlertWindow = (text, parentHTML) => {};

export const buildLevelWindowAndCountBeforeStart = (level, parentHTML, startGame) => {
   const divContainer = document.createElement("div");

   function updateCount(count) {
      divContainer.innerHTML = `
         <div class='${count == "GO !" ? "rebound" : "norebound"} window'>
            <center>
               <h1 class='h1-count'>${count}</h1>
               <p>Niveau ${level} !!</p>
            </center>
         </div>
      `;
      parentHTML.appendChild(divContainer);
   }

   createCount(updateCount, startGame);
};

const createCount = (updateCount, startGame) => {
   let count = 4;

   function timeOutCount() {
      count--;

      if (count > 0) {
         updateCount(count);
         window.setTimeout(timeOutCount, 1500);
      } else {
         count = "GO !";
         updateCount(count);
         startGame();
      }
   }
   timeOutCount();
};
