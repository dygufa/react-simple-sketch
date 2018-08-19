

export class PathShape {
    path: Array<{
        x: number;
        y: number;   
    }> = [];
    private lineWidth!: number;
    private lineColor!: string;

    constructor(x: number, y: number, lineWidth: number, lineColor: string) {
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.add(x, y);
    }

    add(x: number, y: number) {
        this.path.push({
            x,
            y
        });
    }

    draw(context: CanvasRenderingContext2D) {
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