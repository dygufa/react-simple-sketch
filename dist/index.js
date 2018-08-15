"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ReactTextToInput extends React.Component {
    constructor(props) {
        super(props);
        this.startEditing = () => {
            this.setState({
                editing: true,
            });
        };
        this.onInputKeyPress = (e) => {
            if (e.key === "Enter") {
                this.setState({
                    editing: false,
                });
                this.props.onChange(this.state.value);
            }
        };
        this.onInputChange = (e) => {
            const value = e.target.value;
            this.setState({
                value,
            });
        };
        this.onInputBlur = () => {
            this.setState({
                editing: false,
            });
            this.props.onChange(this.state.value);
        };
        this.state = {
            editing: false,
            value: props.value,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
        });
    }
    render() {
        if (this.state.editing) {
            return React.createElement("input", Object.assign({ autoFocus: true, value: this.state.value, onChange: this.onInputChange, onKeyPress: this.onInputKeyPress, onBlur: this.onInputBlur, style: this.props.inputStyle, className: this.props.inputClassName }, this.props.inputProps));
        }
        return React.createElement("div", { className: this.props.textClassName, style: Object.assign({}, this.props.textStyle, {
                minHeight: "20px"
            }), onClick: this.startEditing }, this.props.value);
    }
}
exports.default = ReactTextToInput;
//# sourceMappingURL=index.js.map