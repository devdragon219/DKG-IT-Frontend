import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customText: {
    color: "#083763",
    padding: "20px",
  display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bannerColor: {
    backgroundColor: "#f7f6f5",
  },
  logoImage: {
    height: "50px",
    width: "auto",
    cursor: "pointer",
  },
  button: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  marginBetweenButtons: {
    display: "flex",
    gap: "16px",
  },
});

const PromoBannerDesigner = (props) => {
  const classes = useStyles(props);
  const [companyLogos, setCompanyLogos] = useState([]);
  const [updatedImages, setUpdatedImages] = useState([]);
  let { images } = props.data.originalData;

  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    if (props && props.data && props.data.originalData && props.data.originalData.data) {
      const decodedImages = props.data.originalData.data.map((elem) => {
        const cleanBase64 = elem.replace(/^"(.*)"$/, "$1");
        return cleanBase64;
      });
      setNewImages(decodedImages);
    }
  }, [props]);

  useEffect(() => {
    setUpdatedImages([ ...images ]);
  }, [images]);

  const handleAddLogo = (e) => {
    const selectedLogos = e.target.files;
    if (companyLogos.length + selectedLogos.length <= 10) {
      const newLogos = Array.from(selectedLogos);
      setCompanyLogos([...companyLogos, ...newLogos]);
    } else {
      alert("You can add up to 10 logos.");
    }
  };

  const getBase64ForLogos = async () => {
    debugger
    const updatedImagesCopy = [ ...updatedImages ];
    console.log("updatedImagesCopy===>",updatedImagesCopy)
    await Promise.all(
      companyLogos.map(async (logo,index) => {
        const base64 = await getBase64(logo);
        const key = `image${index}`;
        updatedImagesCopy[index] = base64;
        return base64;
      })
    );

    setUpdatedImages(updatedImagesCopy);

    const jsonData = JSON.stringify({ originalData: { data: updatedImagesCopy } });
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "convertedImages.json"; 
    a.style.display = "none";


    document.body.appendChild(a);
    a.click();


    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
      reader.readAsDataURL(file);
    });
  };

  images = updatedImages;

  const renderLogos = () => {
    return companyLogos.map((logo, index) => (
      <Grid item key={index}>
        <img
          src={URL.createObjectURL(logo)}
          alt={`Company Logo ${index + 1}`}
          className={classes.logoImage}
        />
      </Grid>
    ));
  };

  return (
    !newImages.length ? (
      <Container>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h5" gutterBottom className={classes.customText}>
            Our Influential Partners
          </Typography>
          <Grid container spacing={2} className={classes.bannerColor} justifyContent="center">
            {renderLogos()}
          </Grid>
          <Box className={classes.button}>
            {companyLogos.length < 10 && (
              <Box>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAddLogo}
                  style={{ display: "none" }}
                  id="logo-upload"
                  multiple
                />
                <label htmlFor="logo-upload">
                  <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                    Upload Logo
                  </Button>
                </label>
              </Box>
            )}
            <Button onClick={getBase64ForLogos} variant="contained" style={{marginTop: "10px"}}>
              Convert
            </Button>
          </Box>
        </Grid>
      </Container>
    ) : (
      <Container>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h5" gutterBottom className={classes.customText}>
            Our Influential Partners
          </Typography>
          <Grid container spacing={2} className={classes.bannerColor} justifyContent="center">
            {newImages.map((image, index) => (
              <Grid item key={index}>
                <img src={image} alt={`Image ${index + 1}`} className={classes.logoImage} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    )
  );
};

export default PromoBannerDesigner;
