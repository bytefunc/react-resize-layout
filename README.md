# react-resize-layout
This layout components can resize move the handle with mouse or touch

## Demo
![Demo](https://github.com/bytefunc/react-resize-layout/raw/master/screenshot/demo.gif)

## Example
```javascript
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    Resize,
    ResizeHorizon,
    ResizeVertical
} from 'react-resize-layout'

// horizon
ReactDOM.render(
    <Resize handleWidth="5px" handleColor="#777">
       <ResizeHorizon width="100px">
         Horizon 1
       </ResizeHorizon>
       <ResizeHorizon width="200px">
         Horizon 2
       </ResizeHorizon>
       <ResizeHorizon>
         Horizon 3
       </ResizeHorizon>
    </Resize>,
    document.getElementById('body')
);

// vertical
ReactDOM.render(
    <Resize handleWidth="5px" handleColor="#777">
       <ResizeVertical height="100px">
         Vertical 1
       </ResizeVertical>
       <ResizeVertical height="200px">
         Vertical 2
       </ResizeVertical>
       <ResizeVertical>
         Vertical 3
       </ResizeVertical>
    </Resize>,
    document.getElementById('body')
);


// horizon and vertical
ReactDOM.render(
    <Resize handleWidth="4px" handleColor="#000">
       <ResizeVertical height="120px">
          Vertical 1
       </ResizeVertical>
       <ResizeVertical height="160px">
          <Resize handleWidth="6px" handleColor="red">
             <ResizeHorizon width="90px">
               Horizon 1
             </ResizeHorizon>
             <ResizeHorizon width="120px">
               Horizon 2
             </ResizeHorizon>
             <ResizeHorizon>
               Horizon 3
             </ResizeHorizon>
          </Resize>
       </ResizeVertical>
       <ResizeVertical>
         Vertical 2
       </ResizeVertical>
    </Resize>,
    document.getElementById('body')
);

```

### Example images

|horizon|vertical|horizon and vertical|
|---|---|---|
|![](https://github.com/bytefunc/react-resize-layout/raw/master/screenshot/horizon.png)|![](https://github.com/bytefunc/react-resize-layout/raw/master/screenshot/vertical.png)|![](https://github.com/bytefunc/react-resize-layout/raw/master/screenshot/horizon&vertical.png)|



## API
### \<Resize\>
|   options  |    type    |      default       |   description   |
|:-----------|-----------:|:------------------:|:---------------:|
|handleWidth|   string   |      "5px"       |   handle width   |
| handleColor|   string   |    "#999"     |   handle color   |
| onResizeStart|   callback|                  |   Calls when resize start  |
| onResizeStop |   callback|                  |   Calls when resize stop  |
| onResizeMove |   callback| |   Calls when resize move  |
| onResizeWindow  |   callback|     |   Calls when window resize |

### \<ResizeHorizon\>
|   options  |    type    |      description   |
|:-----------|-----------:|:---------------:|
|id|   string   |   Set the id of the ResizeHorizon component   |
| className|   string   |   Set the className of the ResizeHorizon component   |
| width|   string   |  Set the width px of the ResizeHorizon component |
| minWidth|   string   |   Set the minimum width px of the ResizeHorizon component  |
| overflow|   string   | Set  the css overflow property. default value "hidden"  |

### \<ResizeVertical\>
|   options  |    type    |      description   |
|:-----------|-----------:|:---------------:|
|id|   string   |  Set the id of the ResizeVertical component  |
| className|   string   | Set the className of the ResizeVertical component  |
| height|   string   |  Set the height px of the ResizeVertical component |
| minHeight|   string   | Set  the minimum height px of the ResizeVertical component  |
| overflow|   string   | Set  the css overflow property. default value "hidden"  |

## License
MIT