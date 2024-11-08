import { Button } from "@mui/material";
import React from "react";

function ImageToBase64Converter({ isEditMode, logoBase64, setLogoBase64 }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        setLogoBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <img
          src={logoBase64 ? `data:image;base64,${logoBase64}` : "/assets/Logo.webp"}
          alt="Logo"
          height={54}
          style={{ display: "block" }}
        />
      </div>
      {isEditMode ? (
        <div>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <Button component="span">Edit Logo</Button>
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default ImageToBase64Converter;
