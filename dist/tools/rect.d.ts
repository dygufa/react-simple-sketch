import { RectShape } from "../shapes";
import ReactSimpleSketch from "../index";
export declare class RectTool {
    drawing: boolean;
    board: ReactSimpleSketch;
    newRect: RectShape | null;
    x0: number | null;
    y0: number | null;
    x1: number | null;
    y1: number | null;
    constructor(board: ReactSimpleSketch);
    draw: (e: MouseEvent | TouchEvent) => void;
}
