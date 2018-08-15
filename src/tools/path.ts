import { PathShape } from "../shapes/path";
import { coordinates } from "../utils";

export class PathTool {
    drawing: boolean = false;
    objects: Object[];
    newPath: PathShape | null = null;
    x0: number | null = null;
    y0: number | null = null;
    x1: number | null = null;
    y1: number | null = null;

    constructor(objects: Object[]) {
        this.objects = objects;
    }

    draw = (e: MouseEvent | TouchEvent) => {   
        const { x, y } = coordinates(e) || { x: 0, y: 0};

        if (e.type === "mousedown" || e.type === "touchstart") {
            this.drawing = true;
            this.x0 = x;
            this.y0 = y;
            
            this.newPath = new PathShape(this.x0, this.y0);
            this.objects.push(this.newPath);
        };

        if (e.type === "mousemove" || e.type === "touchmove") {
            if (!this.drawing!) {
                return;
            }
            this.x1 = x;
            this.y1 = y;
            this.newPath!.add(this.x1, this.y1);
        };

        if (e.type === "mouseup" || e.type === "touchend") {
            this.drawing = false;            
        };
    }
}