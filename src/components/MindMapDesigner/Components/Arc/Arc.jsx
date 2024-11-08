import React, {useEffect, useRef, useContext, useState} from "react";
import * as d3 from "d3";
import TitleArc from '../TitleArc';
import {MindMapContext} from "../../MindMap";

const Arc = (props) => {
    const {
        idBackGround,
        idShadow,
        isEditMode
    } = useContext(MindMapContext);

    const {
        data,
        color: mainColor,
        innerRadius,
        outerRadius,
        shiftArc,
        onDrag,
        translateX,
        translateY,
        parentalSvg,
        strokeWidth,
    } = props;

    const {
        value,
        title,
        link,
        correctionX,
        correctionY,
        color,
        width = 0,
        height = 0,
        ...styleInConfig
    } = data.data;

    const textRefAll = useRef(null);

    const createArc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .padAngle(shiftArc / outerRadius)

    const d = createArc(data);
    const pointCenterAct = createArc.centroid(data);

    let point = {
        x: pointCenterAct[0],
        y: pointCenterAct[1]
    };

    if (correctionX || correctionY) {
        point = {
            x: correctionX,
            y: correctionY
        }
    }

    let debounceTimeout;

    useEffect(() => {
        if (!isEditMode) return

        const ListenElement = d3.select(textRefAll.current);
        const dragHandler = d3.drag()
            .on('drag', function (event) {
                const elem = d3.pointer(event, parentalSvg);
                const x = elem[0] - 50 - translateX;
                const y = elem[1] - 10 - translateY;
                d3.select(this).attr('transform', `translate(${x},${y})`);

                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(() => {
                    onDrag(d3.select(this).attr('title'), x, y);
                }, 1000);
            });
        ListenElement.call(dragHandler);
    }, [onDrag]);

    const handleClick = () => {
        if (isEditMode || !link) return
        window.open(link, '_blank');
    };

    const [textWidth, setTextWidth] = useState(width);
    const [textHeight, setTextHeight] = useState(height);

    const handleTextSizeChange = (w, h) => {
        if (!width) setTextWidth(w);
        if (!height) setTextHeight(h);
    };

    return (
        <g>
            <path
                d={d}
                fill={`url(#${idBackGround})`}
                filter={`url(#${idShadow})`}
                strokeWidth={strokeWidth}
                stroke={color ? color : mainColor}
                onClick={handleClick}
                style={{cursor: (isEditMode || !link) ? 'auto' : 'pointer'}}
            />
            <g
                ref={textRefAll}
                title={title}
                transform={`translate(${point.x}, ${point.y})`}
            >
                <foreignObject
                    x={0}
                    y={0}
                    width={textWidth}
                    height={textHeight}
                >
                    <TitleArc
                        title={title}
                        color={color ? color : mainColor}
                        isEditMode={isEditMode}
                        link={link}
                        onClick={handleClick}
                        styleInConfig={styleInConfig}
                        onTextSizeChange={handleTextSizeChange}
                    />
                </foreignObject>
            </g>
        </g>
    )
};

export default Arc;