import CanvasManager from "./class/CanvasManager.js";
import { imagesBuilder, insertInHTMLTarget } from "./utils.js";

const canvasManager = new CanvasManager("canvas");

//******************************************Déclaration variables*******************************************************//

let xr1 = 0;
let yr1 = 0;
let xr2 = 0;
let yr2 = -690;
let xvj = 230;
let yvj = 600;
let vitesseTapis = 20;
let y = 100;
let xbl1 = 250;
let ybl1 = 0;
let blocage = true;
let xv2 = 250;
let yv2 = 50;
let xv1 = 150;
let yv1 = 150;
let rx1 = 150;
let ry1 = 100;
let rx2 = 170;
let ry2 = 90;
let tmps;

//******************************************Déclaration des fonctions***************************************************//

//******Rotation Tapis ********************/
function route1() {
   var image1 = new Image();
   image1.src = "route1.jpg";
   ctx.drawImage(image1, xr1, yr1);
   yr1 = yr1 + vitesseTapis;
   if (yr1 > 690) {
      yr1 = yr1 - 2 * 690;
   }
}

function route2() {
   var image1 = new Image();
   image1.src = "route2.jpg";
   ctx.drawImage(image1, xr2, yr2);
   yr2 = yr2 + vitesseTapis;
   if (yr2 > 690) {
      yr2 = yr2 - 2 * 690;
   }
}

//******Fin Rotation Tapis** ************/

function VoitureJoueur() {
   var image1 = new Image();
   image1.src = "imagesVoiture.jpg";
   ctx.drawImage(image1, xvj, yvj);
}

function star(n) {
   yv1 + 50;
   var image1 = new Image();
   image1.src = "images.png";
   ctx.drawImage(image1, xv1, yv1);

   yv1 += vitesseTapis;
}

function star1(n) {
   yv2 + 50;
   var image1 = new Image();
   image1.src = "images.png";
   ctx.drawImage(image1, xv2, yv2);

   yv2 += vitesseTapis;
}

function rocher1() {
   var image1 = new Image();
   image1.src = "rocher1.jpg";
   ctx.drawImage(image1, rx1, ry1);
   ry1 += vitesseTapis;

   if (ry1 > 800) {
      n = -200 + Math.round(Math.random() * -800 * 2);
      ry1 = n;
      rx1 = 115 + Math.round(Math.random() * 175);
   }
}

function rocher2() {
   var image1 = new Image();
   image1.src = "rocher1.jpg";
   ctx.drawImage(image1, rx2, ry2);
   ry2 += vitesseTapis;

   if (ry2 > 800) {
      n = -200 + Math.round(Math.random() * -1800 * 2);
      ry2 = n;
      rx2 = 115 + Math.round(Math.random() * 175);
   }
}

document.addEventListener("keydown", kewdownDir, false);

function kewdownDir(e) {
   if (e.key == "Right" || e.key == "ArrowRight") {
      xvj += 20;
   } else if (e.key == "Left" || e.key == "ArrowLeft") {
      xvj -= 20;
   }
}

function collider() {
   //faire un carré autour/************************** */

   if (xvj + 36 > rx1 && xvj + 36 < rx1 + 35 && yvj < ry1 + 29) {
      alert("perdu!!");
   }
}

//***************************Fonction de rappel************************* */
function draw() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   route1();
   route2();
   VoitureJoueur();
   //bloc();
   collider();
   star();
   star1();
   rocher1();
   rocher2();
}
window.setInterval(draw, 50);
