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
    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null;
    objects: ShapeObject[] = [];
    lineTool = new LineTool(this);
    rectTool = new RectTool(this);
    pathTool = new PathTool(this);
    interval: NodeJS.Timer | undefined;

    static defaultProps = {
        lineWidth: 3,
        lineColor: "#000",
        width: 490,
        height: 245,
    };

    switchEventToTool = (e: MouseEvent | TouchEvent) => {
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

    componentWillReceiveProps(props: IReactSimpleSketchProps) {
        if (props.value !== undefined) {
            this.objects = [...props.value];
        }
    }

    drawObjects = () => {
        if (!(this.context instanceof CanvasRenderingContext2D)) {
            return;
        }
        this.context.clearRect(0, 0, this.props.width!, this.props.height!);

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
                height={this.props.height!} 
                width={this.props.width!}
                style={this.props.style || {}}
            />
        );
    }
}
