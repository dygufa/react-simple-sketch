import * as React from "react";

import { LineShape } from "./shapes/line";
import { LineTool } from "./tools/line";

import { RectShape } from "./shapes/rect";
import { RectTool } from "./tools/rect";

import { PathShape } from "./shapes/path";
import { PathTool } from "./tools/path";

type Object = LineShape | RectShape | PathShape;

export interface IReactSimpleSketchProps {
    width?: number;
    height?: number;
    tool: string;
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


    switchEventToTool = (e: MouseEvent) => {
        switch(this.props.tool) {
            case "line":
                this.lineTool.draw(e);
                break;
            case "rect":
                this.rectTool.draw(e);
                break;
            case "path":
                this.pathTool.draw(e);
                break;
        }       
    }

    componentDidMount() {
        console.log("aaa");
        if (this.canvas) {
            this.canvas.addEventListener('mousedown', this.switchEventToTool);
            this.canvas.addEventListener('mousemove', this.switchEventToTool);
            this.canvas.addEventListener('mouseup', this.switchEventToTool);          
    
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
        this.context.clearRect(0, 0, 490, 245);
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
                height={this.props.height || 245} 
                width={this.props.width || 490}
                style={{
                    border: "1px solid #000"
                }}
            />
        );
    }
}
