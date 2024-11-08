import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  logo: {
    transform: "translateY(-15px) translateX(-30px)",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(2) translateY(-15px) translateX(-20px)",
      zIndex: "1000",
    },
  },
  circle: {
    // transform: "translateX(-15px)",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(2) translateX(0px)",
      zIndex: "1000",
    },
  },
  title: {
    zIndex: "10",
    transform: "translateX(-100px) translateY(-10px)",
    fontSize: "30px",
  },
  titleLast: {
    zIndex: "10",
    fontSize: "30px",
  },
  img: {
    transform: "translateY(-132px) translateX(-30px)",
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export const NodeComponentVert = ({
  handleOpen,
  setModalData,
  rd3tNodeProps,
  nodeData,
  foreignObjectProps,
}) => {
  const classes = useStyles();

  const { name, children, logo, tooltip, imgTop, description } = nodeData;

  return (
    <g
      className={`rd3t-node ${
        classes === "future" ? "node__branch__future" : "node__branch"
      }`}
    >
      {children?.length > 0 && imgTop ? (
        <HtmlTooltip
          title={
            <>
              <Typography color="inherit">{name}</Typography>
              {tooltip}
            </>
          }
        >
          <image
            className={classes.img}
            href={imgTop}
            height="100px"
            width="100px"
          />
        </HtmlTooltip>
      ) : (
        <></>
      )}
      {logo ? (
        <image
          onClick={() => {
            setModalData({
              imgTop: imgTop,
              logo: logo,
              name: name,
              description: description,
            });
            handleOpen();
          }}
          className={classes.logo}
          href={logo}
          height="30"
          width="60"
        />
      ) : (
        <circle
          className={classes.circle}
          r="15"
          onClick={() => {
            setModalData({
              imgTop: imgTop,
              logo: logo,
              name: name,
              description: description,
            });
            handleOpen();
          }}
        ></circle>
      )}

      <foreignObject {...foreignObjectProps} className={classes.title}>
        <div>
          <h3
            style={{
              textAlign: "center",
              margin: 0,
              fontSize: "25px",
            }}
          >
            {name}
          </h3>
        </div>
      </foreignObject>
    </g>
  );
};
