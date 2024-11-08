import React, {useEffect} from "react";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import TriangleComponent from "./TriangleComponent";
import triangle from "./triangle.png";
import LevelDescription from "./LevelDescription";

const useStyles = makeStyles(() => ({
    wrapper: {
        position: "relative",
        minWidth: "700px",
        padding: "30px 100px",
        background: '#fff',
    },
    wrapperTriangle: {
        position: "relative",
        padding: "30px",
        margin: '0 auto',
        transform: 'translateX(-10%)',
    },

    wrapperDescription: {
        top: '30px',
        maxWidth: '250px',
        width: 'calc(80px + 10%)',
        position: "absolute",
        right: "35%",
        transform: 'translateX(200%)',
        height: "100%",
    },

    triangleImg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-30px",
        left: 0,
    },
    pyramydName: {
        maxWidth: '300px',
        zIndex: "10",
        left: 'calc(20% - 200px)',
        right: 'calc(55% + 200px)',
        position: "absolute",
        color: "#25629d",
        border: "3px solid #25629d",
        display: "flex",
        minHeight: "100px",
        justifyContent: "center",
        alignItems: "center",
        padding: "18px",
        '& p': {
            fontSize: '18px',
        }
    },
}));

const PyramidDesigner = (props) => {
    const {editMode = false, data} = props;
    const classes = useStyles();

    const [maxWidth, setMaxWidth] = React.useState(800);

    useEffect(() => {
        if (data?.originalData?.data.length > 20) {
            setMaxWidth(800);
        } else {
            setMaxWidth(400);
        }
    }, [data]);

    return (
        <Grid className={classes.wrapper} container spacing={1} justify="center">
                <div className={classes.pyramydName}>
                    <Typography>{data?.originalData?.title}</Typography>
                </div>
                <div
                    className={classes.wrapperTriangle}
                    style={{maxWidth: `${maxWidth}px`}}
                >
                    <img className={classes.triangleImg} src={triangle} alt=""/>
                    <TriangleComponent
                        data={data?.originalData.data}
                        allDiapazons={data?.originalData?.all_compare_diapazons}
                        dataRowRatio={data?.originalData?.row_ratio}
                        viewMode={!editMode}
                    />
                </div>

                <Grid item xs={3} className={classes.wrapperDescription}>
                    <LevelDescription
                        allDiapazons={data?.originalData?.all_compare_diapazons}
                        description={data?.originalData?.value_description}
                    />
                </Grid>

        </Grid>
    );
};

export default PyramidDesigner;
