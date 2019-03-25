import { LineShape } from "../shapes";
import ReactSimpleSketch from "../index";
export declare class LineTool {
    drawing: boolean;
    board: ReactSimpleSketch;
    newLine: LineShape | null;
    x0: number | null;
    y0: number | null;
    x1: number | null;
    y1: number | null;
    constructor(board: ReactSimpleSketch);
    draw: (e: MouseEvent | TouchEvent) => void;
}
