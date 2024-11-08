import { CREATE_ROUTE } from "../../constants/routes";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataFromComponent } from "../../store/item";

const PageBuilderIftame = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [isDataSent, setisDataSent] = useState(false);
  const iFrameRef = useRef(null);

  useEffect(() => {
    const keys = data?.originalData ? Object.keys(data.originalData) : [];

    if (props.editDocMode && keys.length && !isDataSent) {
      setTimeout(() => {
        iFrameRef.current.contentWindow.postMessage(data, "*");
      }, [1000]);

      setisDataSent(true);
    }

    window.onmessage = function (e) {
      if (e.data.type === "headerData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            headerData: e.data.headerData,
          },
        };
        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "logoBase64") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            logoBase64: e.data.logoBase64,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "dataSource") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            dataSource: e.data.dataSource,
          },
        };

        dispatch(setDataFromComponent(data));
      }
    };
  }, [data]);

  console.log(data);

  return (
    <iframe
      ref={iFrameRef}
      title="PageBuilderIftame"
      style={{ width: "100%", height: "800px" }}
      src={`${CREATE_ROUTE}:diagramType/PageBuilderEdit`}
    />
  );
};

export default PageBuilderIftame;
