export declare class RectShape {
    private x0;
    private y0;
    private x1;
    private y1;
    private lineWidth;
    private lineColor;
    constructor(x0: number, y0: number, x1: number, y1: number, lineWidth: number, lineColor: string);
    update(x0: number, y0: number, x1: number, y1: number): void;
    draw(context: CanvasRenderingContext2D): void;
}
