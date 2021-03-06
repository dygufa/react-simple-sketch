import { LineShape, ShapeObject } from "../shapes";
import { coordinates } from "../utils";
import ReactSimpleSketch from "../index"; 

export class LineTool {
    drawing: boolean = false;
    board: ReactSimpleSketch;
    newLine: LineShape | null = null;
    x0: number | null = null;
    y0: number | null = null;
    x1: number | null = null;
    y1: number | null = null;

    constructor(board: ReactSimpleSketch) {
        this.board = board;
    }

    draw = (e: MouseEvent | TouchEvent) => {   
        const { x, y } = coordinates(e) || { x: 0, y: 0};
        const { lineWidth, lineColor, onChange } = this.board.props;

        if (e.type === "mousedown" || e.type === "touchstart") {
            this.drawing = true;
            this.x0 = x;
            this.y0 = y;
            
            this.newLine = new LineShape(this.x0, this.y0, this.x0, this.y0, lineWidth!, lineColor!);
            this.board.objects.push(this.newLine);
        };

        if (e.type === "mousemove" || e.type === "touchmove") {
            if (!this.drawing!) {
                return;
            }
            this.x1 = x;
            this.y1 = y;
            this.newLine!.update(this.x0!, this.y0!, this.x1, this.y1);
        };

        if (e.type === "mouseup" || e.type === "touchend") {
            this.drawing = false;
            if (onChange) {
                onChange([...this.board.objects]);          
            }
        };
    }
}