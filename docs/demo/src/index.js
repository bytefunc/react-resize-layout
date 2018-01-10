import React from "react";
import { render } from "react-dom";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";

render(
    <Resize handleWidth="4px" handleColor="#777">
        <ResizeHorizon className="bg-green" width="90px" minWidth="0px">
            <Resize handleWidth="10px" handleColor="red" handleColor="#000">
                <ResizeVertical
                    className="bg-white"
                    height="160px"
                    minHeight="10px"
                />
                <ResizeVertical className="bg-green" minHeight="10px" />
            </Resize>
        </ResizeHorizon>
        <ResizeHorizon className="bg-blue" width="220px" minWidth="20px" />
        <ResizeHorizon className="bg-blue" width="300px" minWidth="150px">
            <Resize handleWidth="4px" handleColor="#eee">
                <ResizeVertical
                    className="bg-red"
                    height="60px"
                    minHeight="30px"
                    overflow="auto"
                >
                    <p>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                    </p>
                </ResizeVertical>
                <ResizeVertical
                    className="bg-yellow"
                    height="60px"
                    minHeight="60px"
                >
                    <p>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                    </p>
                </ResizeVertical>
                <ResizeVertical className="bg-black" minHeight="10px">
                    <img src="./img/cat.jpg" />
                </ResizeVertical>
            </Resize>
        </ResizeHorizon>
        <ResizeHorizon className="bg-pink" minWidth="0px" />
    </Resize>,
    document.getElementById("demo")
);
