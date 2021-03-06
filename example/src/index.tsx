import { render } from "react-dom";
import * as React from "react";
import SimpleSketch, { ShapeObject } from "react-simple-sketch";
import { CirclePicker, ColorResult } from "react-color";
import { ToolButton } from "./ToolButton";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface IAppProps {

}

interface IAppState {
    tool: string
    color: string;
    lineWidth: number;
    objects: ShapeObject[];
}

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ToolsBox = styled.div`
    margin-left: 20px;
`;

const ToolBox = styled.div`
    margin-bottom: 30px;
`;

class App extends React.Component<IAppProps, IAppState> {
    state = {
        tool: "path",
        color: "#f44336",
        lineWidth: 4,
        objects: [],
    }

    onToolChange = (value: string) => {
        this.setState({
            tool: value
        });
    }

    onColorChange = (color: ColorResult) => {
        this.setState({
            color: color.hex
        });
    }

    onLineWidthChange = (lineWidth: number) => {
        this.setState({
            lineWidth: lineWidth
        });
    }

    onSketchBoardChange = (objects: ShapeObject[]) => {
        this.setState({
            objects
        });
    }

    render() {
        return (
            <div>
                <h1>react-simple-sketch example:</h1>

                <FlexContainer>
                    <SimpleSketch
                        tool={this.state.tool}
                        lineColor={this.state.color}
                        lineWidth={this.state.lineWidth}
                        width={600}
                        height={300}
                        style={{
                            border: "2px solid #000",
                            borderRadius: "5px",
                        }}
                        onChange={this.onSketchBoardChange}
                        value={this.state.objects}
                    />

                    <ToolsBox>
                        <ToolBox>
                            <ToolButton onClick={this.onToolChange} tool="path" currentTool={this.state.tool}/>    
                            <ToolButton onClick={this.onToolChange} tool="line" currentTool={this.state.tool}/>
                            <ToolButton onClick={this.onToolChange} tool="rect" currentTool={this.state.tool}/>
                        </ToolBox>                        

                        <ToolBox>
                            <Slider 
                                value={this.state.lineWidth} 
                                onChange={this.onLineWidthChange} 
                                min={1} 
                                max={10}
                                railStyle={{ background: "#ccc" }}
                                trackStyle={[{ background: "#000" }]}
                                handleStyle={[{ borderColor: "#000", boxShadow: "none" }]}
                            />
                        </ToolBox>
                        
                        <ToolBox>
                            <CirclePicker color={this.state.color} onChange={this.onColorChange} />  
                        </ToolBox>                        
                    </ToolsBox>
                </FlexContainer>   
            </div>            
        );
    }
}

render(<App/>, document.getElementById("root")
)