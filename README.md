# react-resize-layout

This react component resize the layout of HTML using a handle

## Demo

[View the demo page](https://bytefunc.github.io/react-resize-layout/demo/)

![Demo](https://github.com/bytefunc/react-resize-layout/raw/master/screenshot/demo.gif)

## Example

[View the example demo page](https://bytefunc.github.io/react-resize-layout/example-demo/)

```javascript
npm install --save react-resize-layout react react-dom

or

yarn add react-resize-layout react react-dom
```

```javascript
import React from "react";
import { render } from "react-dom";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";

// horizon
render(
    <Resize handleWidth="5px" handleColor="#777">
        <ResizeHorizon width="100px">Horizon 1</ResizeHorizon>
        <ResizeHorizon width="200px" minWidth="150px">
            Horizon 2
        </ResizeHorizon>
        <ResizeHorizon minWidth="5px">Horizon 3</ResizeHorizon>
    </Resize>,
    document.getElementById("example")
);

// vertical
render(
    <Resize handleWidth="5px" handleColor="#777">
        <ResizeVertical height="100px" minHeight="10px">
            Vertical 1
        </ResizeVertical>
        <ResizeVertical height="200px">Vertical 2</ResizeVertical>
        <ResizeVertical minHeight="50px">Vertical 3</ResizeVertical>
    </Resize>,
    document.getElementById("example2")
);

// horizon and vertical
render(
    <Resize handleWidth="2px" handleColor="#000">
        <ResizeVertical height="120px" minHeight="50px">
            Vertical 1
        </ResizeVertical>
        <ResizeVertical height="160px" minHeight="20px">
            <Resize handleWidth="8px" handleColor="red">
                <ResizeHorizon width="90px">Horizon 1</ResizeHorizon>
                <ResizeHorizon width="120px">Horizon 2</ResizeHorizon>
                <ResizeHorizon minWidth="50px">Horizon 3</ResizeHorizon>
            </Resize>
        </ResizeVertical>
        <ResizeVertical>Vertical 2</ResizeVertical>
    </Resize>,
    document.getElementById("example3")
);
```

## Usage

```javascript
//
// When you use either <ResizeHorizon> or <ResizeVertical> component
//

// work
<Resize>
   <ResizeHorizon>...</ResizeHorizon>
   <ResizeHorizon>...</ResizeHorizon>
</Resize>

// not work
<Resize>
   <ResizeHorizon>...</ResizeHorizon>
   <ResizeVertical>...</ResizeVertical>
</Resize>

// not work
<Resize>
   <ResizeHorizon>...</ResizeHorizon>
   <ResizeHorizon>...</ResizeHorizon>
   <div>...</div>
</Resize>
```

## API

### \<Resize\>

| options        |     type | default |       description        |
| :------------- | -------: | :-----: | :----------------------: |
| handleWidth    |   string |  "5px"  |       handle width       |
| handleColor    |   string | "#999"  |       handle color       |
| onResizeStart  | callback |         | Calls when resize start  |
| onResizeStop   | callback |         |  Calls when resize stop  |
| onResizeMove   | callback |         |  Calls when resize move  |
| onResizeWindow | callback |         | Calls when window resize |

### \<ResizeHorizon\>

| options   |   type |                       description                       |
| :-------- | -----: | :-----------------------------------------------------: |
| id        | string |        Set the id of the ResizeHorizon component        |
| className | string |    Set the className of the ResizeHorizon component     |
| width     | string |     Set the width of the ResizeHorizon component        |
| minWidth  | string | Set the minimum width of the ResizeHorizon component    |
| overflow  | string |  Set the css overflow property. default value "hidden"  |

### \<ResizeVertical\>

| options   |   type |                        description                        |
| :-------- | -----: | :-------------------------------------------------------: |
| id        | string |        Set the id of the ResizeVertical component         |
| className | string |     Set the className of the ResizeVertical component     |
| height    | string |     Set the height of the ResizeVertical component        |
| minHeight | string | Set the minimum height of the ResizeVertical component    |
| overflow  | string |   Set the css overflow property. default value "hidden"   |

## License

MIT
