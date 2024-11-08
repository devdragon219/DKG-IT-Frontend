import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    height: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    marginTop: "10px",
  },
  image: {
    objectFit: "contain",
    aspectRatio: "auto",
  },
  titleHeight: {
    height: "80%",
  },
  noTitleHeight: {
    height: "100%",
  },
});

const PortraitImage = (props) => {
  const dataProps = props?.data?.originalData;
  const classes = useStyles();

  const imageUrl = dataProps?.imageUrl;
  const title = dataProps?.title;
  const description = dataProps?.description;
  const titleTop = dataProps?.titleTop || false;
  const titleFont = dataProps?.titleFont || "1em";
  const titleColor = dataProps?.titleColor || "#0c5393";
  const portraitUrl = dataProps?.portraitUrl;

  const hasTitle = !!title;

  const handleImageClick = (event) => {
    if (portraitUrl) {
      window.open(portraitUrl, "_blank");
    }
  };

  return (
    <figure style={{ maxWidth: "100%", height: "100%", margin: 0 }}>
      {titleTop && title && (
        <figcaption
          style={{ fontSize: titleFont, color: titleColor }}
          className={classes.header}
        >
          {title}
        </figcaption>
      )}
      <img
        onClick={handleImageClick}
        src={imageUrl}
        alt="portrait"
        className={`${classes.image} ${
          hasTitle ? classes.titleHeight : classes.noTitleHeight
        }`}
        style={{
          width: "100%",
          height: hasTitle ? "80%" : "100%",
          cursor: "pointer",
        }}
      />
      {!titleTop && title && (
        <figcaption
          style={{ fontSize: titleFont, color: titleColor }}
          className={classes.header}
        >
          {title}
        </figcaption>
      )}
      {!titleTop && description && (
        <figcaption
          style={{ fontSize: "15px", color: titleColor }}
          className={classes.header}
        >
          {description}
        </figcaption>
      )}
    </figure>
  );
};

export default PortraitImage;
