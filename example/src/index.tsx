import { render } from "react-dom";
import * as React from "react";
import SimpleSketch from "react-simple-sketch";

interface IAppProps {

}

interface IAppState {
    tool: string
}

interface IButtonProps {
    tool: string;
    currentTool: string;
    onClick: (tool: string) => void;
}

class Button extends React.PureComponent<IButtonProps> {
    render() {
        return (
            <button 
                style={this.props.tool === this.props.currentTool ? { border: "2px solid #000" } : undefined}
                onClick={() => this.props.onClick(this.props.tool)}
            >
                {this.props.children}
            </button>
        );
    }
    
};

class App extends React.Component<IAppProps, IAppState> {
    state = {
        tool: "line"
    }

    onToolChange = (value: string) => {
        this.setState({
            tool: value
        });
    }

    render() {
        return (
            <div>
                <h1>Example:</h1>

                <SimpleSketch
                    tool={this.state.tool}
                />

                <br/>

                <Button onClick={this.onToolChange} tool="line" currentTool={this.state.tool}>Line</Button>

                <Button onClick={this.onToolChange} tool="rect" currentTool={this.state.tool}>Rect</Button>

                <Button onClick={this.onToolChange} tool="path" currentTool={this.state.tool}>Pencil</Button>                
            </div>            
        );
    }
}

render(<App/>, document.getElementById("root")
)