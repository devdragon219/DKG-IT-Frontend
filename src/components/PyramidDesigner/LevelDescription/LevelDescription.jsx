import React from "react";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    overwievItem: {
        flexDirection: "column",
        padding: "5px",
        textAlign: "center",
        display: "flex",
        minHeight: "100px",
        justifyContent: "center",
        alignItems: "center",
        background: 'linear-gradient(to bottom, #083763, #4483bc, #aac9e6)',
        color: "#fff",
    },
    overwievWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "90%",
    },
}));

const getColor = (index, length) => {
    if (index === 0) return "#083763"
    if (index === length - 1) return "#6c9eeb"
    if (index > 0) {
        const coef = length / index;
        console.log('coef', coef);
        return "#6c9eeb"
    }

}

const LevelDescription = ({description, allDiapazons}) => {
    const classes = useStyles();
    const multiplier = 100 / (allDiapazons.length - 1);
    return (
        <div className={classes.overwievWrapper}>
            {allDiapazons.map((level, index) => {
                return (
                    <div
                        key={`${level}`}
                        className={classes.overwievItem}
                        style={{
                            color: '#fff',
                            transform: `translateX(-${
                                multiplier * (allDiapazons.length - 1 - index)
                            }%)`,
                            backgroundSize: `100% ${(allDiapazons.length) * 200}px`,
                            backgroundPositionY: `-${(index+1) * 200 - 200}px`,
                        }}
                    >
                        <Typography>{description}</Typography>
                        <Typography>{`${level}`}</Typography>
                    </div>
                );
            })}
        </div>
    );
};

export default LevelDescription;
