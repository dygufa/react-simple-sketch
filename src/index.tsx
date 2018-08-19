import * as React from "react";

import { LineShape } from "./shapes/line";
import { LineTool } from "./tools/line";

import { RectShape } from "./shapes/rect";
import { RectTool } from "./tools/rect";

import { PathShape } from "./shapes/path";
import { PathTool } from "./tools/path";

import { DEFAULT_HEIGHT, DEFAULT_WIDTH, DEFAULT_LINE_WIDTH, DEFAULT_LINE_COLOR } from "./utils";

type Object = LineShape | RectShape | PathShape;

export interface IReactSimpleSketchProps {
    width?: number;
    height?: number;
    tool: string;
    lineWidth?: number;
    lineColor?: string;
    style?: React.CSSProperties;
}

export interface IReactSimpleSketchState {
}

export default class ReactSimpleSketch extends React.Component<IReactSimpleSketchProps, IReactSimpleSketchState> {
    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null;
    objects: Object[] = [];
    lineTool = new LineTool(this.objects);
    rectTool = new RectTool(this.objects);
    pathTool = new PathTool(this.objects);
    interval: NodeJS.Timer | undefined;


    switchEventToTool = (e: MouseEvent | TouchEvent) => {
        const lineWidth = this.props.lineWidth || DEFAULT_LINE_WIDTH;
        const lineColor = this.props.lineColor || DEFAULT_LINE_COLOR;

        switch(this.props.tool) {
            case "line":
                this.lineTool.draw(e, lineWidth, lineColor);
                break;
            case "rect":
                this.rectTool.draw(e, lineWidth, lineColor);
                break;
            case "path":
                this.pathTool.draw(e, lineWidth, lineColor);
                break;
        }       
    }

    componentDidMount() {
        if (this.canvas) {
            this.canvas.addEventListener('mousedown', this.switchEventToTool);
            this.canvas.addEventListener('mousemove', this.switchEventToTool);
            this.canvas.addEventListener('mouseup', this.switchEventToTool); 
            this.canvas.addEventListener('touchstart', this.switchEventToTool);
            this.canvas.addEventListener('touchend', this.switchEventToTool);
            this.canvas.addEventListener('touchmove', this.switchEventToTool);          
    
            this.interval = setInterval(this.drawObjects, 1000/30);
        }       
    }

    componentWillUnmount() {
        clearInterval(this.interval!);
    }

    drawObjects = () => {
        if (!(this.context instanceof CanvasRenderingContext2D)) {
            return;
        }
        this.context.clearRect(0, 0, (this.props.width || DEFAULT_WIDTH), (this.props.height || DEFAULT_HEIGHT));

        for (let object of this.objects) {
            object.draw(this.context!);
        }
    }

    defineCanvas = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) {
            return;
        }
        this.canvas = canvas;
        this.context = canvas!.getContext('2d');
    }

    render() {
        return (
            <canvas 
                ref={(c) => this.defineCanvas(c)}
                height={this.props.height || DEFAULT_HEIGHT} 
                width={this.props.width || DEFAULT_WIDTH}
                style={this.props.style || {}}
            />
        );
    }
}
