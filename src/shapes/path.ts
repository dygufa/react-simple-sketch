

export class PathShape {
    path: Array<{
        x: number;
        y: number;   
    }> = [];

    constructor(x: number, y: number) {
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

        context.moveTo(first.x, first.y);
        for (const point of rest) {
            context.lineTo(point.x, point.y);
            context.stroke();
        }
    }
}