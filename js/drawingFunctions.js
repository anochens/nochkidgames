import {ctx, circles, score} from "./main";
import {rects} from "./utils";

export const drawCandle = (x, boost = false) => {
  const newRect = {x, y: 500, w: 50, h: -(150 + (boost ? 100 : 0))};
  ctx.fillRect(...Object.values(newRect));
  rects.push(newRect)
};

export const saveColors = (color, fillColor) => {
  let oldColor = ctx.strokeStyle, oldFillColor = ctx.fillStyle;
  if (color) {
    oldColor = ctx.strokeStyle;
    ctx.strokeStyle = color;
  }
  if (fillColor) {
    oldFillColor = ctx.fillStyle;
    ctx.fillStyle = fillColor;
  }

  return {oldColor, oldFillColor};
}

export const restoreColors = (oldColor, oldFillColor) => {
  if (oldColor) ctx.strokeStyle = oldColor;
  if (oldFillColor) ctx.fillStyle = oldFillColor;
}


export const drawCircle = (x, y, r, color = null, fillColor = null) => {
  const {oldColor, oldFillColor} = saveColors(color, fillColor);

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  restoreColors(oldColor, oldFillColor);
};
export const drawBase = (x) => {
  const newRect = {x, y: 500, w: 50 + 8 * 100, h: -50};
  rects.push(newRect);
  ctx.fillRect(...Object.values(newRect));
}

export const drawMenorah = () => {

  for (let i = 0; i <= 8; i++) {
    const boost = i === 4;
    drawCircle(75 + i * 100, 345 - (boost ? 100 : 0), 15, "red", "yellow");
  }
  drawBase(50);

  for (let i = 0; i <= 8; i++) {
    const boost = i === 4;
    drawCandle(50 + i * 100, boost);
  }
}

export const drawCircles = () => {
  circles.filter((x) => x).forEach((circleToDraw) => {
    if(circleToDraw.movable) {
      drawCircle(circleToDraw.x, circleToDraw.y, circleToDraw.r, "black", circleToDraw?.fillColor);
    }
    ctx.drawImage(circleToDraw.img, circleToDraw.x - circleToDraw.r * 0.8, circleToDraw.y - circleToDraw.r * 0.8, circleToDraw.r * 1.5, circleToDraw.r * 1.5);
  });
}
export const drawScore = () => {
  ctx.font = "30px Arial";
  const {oldColor, oldFillColor} = saveColors("black", "black");
  ctx.fillText(score, 20, 50);
  restoreColors(oldColor, oldFillColor);
}
