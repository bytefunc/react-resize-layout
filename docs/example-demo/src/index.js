import React from "react";
import { render } from "react-dom";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";

// horizon
render(
    <Resize handleWidth="5px" handleColor="#777">
        <ResizeHorizon width="100px">
            <p>Horizon 1</p>
            <p>width: 100px</p>
        </ResizeHorizon>
        <ResizeHorizon width="200px" minWidth="150px">
            <p>Horizon 2</p>
            <p>width: 200px</p>
            <p>minWidth: 150px</p>
        </ResizeHorizon>
        <ResizeHorizon minWidth="5px">
            <p>Horizon 3</p>
            <p>minWidth: 5px</p>
        </ResizeHorizon>
    </Resize>,
    document.getElementById("example")
);

// vertical
render(
    <Resize handleWidth="5px" handleColor="#777">
        <ResizeVertical height="100px" minHeight="10px">
            <p>Vertical 1</p>
            <p>height: 100px</p>
            <p>minHeight: 10px</p>
        </ResizeVertical>
        <ResizeVertical height="200px">
            <p>Vertical 2</p>
            <p>height: 200px</p>
        </ResizeVertical>
        <ResizeVertical minHeight="50px">
            <p>Vertical 3</p>
            <p>minHeight: 50px</p>
        </ResizeVertical>
    </Resize>,
    document.getElementById("example2")
);

// horizon and vertical
render(
    <Resize handleWidth="2px" handleColor="#000">
        <ResizeVertical height="120px" minHeight="50px">
            <p>Vertical 1</p>
            <p>height: 120px</p>
            <p>minHeight: 50px</p>
        </ResizeVertical>
        <ResizeVertical height="160px" minHeight="20px">
            <Resize handleWidth="8px" handleColor="red">
                <ResizeHorizon width="90px">
                    <p>Horizon 1</p>
                    <p>width: 90px</p>
                </ResizeHorizon>
                <ResizeHorizon width="120px">
                    <p>Horizon 2</p>
                    <p>width: 120px</p>
                </ResizeHorizon>
                <ResizeHorizon minWidth="50px">
                    <p>Horizon 3</p>
                    <p>minWidth: 50px</p>
                </ResizeHorizon>
            </Resize>
        </ResizeVertical>
        <ResizeVertical>
            <p>Vertical 3</p>
        </ResizeVertical>
    </Resize>,
    document.getElementById("example3")
);
