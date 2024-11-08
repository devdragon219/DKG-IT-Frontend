import React, {memo} from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    nameItem: {
        color: "#fff",
        padding: '8px 16px',
        textAlign: "center",
        margin: '16px',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
}));

const Name = memo((props) => {
    const classes = useStyles();
    const {handleSetListNames, color, name, link, isEditMode} = props;

    const handleClick = () => {
        if (isEditMode || !link) return
        window.open(link, '_blank');
    };

    return (
        <div
            ref={ref => handleSetListNames(ref)}
            className={classes.nameItem}
            onClick={handleClick}
            style={{backgroundColor: color, cursor: (!isEditMode && link) ? 'pointer' : 'auto'}}
        >
            {name}
        </div>

    )
})


export default Name;
