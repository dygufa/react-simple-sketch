import { LineShape } from "../shapes/line";

export class LineTool {
    drawing: boolean = false;
    objects: Object[];
    newLine: LineShape | null = null;
    x0: number | null = null;
    y0: number | null = null;
    x1: number | null = null;
    y1: number | null = null;

    constructor(objects: Object[]) {
        this.objects = objects;
    }

    draw = (e: MouseEvent) => {   
        if (e.type === "mousedown") {
            this.drawing = true;
            this.x0 = e.offsetX;
            this.y0 = e.offsetY;
            
            this.newLine = new LineShape(this.x0, this.y0, this.x0, this.y0);
            this.objects.push(this.newLine);
        };

        if (e.type === "mousemove") {
            if (!this.drawing!) {
                return;
            }
            this.x1 = e.offsetX;
            this.y1 = e.offsetY;
            this.newLine!.update(this.x0!, this.y0!, this.x1, this.y1);
        };

        if (e.type === "mouseup") {
            this.drawing = false;            
        };
    }
}