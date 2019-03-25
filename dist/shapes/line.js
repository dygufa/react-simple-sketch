"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LineShape {
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
        context.moveTo(this.x0, this.y0);
        context.lineTo(this.x1, this.y1);
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.lineColor;
        context.stroke();
    }
}
exports.LineShape = LineShape;
//# sourceMappingURL=line.js.map