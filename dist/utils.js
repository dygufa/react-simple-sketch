"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function coordinates(e) {
    let x = 0, y = 0;
    if (e instanceof TouchEvent) {
        const rect = e.target.getBoundingClientRect();
        if (!e.targetTouches[0]) {
            return;
        }
        x = e.targetTouches[0].pageX - rect.left;
        y = e.targetTouches[0].pageY - rect.top;
    }
    else if (e instanceof MouseEvent) {
        x = e.offsetX;
        y = e.offsetY;
    }
    return { x, y };
}
exports.coordinates = coordinates;
//# sourceMappingURL=utils.js.map