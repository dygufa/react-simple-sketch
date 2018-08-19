import * as React from "react";
import styled from 'styled-components'

interface IButtonProps {
    tool: string;
    currentTool: string;
    onClick: (tool: string) => void;
    className?: string;
}

class Button extends React.PureComponent<IButtonProps> {
    render() {
        return (
            <button 
                className={this.props.className || undefined}
                onClick={() => this.props.onClick(this.props.tool)}
            >
                <img width="24" height="24" src={require(`./icons/${this.props.tool}.svg`)}/>
            </button>
        );
    }
    
};

export const ToolButton = styled(Button)`
    border: ${props => props.currentTool === props.tool ? "4px solid #000" : "2px solid #000"};
    width: ${props => props.currentTool === props.tool ? "48px" : "50px"};
    height: ${props => props.currentTool === props.tool ? "48px" : "50px"};
    margin-right: 14px;
    border-radius: 50%;
    color: none;
    background: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;