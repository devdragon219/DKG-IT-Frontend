import React from "react";
import IFrame from "../../pages/EditDiagramPage/Iframe";

export default function IframeGeoDash(props) {
  return (
    <IFrame data={props?.data} type="number13"/>
  );
}
