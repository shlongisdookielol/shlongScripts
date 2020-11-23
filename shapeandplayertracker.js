// ==UserScript==
// @name         diep.io player & shape pointer
// @author       shlong#2873
// @description  button to toggle is t
// @match        *://diep.io/
// @run-at       document-load
// ==/UserScript==
let Canvas;
let TrackerToggle = false;
Canvas = CanvasRenderingContext2D.prototype.fill;
CanvasRenderingContext2D.prototype.fill = function () {
    if (TrackerToggle) {
        this.arc(window.innerWidth / 2, window.innerHeight / 2, 0, 0, 0 * Math.PI);
    }
    Canvas.apply(this, arguments);
};
document.addEventListener("keydown", function (keycode) {
    if (keycode.keyCode === 84) {
        TrackerToggle = !TrackerToggle
    }
});
