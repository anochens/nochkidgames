import {clearCanvas, collides, collidesWithRect, getNewCircle, rects} from "./utils";
import {
  execOnFingers,
  grabbedCircles,
  handleGrabCircle,
  handleMoveGrabbedCircle,
  handleReleaseGrabbedCircle,
  mouseIsDown
} from "./circleGrabber";
import {drawCircle, drawCircles, drawMenorah, drawScore} from "./drawingFunctions";

export let canvas = document.querySelector("#myCanvas");
export let ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";

const HEIGHT = 500, WIDTH = 1000;

export let score = 0;

export const checkingRect = {x: 50, y: 500, w: 50 + 8 * 100, h: -245};


let frameCount = 0;
// get a number of circles from the url param number or 10 if not provided
let numberOfCircles = parseInt(window.location.href.split("?")[1]?.split("=")[1]) || 1;



export let circles = Array(numberOfCircles).fill(null);

const moveCircles = (e) => {
  for(let i = 0; i < circles.length; i++) {
    if(!circles[i]) circles[i] = getNewCircle();

    if (false && collidesWithRect(circles[i])) {
      circles[i].direction_x *= -1;
      circles[i].direction_y *= -1;
    }
    else if(circles[i].x - circles[i].r < 0 || circles[i].x + circles[i].r > WIDTH) {
      circles[i].direction_x *= -1;
    }
    else if(circles[i].y - circles[i].r < 0 || circles[i].y + circles[i].r > HEIGHT) {
      circles[i].direction_y *= -1;
    }

    circles[i].x -= circles[i].direction_x;
    circles[i].y -= circles[i].direction_y;
  }
};

export const circleCollidesWithBin = (circle) => {
  return Math.sqrt(
    Math.pow(binCircle.x - circle?.x, 2) + Math.pow(binCircle.y - circle?.y, 2)
  ) < binCircle.r + circle?.r
}

const checkIfCirclesAreInBin = () => {
  if(grabbedCircles.length === 0) return;
  circles.filter(x => x).forEach((circle, i) => {
    if (
      circle &&
      circle.movable &&
      grabbedCircles.includes(i) && circleCollidesWithBin(circle)) {
      circle["direction_x"] = 0;
      circle["direction_y"] = 0;
      circle["old_direction_x"] = 0;
      circle["old_direction_y"] = 0;
      circle["movable"] = false;
      circle["fillColor"] = "red";
      score++;

      // expand the bin a bit to make room
      binCircle.x -= 10;
      binCircle.y -= 10;
      binCircle.r += 10;

      if(score === circles.length) {
        if(score > 10) {
          for (let i = 0; i < 75; i++) {
            setTimeout(() => circles.push(getNewCircle()), 300 + i * 100);
          }
        }
        else {
          //set score to a cool unicode character
          score = "🎉";
          setTimeout(() => {
            // reload the page but add a url param called number with one more than the current number of circles
            window.location.href = window.location.href.split("?")[0] + "?number=" + (circles.length + 1);
          }, 1000);
        }
      }
    }
  });
};

export const binCircle = {x: 1000, y: 0, r: 200};

let binColor = "black";
function drawEverything() {

// hide #dovButton if numberOfCircles is 1
  if(numberOfCircles < 5) {
    document.querySelector("#dovButton").style.visibility = "hidden";
    document.querySelector("#eitanButton").style.visibility = "hidden";
    document.querySelector("#racheliButton").style.visibility = "hidden";
  }

  frameCount++;
  clearCanvas();
  // ctx.fillRect(...Object.values(checkingRect));

  drawMenorah();

  drawCircle(binCircle.x, binCircle.y, binCircle.r, "black", binColor);

  checkIfCirclesAreInBin();

  drawCircles();

  if(frameCount % 1 === 0) {
    moveCircles();
  }

  drawScore();
}

export const addKid = (kid) => {
  circles.push(getNewCircle(kid))
}

document.addKid = addKid;

const attachListeners = () => {
  canvas.addEventListener("mousedown", handleGrabCircle);
  canvas.addEventListener("mouseup", handleReleaseGrabbedCircle);
  canvas.addEventListener("mousemove", handleMoveGrabbedCircle);

  canvas.addEventListener('touchstart', (e) => execOnFingers(handleGrabCircle, e));
  canvas.addEventListener('touchend', (e) => execOnFingers(handleReleaseGrabbedCircle, e));
  canvas.addEventListener('touchcancel', (e) => execOnFingers(handleReleaseGrabbedCircle, e));

  canvas.addEventListener('touchmove', (e) => execOnFingers(handleMoveGrabbedCircle, e));
};

document.addEventListener("DOMContentLoaded", attachListeners);


setInterval(drawEverything, 50);
