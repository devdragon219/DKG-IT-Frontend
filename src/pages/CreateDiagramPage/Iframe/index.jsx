import React, {useRef, memo} from "react";
import {pathToIframe} from '../../../constants/routes';

const IFrame = memo(({type, data}) => {
    const isMountedRef = useRef(false);
    const iFrameRef = useRef(null);

    return (
        <iframe
            title={type}
            ref={(node) => {
                if (!node || isMountedRef.current) return
                isMountedRef.current = true;
                iFrameRef.current = node;
            }}
            onLoad={
                () => {
                    if (!iFrameRef.current) return
                    iFrameRef.current.contentWindow.postMessage(
                        {data: data, name: "parentMessage"},
                        "*"
                    )
                }
            }
            style={{width: "100%", height: "780px", border: '1px solid #ccc'}}
            src={pathToIframe(type)}
        />
    );
})

export default IFrame;
