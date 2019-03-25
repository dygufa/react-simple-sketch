import { PathShape } from "../shapes";
import ReactSimpleSketch from "../index";
export declare class PathTool {
    drawing: boolean;
    board: ReactSimpleSketch;
    newPath: PathShape | null;
    x0: number | null;
    y0: number | null;
    x1: number | null;
    y1: number | null;
    constructor(board: ReactSimpleSketch);
    draw: (e: MouseEvent | TouchEvent) => void;
}
