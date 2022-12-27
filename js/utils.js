import {binCircle, canvas, checkingRect, circleCollidesWithBin, ctx} from "./main";

export const rects = []

export const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
const fixNegativeHeightRect = (rect) => {
  const newRect = {...rect};
  if (rect.h < 0) {
    newRect.y += rect.h;
    newRect.h = -rect.h;
  }
  return newRect;
}
export const collides = (circle1, rect1) => {
  const circleRect = {
    x: circle1.x - circle1.r,
    y: circle1.y - circle1.r,
    w: circle1.r * 2,
  };

  const rect2 = rect1.h > 0 ? rect1 : fixNegativeHeightRect(rect1);

  return (
    rect2.x < circleRect.x && circleRect.x < rect2.x + rect2.w &&
    rect2.y < circleRect.y && circleRect.y < rect2.y + rect2.h
  ) || (
    rect2.x < circleRect.x && circleRect.x < rect2.x + rect2.w &&
    rect2.y < circleRect.y + circleRect.w && circleRect.y + circleRect.w < rect2.y + rect2.h
  ) || (
    rect2.x < circleRect.x + circleRect.w && circleRect.x + circleRect.w < rect2.x + rect2.w &&
    rect2.y < circleRect.y && circleRect.y < rect2.y + rect2.h
  ) || (
    rect2.x < circleRect.x + circleRect.w && circleRect.x + circleRect.w < rect2.x + rect2.w &&
    rect2.y < circleRect.y + circleRect.w && circleRect.y + circleRect.w < rect2.y + rect2.h
  );
}
export const collidesWithRect = (circle) => {
  if (!collides(circle, checkingRect)) return false;
  if (circleCollidesWithBin(circle)) return true;

  return rects.some(rect => collides(circle, rect));
}

export const getNewCircle = (providedFlavor) => {
  const kidArray = ["dov", "racheli", "eitan"];
  const x = Math.floor(Math.random() * 8) * 100 + 100;
  const y = Math.random() * 600 + 100;
  const r = Math.floor(Math.random() * 30) + 25;
  const x_boost = 0;//(Math.random() > 0.8) ? 20 : 0;
  const direction_x = Math.random() * 2 - 1 + x_boost;
  const direction_y = (Math.random() * 2 - 1) * 5;
  const flavor = providedFlavor ? kidArray.indexOf(providedFlavor) : Math.floor(Math.random() * 3);
  const img = document.querySelector(`#${kidArray[flavor]}`);
  const fillColor = ["green", "pink", "orange"][flavor];

  if(collidesWithRect({x, y, r})) {
    return getNewCircle(providedFlavor);
  }

  return {
    x, y, r,
    direction_x, direction_y,
    fillColor,
    img,
    old_direction_x: 0, old_direction_y: 0,
    movable: true,
  };
};
