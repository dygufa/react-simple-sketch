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
                {this.props.children}
            </button>
        );
    }
    
};

export const ToolButton = styled(Button)`
    border: 2px solid #000;
    width: 48px;
    height: 48px;
    margin-right: 14px;
    margin-bottom: 14px;
    border-radius: 50%;
    color: none;
    background: none;
    outline: none;
`;