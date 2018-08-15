import { RectShape } from "../shapes/rect";

export class RectTool {
    drawing: boolean = false;
    objects: Object[];
    newRect: RectShape | null = null;
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
            
            this.newRect = new RectShape(this.x0, this.y0, this.x0, this.y0);
            this.objects.push(this.newRect);
        };

        if (e.type === "mousemove") {
            if (!this.drawing!) {
                return;
            }
            this.x1 = e.offsetX;
            this.y1 = e.offsetY;
            this.newRect!.update(this.x0!, this.y0!, this.x1, this.y1);
        };

        if (e.type === "mouseup") {
            this.drawing = false;            
        };
    }
}