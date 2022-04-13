/**
 * @param {string} path
 * @param {{width: number, height: number}} { width, height }
 * @returns {HTMLImageElement}
 */
const imgBuilder = (path, { width, height }) => {
   const img = new Image(width, height);
   img.src = path;

   return img;
};

export const imagesBuilder = () => {
   return {
      ways: {
         way_1: imgBuilder("assets/img/ways/way_1.jpg", { width: 100, height: 100 }),
         way_2: imgBuilder("assets/img/ways/way_2.jpg", { width: 100, height: 100 }),
      },

      cars: {
         red_car: imgBuilder("assets/img/cars/redCar.png", {
            width: 100,
            height: 100,
         }),
         yellow_car: imgBuilder("assets/img/cars/yellowCar.png", {
            width: 100,
            height: 100,
         }),
      },

      barriers: {
         rocks: {
            rocks_1: imgBuilder("assets/img/barriers/rock_1.jpg", {
               width: 100,
               height: 100,
            }),
            rocks_2: imgBuilder("assets/img/barriers/rock_2.jpg", {
               width: 100,
               height: 100,
            }),
         },
      },
   };
};

/**
 * @param {string} text
 * @param {HTMLElement} target
 */
export const insertInHTMLTarget = (text, target) => {
   target.innerHTML = text;
};
