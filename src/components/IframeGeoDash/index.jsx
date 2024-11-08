import React from "react";

export default function IframeGeoDash(props) {
  const URL = props?.data.originalData.url;
  const config = props?.data.originalData.config;
  const title = props?.data.originalData.title;
  const titleFont = props?.data.originalData.titleFont || "1em";
  const titleColor = props?.data.originalData.titleColor || "#0c5393";
  const titleTop = props?.data.originalData?.titleTop || false;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {titleTop && title && (
        <p
          style={{
            fontFamily: titleFont,
            color: titleColor,
            fontSize: titleFont,
          }}
        >
          {title}
        </p>
      )}
      <iframe
        title="GeoDashCreatorIftame"
        style={{
          width: config?.width ? config?.width : "100%",
          height: config?.height ? config?.height : "100%",
          border: "none",
          borderRadius: "5px",
        }}
        src={URL}
        {...config}
      />
      {!titleTop && title && (
        <p
          style={{
            fontFamily: titleFont,
            color: titleColor,
            fontSize: titleFont,
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
}
