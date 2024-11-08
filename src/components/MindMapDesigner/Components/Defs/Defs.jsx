import React, {memo, useContext} from "react";
import BG1 from "./assets/BackgroundLogos.jpg";
import BG2 from "./assets/BackgroundLogos2.jpg";
import BG3 from "./assets/BackgroundLogos3.jpg";
import {MindMapContext} from '../../MindMap';

const Defs = memo(() => {
    const {
        idBackGround,
        idShadow,
        backGroundType
    } = useContext(MindMapContext);

    let backGround = BG1;
    if ( backGroundType === 2 ) backGround = BG2;
    if ( backGroundType === 3 ) backGround = BG3;

    return (
        <defs>
            <pattern id={idBackGround} patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image href={backGround} width="100%" preserveAspectRatio="xMidYMid slice" height="100%"/>
            </pattern>
            <filter id={idShadow} height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/>
                <feOffset in="blur" dx="0" dy="0" result="offsetBlur"/>
                <feMerge>
                    <feMergeNode in="offsetBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    )
})
export default Defs