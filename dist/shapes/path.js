"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathShape {
    constructor(x, y, lineWidth, lineColor) {
        this.path = [];
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.add(x, y);
    }
    add(x, y) {
        this.path.push({
            x,
            y
        });
    }
    draw(context) {
        context.beginPath();
        const [first, ...rest] = this.path;
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.lineColor;
        context.moveTo(first.x, first.y);
        for (const point of rest) {
            context.lineTo(point.x, point.y);
            context.stroke();
        }
    }
}
exports.PathShape = PathShape;
//# sourceMappingURL=path.js.map