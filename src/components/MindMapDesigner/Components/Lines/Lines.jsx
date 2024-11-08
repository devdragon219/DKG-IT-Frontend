import React, {memo, useCallback, useEffect, useState} from "react";

const Lines = memo((props) => {
    const {listNameBlockRefs, names, widthPies, blockName} = props;
    const [listNameRects, setListNameRects] = useState([]);
    const [parentSize, setParentSize] = useState(null);

    const calculateX2 = useCallback((x, y, R) => {
        return x + (R - Math.sqrt(R ** 2 - y ** 2));
    }, []);


    useEffect(() => {
        if (listNameBlockRefs.length !== names.length) return
        const nameRects = listNameBlockRefs.map(ref => ref.getBoundingClientRect());
        setListNameRects(nameRects);
        const size = blockName.getBoundingClientRect();
        setParentSize(size)

    }, [listNameBlockRefs, names]);

    if (listNameRects.length === 0) return

    return (
        <>
            {
                names.map((item, index) => {
                    const {right, top, height} = listNameRects[index];
                    const x1 = right - parentSize.left;
                    const y1 = top - parentSize.top + (height / 2);
                    const x2 = x1 + (widthPies / 2) - item.outerRadius + ((item.outerRadius - item.innerRadius) / 2) + 30;

                    return (
                        <line
                            key={index}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y1}
                            stroke={item.color}
                            strokeWidth={item.strokeWidth}
                        />
                    )
                })}
        </>
    )
})

export default Lines;