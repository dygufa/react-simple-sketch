# react-simple-sketch
[![npm version](https://img.shields.io/npm/v/react-simple-sketch.svg?style=flat-square)](https://www.npmjs.com/package/react-simple-sketch)

Simple sketch board that allows drawing lines, rectangles and paths.

### [**Check the DEMO**](https://dygufa.com/react-simple-sketch/example/dist/)

## How to use

### Install
Run `yarn add react-simple-sketch` or `npm install react-simple-sketch`

### Use
```
import SimpleSketch from "react-simple-sketch";

<SimpleSketch
    tool={this.state.tool}
/>
```

### Properties

Property | Type | Required
--- | --- | ---
tool | "line" \| "rect" \| "path | yes
width | number | no
height | number | no
lineWidth | number | no
lineColor | string (hex) | no
style | React.CSSProperties | no


### Running example

```
cd example/
yarn start
```

## Todo

1. Make it controllable
2. Mobile version