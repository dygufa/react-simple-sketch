

export class RectShape {
    private x0!: number;
    private y0!: number;
    private x1!: number;
    private y1!: number;

    constructor(x0: number, y0: number, x1: number, y1: number) {
        this.update(x0, y0,x1, y1);
    }

    update(x0: number, y0: number, x1: number, y1: number) {
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.rect(this.x0, this.y0, this.x1 - this.x0, this.y1 - this.y0);
        context.stroke();
    }
}