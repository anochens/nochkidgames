import {canvas, checkIfCirclesAreInBin, circles} from "./main";

export let grabbedCircles = [];
export let mouseIsDown = false;

export const handleGrabCircle = (e) => {
  mouseIsDown = true;
  const mousePos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };

  for (let i = 0; i < circles.length; i++) {
    if (circles[i] && circles[i].movable && !grabbedCircles.includes(i)) {
      if (Math.sqrt((mousePos.x - circles[i].x) ** 2 + (mousePos.y - circles[i].y) ** 2) < circles[i].r) {
        circles[i].old_direction_x = circles[i].direction_x;
        circles[i].old_direction_y = circles[i].direction_y;
        circles[i].direction_x = 0;
        circles[i].direction_y = 0;
        grabbedCircles.push(i);
      }
    }
  }
}
export const handleReleaseGrabbedCircle = (e) => {
  mouseIsDown = false;

  checkIfCirclesAreInBin();

  for (let i = 0; i < grabbedCircles.length; i++) {
    circles[grabbedCircles[i]].direction_x = circles[grabbedCircles[i]]?.old_direction_x || 0;
    circles[grabbedCircles[i]].direction_y = circles[grabbedCircles[i]]?.old_direction_y || 0;
  }
  for (let i = 0; i < grabbedCircles.length; i++) {
    grabbedCircles.pop();
  }
}
export const handleMoveGrabbedCircle = (e) => {
  if (mouseIsDown) {
    const mousePos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop
    };
    for (let i = 0; i < grabbedCircles.length; i++) {
      circles[grabbedCircles[i]].x = mousePos.x;
      circles[grabbedCircles[i]].y = mousePos.y;
    }
  }
}

export const execOnFingers = (f, e) => {
  for(let i = 0; i < e.touches.length; i++) {
    f(e.touches[i]);
  }
  if(grabbedCircles.length > 0) {
    e.preventDefault();
    e.stopPropagation();
  }
}
