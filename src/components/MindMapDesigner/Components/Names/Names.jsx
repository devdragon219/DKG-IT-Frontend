import React, {useContext} from "react";
import {makeStyles} from "@mui/styles";
import Name from "../Name";
import {MindMapContext} from "../../MindMap";

const useStyles = makeStyles(() => ({
    blockNames: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%"
    }
}));

const SHIFT_FROM_THE_RIGHT = 16;

const Names = (props) => {
    const classes = useStyles();
    const {
        isEditMode
    } = useContext(MindMapContext);

    return (
        <foreignObject x="0" y="0" width={props.width - SHIFT_FROM_THE_RIGHT} height="100%">
            <div
                ref={ref => props.handleName(ref)}
                className={classes.blockNames}
            >
                {props.names.map((item) => (
                    <Name
                        key={item.name}
                        handleSetListNames={props.handleSetListNames}
                        isEditMode={isEditMode}
                        {...item}
                    />

                ))}
            </div>
        </foreignObject>
    )
}

export default Names;
