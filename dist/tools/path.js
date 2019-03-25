"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("../shapes");
const utils_1 = require("../utils");
class PathTool {
    constructor(board) {
        this.drawing = false;
        this.newPath = null;
        this.x0 = null;
        this.y0 = null;
        this.x1 = null;
        this.y1 = null;
        this.draw = (e) => {
            const { x, y } = utils_1.coordinates(e) || { x: 0, y: 0 };
            const { lineWidth, lineColor, onChange } = this.board.props;
            if (e.type === "mousedown" || e.type === "touchstart") {
                this.drawing = true;
                this.x0 = x;
                this.y0 = y;
                this.newPath = new shapes_1.PathShape(this.x0, this.y0, lineWidth, lineColor);
                this.board.objects.push(this.newPath);
            }
            ;
            if (e.type === "mousemove" || e.type === "touchmove") {
                if (!this.drawing) {
                    return;
                }
                this.x1 = x;
                this.y1 = y;
                this.newPath.add(this.x1, this.y1);
            }
            ;
            if (e.type === "mouseup" || e.type === "touchend") {
                this.drawing = false;
                if (onChange) {
                    onChange([...this.board.objects]);
                }
            }
            ;
        };
        this.board = board;
    }
}
exports.PathTool = PathTool;
//# sourceMappingURL=path.js.map