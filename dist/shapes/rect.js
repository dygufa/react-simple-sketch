"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RectShape {
    constructor(x0, y0, x1, y1, lineWidth, lineColor) {
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.update(x0, y0, x1, y1);
    }
    update(x0, y0, x1, y1) {
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
    }
    draw(context) {
        context.beginPath();
        context.rect(this.x0, this.y0, this.x1 - this.x0, this.y1 - this.y0);
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.lineColor;
        context.stroke();
    }
}
exports.RectShape = RectShape;
//# sourceMappingURL=rect.js.map