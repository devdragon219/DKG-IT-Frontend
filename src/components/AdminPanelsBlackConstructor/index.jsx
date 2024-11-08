import { CREATE_ROUTE } from "../../constants/routes";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataFromComponent } from "../../store/item";

const AdminPanelsBlackConstructorIftame = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [isDataSent, setisDataSent] = useState(false);
  const iFrameRef = useRef(null);
  console.log(data, 777788888);
  useEffect(() => {
    const keys = data?.originalData ? Object.keys(data.originalData) : [];

    if (props.editDocMode && keys.length && !isDataSent) {
      setTimeout(() => {
        iFrameRef.current.contentWindow.postMessage(data, "*");
      }, [1000]);

      setisDataSent(true);
    }

    window.onmessage = function (e) {
      if (e.data.type === "contentData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            contentData: e.data.contentData,
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

      if (e.data.type === "passData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            passData: e.data.passData,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "gridData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            gridData: e.data.gridData,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "titleData") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            titleData: e.data.titleData,
          },
        };

        dispatch(setDataFromComponent(data));
      }
    };
  }, [data]);

  return (
    <iframe
      ref={iFrameRef}
      title="AdminPanelsBlackConstructorIftame"
      style={{ width: "100%", height: "800px" }}
      src={`${CREATE_ROUTE}:diagramType/AdminPanelsBlackConstructorEdit`}
    />
  );
};

export default AdminPanelsBlackConstructorIftame;
