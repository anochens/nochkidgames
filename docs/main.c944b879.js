parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNewCircle=exports.collidesWithRect=exports.collides=exports.clearCanvas=exports.rects=void 0;var e=require("./main");function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(r){o(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var n=[];exports.rects=n;var c=function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height)};exports.clearCanvas=c;var i=function(e){var r=t({},e);return e.h<0&&(r.y+=e.h,r.h=-e.h),r},a=function(e,r){var t=e.x-e.r,o=e.y-e.r,n=2*e.r,c=r.h>0?r:i(r);return c.x<t&&t<c.x+c.w&&c.y<o&&o<c.y+c.h||c.x<t&&t<c.x+c.w&&c.y<o+n&&o+n<c.y+c.h||c.x<t+n&&t+n<c.x+c.w&&c.y<o&&o<c.y+c.h||c.x<t+n&&t+n<c.x+c.w&&c.y<o+n&&o+n<c.y+c.h};exports.collides=a;var l=function(r){return!!a(r,e.checkingRect)&&(!!(0,e.circleCollidesWithBin)(r)||n.some(function(e){return a(r,e)}))};exports.collidesWithRect=l;var s=function e(r){var t=["dov","racheli","eitan"],o=100*Math.floor(8*Math.random())+100,n=600*Math.random()+100,c=Math.floor(30*Math.random())+25,i=2*Math.random()-1+0,a=5*(2*Math.random()-1),s=r?t.indexOf(r):Math.floor(3*Math.random()),u=document.querySelector("#".concat(t[s])),h=["green","pink","orange"][s];return l({x:o,y:n,r:c})?e(r):{x:o,y:n,r:c,direction_x:i,direction_y:a,fillColor:h,img:u,old_direction_x:0,old_direction_y:0,movable:!0}};exports.getNewCircle=s;
},{"./main":"d6sW"}],"V1Va":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleMoveGrabbedCircle=exports.handleReleaseGrabbedCircle=exports.handleGrabCircle=exports.mouseIsDown=exports.grabbedCircles=void 0;var e=require("./main"),r=[];exports.grabbedCircles=r;var c=!1;exports.mouseIsDown=c;var i=function(i){exports.mouseIsDown=c=!0;for(var o=i.clientX-e.canvas.offsetLeft,s=i.clientY-e.canvas.offsetTop,l=0;l<e.circles.length;l++)e.circles[l]&&e.circles[l].movable&&Math.sqrt(Math.pow(o-e.circles[l].x,2)+Math.pow(s-e.circles[l].y,2))<e.circles[l].r&&(e.circles[l].old_direction_x=e.circles[l].direction_x,e.circles[l].old_direction_y=e.circles[l].direction_y,e.circles[l].direction_x=0,e.circles[l].direction_y=0,r.push(l))};exports.handleGrabCircle=i;var o=function(i){exports.mouseIsDown=c=!1;for(var o=0;o<r.length;o++){var s,l;e.circles[r[o]].direction_x=(null===(s=e.circles[r[o]])||void 0===s?void 0:s.old_direction_x)||0,e.circles[r[o]].direction_y=(null===(l=e.circles[r[o]])||void 0===l?void 0:l.old_direction_y)||0}for(var t=0;t<r.length;t++)r.pop()};exports.handleReleaseGrabbedCircle=o;var s=function(i){if(c)for(var o={x:i.clientX-e.canvas.offsetLeft,y:i.clientY-e.canvas.offsetTop},s=0;s<r.length;s++)e.circles[r[s]].x=o.x,e.circles[r[s]].y=o.y};exports.handleMoveGrabbedCircle=s;
},{"./main":"d6sW"}],"Wsek":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawScore=exports.drawCircles=exports.drawMenorah=exports.drawBase=exports.drawCircle=exports.restoreColors=exports.saveColors=exports.drawCandle=void 0;var r=require("./main"),t=require("./utils");function e(r){return a(r)||n(r)||l(r)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(r,t){if(r){if("string"==typeof r)return c(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(r,t):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function a(r){if(Array.isArray(r))return c(r)}function c(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}var i=function(o){var l={x:o,y:500,w:50,h:-(150+(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?100:0))};r.ctx.fillRect.apply(r.ctx,e(Object.values(l))),t.rects.push(l)};exports.drawCandle=i;var s=function(t,e){var o=r.ctx.strokeStyle,l=r.ctx.fillStyle;return t&&(o=r.ctx.strokeStyle,r.ctx.strokeStyle=t),e&&(l=r.ctx.fillStyle,r.ctx.fillStyle=e),{oldColor:o,oldFillColor:l}};exports.saveColors=s;var u=function(t,e){t&&(r.ctx.strokeStyle=t),e&&(r.ctx.fillStyle=e)};exports.restoreColors=u;var x=function(t,e,o){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=s(l,n),c=a.oldColor,i=a.oldFillColor;r.ctx.beginPath(),r.ctx.arc(t,e,o,0,2*Math.PI),r.ctx.stroke(),r.ctx.fill(),u(c,i)};exports.drawCircle=x;var f=function(o){var l={x:o,y:500,w:850,h:-50};t.rects.push(l),r.ctx.fillRect.apply(r.ctx,e(Object.values(l)))};exports.drawBase=f;var d=function(){for(var r=0;r<=8;r++){x(75+100*r,345-(4===r?100:0),15,"red","yellow")}f(50);for(var t=0;t<=8;t++){i(50+100*t,4===t)}};exports.drawMenorah=d;var p=function(){r.circles.filter(function(r){return r}).forEach(function(t){t.movable&&x(t.x,t.y,t.r,"black",null==t?void 0:t.fillColor),r.ctx.drawImage(t.img,t.x-.8*t.r,t.y-.8*t.r,1.5*t.r,1.5*t.r)})};exports.drawCircles=p;var v=function(){r.ctx.font="30px Arial";var t=s("black","black"),e=t.oldColor,o=t.oldFillColor;r.ctx.fillText("Score: ".concat(r.score),850,30),u(e,o)};exports.drawScore=v;
},{"./main":"d6sW","./utils":"MgTz"}],"d6sW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addKid=exports.binCircle=exports.circleCollidesWithBin=exports.circles=exports.checkingRect=exports.score=exports.ctx=exports.canvas=void 0;var e,r=require("./utils"),i=require("./circleGrabber"),t=require("./drawingFunctions"),o=document.querySelector("#myCanvas");exports.canvas=o;var n=o.getContext("2d");exports.ctx=n,n.fillStyle="#FF0000";var l=1e3,c=1e3,d=0;exports.score=d;var s={x:50,y:500,w:850,h:-245};exports.checkingRect=s;var a=0,u=parseInt(null===(e=window.location.href.split("?")[1])||void 0===e?void 0:e.split("=")[1])||1,x=Array(u).fill(null);exports.circles=x;var v=function(e){for(var i=0;i<x.length;i++)x[i]||(x[i]=(0,r.getNewCircle)()),(0,r.collidesWithRect)(x[i])?(x[i].direction_x*=-1,x[i].direction_y*=-1):x[i].x-x[i].r<0||x[i].x+x[i].r>c?x[i].direction_x*=-1:(x[i].y-x[i].r<0||x[i].y+x[i].r>l)&&(x[i].direction_y*=-1),x[i].x-=x[i].direction_x,x[i].y-=x[i].direction_y},p=function(e){return Math.sqrt(Math.pow(h.x-(null==e?void 0:e.x),2)+Math.pow(h.y-(null==e?void 0:e.y),2))<h.r+(null==e?void 0:e.r)};exports.circleCollidesWithBin=p;var y=function(){0!==i.grabbedCircles.length&&x.filter(function(e){return e}).forEach(function(e,t){if(e&&e.movable&&i.grabbedCircles.includes(t)&&p(e)&&(e.direction_x=0,e.direction_y=0,e.old_direction_x=0,e.old_direction_y=0,e.movable=!1,e.fillColor="red",exports.score=d+=1,h.x-=10,h.y-=10,h.r+=10,d===x.length))if(d>10)for(var o=0;o<75;o++)setTimeout(function(){return x.push((0,r.getNewCircle)())},300+100*o);else exports.score=d="🎉",setTimeout(function(){window.location.href=window.location.href.split("?")[0]+"?number="+(x.length+1)},1e3)})},h={x:1e3,y:1e3,r:200};exports.binCircle=h;var b="black";function f(){u<5&&(document.querySelector("#dovButton").style.visibility="hidden",document.querySelector("#eitanButton").style.visibility="hidden",document.querySelector("#racheliButton").style.visibility="hidden"),a++,(0,r.clearCanvas)(),(0,t.drawMenorah)(),(0,t.drawCircle)(h.x,h.y,h.r,"black",b),y(),(0,t.drawCircles)(),a%1==0&&v(),(0,t.drawScore)()}var w=function(e){x.push((0,r.getNewCircle)(e))};exports.addKid=w,document.addKid=w,o.addEventListener("mousedown",i.handleGrabCircle),o.addEventListener("mouseup",i.handleReleaseGrabbedCircle),o.addEventListener("mousemove",i.handleMoveGrabbedCircle),setInterval(f,50);
},{"./utils":"MgTz","./circleGrabber":"V1Va","./drawingFunctions":"Wsek"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.c944b879.js.map