/// <reference types="react" />
import * as React from "react";
export interface IReactTextToInputProps {
    value: string;
    onChange: (value: string) => void;
    textClassName?: string;
    inputClassName?: string;
    textStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    inputProps?: React.HTMLProps<HTMLInputElement>;
}
export interface IReactTextToInputState {
    editing: boolean;
    value: string;
}
export default class ReactTextToInput extends React.Component<IReactTextToInputProps, IReactTextToInputState> {
    constructor(props: IReactTextToInputProps);
    componentWillReceiveProps(nextProps: IReactTextToInputProps): void;
    startEditing: () => void;
    onInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputBlur: () => void;
    render(): JSX.Element;
}
