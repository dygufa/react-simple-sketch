/// <reference types="react" />
/// <reference types="node" />
import * as React from "react";
import { LineTool } from "./tools/line";
import { RectTool } from "./tools/rect";
import { PathTool } from "./tools/path";
import { ShapeObject } from "./shapes";
export { ShapeObject };
export interface IReactSimpleSketchProps {
    width?: number;
    height?: number;
    tool: string;
    lineWidth?: number;
    lineColor?: string;
    style?: React.CSSProperties;
    value?: ShapeObject[];
    onChange?: (objects: ShapeObject[]) => void;
}
export interface IReactSimpleSketchState {
}
export default class ReactSimpleSketch extends React.Component<IReactSimpleSketchProps, IReactSimpleSketchState> {
    canvas: HTMLCanvasElement | null;
    context: CanvasRenderingContext2D | null;
    objects: ShapeObject[];
    lineTool: LineTool;
    rectTool: RectTool;
    pathTool: PathTool;
    interval: NodeJS.Timer | undefined;
    static defaultProps: {
        lineWidth: number;
        lineColor: string;
        width: number;
        height: number;
    };
    switchEventToTool: (e: MouseEvent | TouchEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: IReactSimpleSketchProps): void;
    drawObjects: () => void;
    defineCanvas: (canvas: HTMLCanvasElement | null) => void;
    render(): JSX.Element;
}
