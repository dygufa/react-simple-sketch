export declare class PathShape {
    path: Array<{
        x: number;
        y: number;
    }>;
    private lineWidth;
    private lineColor;
    constructor(x: number, y: number, lineWidth: number, lineColor: string);
    add(x: number, y: number): void;
    draw(context: CanvasRenderingContext2D): void;
}
