import React, {useEffect, useRef} from "react";
import {makeStyles} from "@mui/styles";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const useStyles = makeStyles(() => ({
    titleArc: {
        color: "#fff",
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderRadius: 2,
        padding: '4px 8px',
        transition: '400ms',
        display: 'flex',
        width: "100%",
        height: '100%',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: "border-box",
        '& .action': {
            width: '20px',
            alignItems: 'center',
            display: ' none',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.5)'
        },
        '&:hover .action': {
            display: 'flex',
        },
    },

}));

const TitleArc = ({title, color, onClick, isEditMode, styleInConfig, onTextSizeChange, link}) => {
    const textRef = useRef(null);

    useEffect(() => {
        const { width, height } = textRef.current.getBoundingClientRect();
        onTextSizeChange(width + 8, height + 4);
    }, [title, onTextSizeChange]);

    const classes = useStyles();
    return (
        <div
            className={classes.titleArc}
            style={{
                cursor: (isEditMode || !link) ? 'auto' : 'pointer',
                backgroundColor: color,
                ...styleInConfig
            }}
            onClick={onClick}
        >
            <span ref={textRef}>
                {title}
            </span>
            {isEditMode && (
                <div className="action">
                    <DragIndicatorIcon/>
                </div>)
            }
        </div>
    )
}

export default TitleArc;
