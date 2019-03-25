"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const line_1 = require("./tools/line");
const rect_1 = require("./tools/rect");
const path_1 = require("./tools/path");
class ReactSimpleSketch extends React.Component {
    constructor() {
        super(...arguments);
        this.canvas = null;
        this.context = null;
        this.objects = [];
        this.lineTool = new line_1.LineTool(this);
        this.rectTool = new rect_1.RectTool(this);
        this.pathTool = new path_1.PathTool(this);
        this.switchEventToTool = (e) => {
            switch (this.props.tool) {
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
        };
        this.drawObjects = () => {
            if (!(this.context instanceof CanvasRenderingContext2D)) {
                return;
            }
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (let object of this.objects) {
                object.draw(this.context);
            }
        };
        this.defineCanvas = (canvas) => {
            if (!canvas) {
                return;
            }
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        };
    }
    componentDidMount() {
        if (this.canvas) {
            this.canvas.addEventListener('mousedown', this.switchEventToTool);
            this.canvas.addEventListener('mousemove', this.switchEventToTool);
            this.canvas.addEventListener('mouseup', this.switchEventToTool);
            this.canvas.addEventListener('touchstart', this.switchEventToTool);
            this.canvas.addEventListener('touchend', this.switchEventToTool);
            this.canvas.addEventListener('touchmove', this.switchEventToTool);
            this.interval = setInterval(this.drawObjects, 1000 / 30);
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentWillReceiveProps(props) {
        if (props.value !== undefined) {
            this.objects = [...props.value];
        }
    }
    render() {
        return (React.createElement("canvas", { ref: (c) => this.defineCanvas(c), height: this.props.height, width: this.props.width, style: this.props.style || {} }));
    }
}
ReactSimpleSketch.defaultProps = {
    lineWidth: 3,
    lineColor: "#000",
    width: 490,
    height: 245,
};
exports.default = ReactSimpleSketch;
//# sourceMappingURL=index.js.map