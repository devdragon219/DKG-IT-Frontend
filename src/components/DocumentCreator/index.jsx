import { CREATE_ROUTE } from "../../constants/routes";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataFromComponent } from "../../store/item";

const DocumentCreatorIftame = (props) => {
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
      console.log(e.data.type);
      if (e.data.type === "introductionData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            introductionData: e.data.introductionData,
          },
        };
        dispatch(setDataFromComponent(data));
      }
      if (e.data.type === "items") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            items: e.data.items,
          },
        };

        dispatch(setDataFromComponent(data));
      }
      if (e.data.type === "companyInfo") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            companyInfo: e.data.companyInfo,
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
    };
  }, [data]);

  return (
    <iframe
      ref={iFrameRef}
      title="DocumentCreatorIftame"
      style={{ width: "100%", height: "800px" }}
      src={`${CREATE_ROUTE}:diagramType/DocumentCreatorEdit`}
    />
  );
};

export default DocumentCreatorIftame;
