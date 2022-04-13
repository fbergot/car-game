const score = document.getElementById("score");
const life = document.getElementById("life");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let loopTime = 200;

const loop = () => {
   console.log("test");
   setInterval(loop, 500);
};

loop();
