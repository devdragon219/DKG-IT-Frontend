import { CREATE_ROUTE } from "../../constants/routes";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataFromComponent } from "../../store/item";

const AdminPanelsConstructorIftame = (props) => {
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

      if (e.data.type === "rightDataSource") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            rightDataSource: e.data.rightDataSource,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "rightSidebar") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            rightSidebar: e.data.rightSidebar,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "headerLinks") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            headerLinks: e.data.headerLinks,
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

      if (e.data.type === "customiseOptions") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            customiseOptions: e.data.customiseOptions,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "showMacroPanel") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            showMacroPanel: e.data.showMacroPanel,
          },
        };

        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "macroPanel") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            macroPanel: e.data.macroPanel,
          },
        };

        dispatch(setDataFromComponent(data));
      }
    };
  }, [data]);

  return (
    <iframe
      ref={iFrameRef}
      title="AdminPanelsIftame"
      style={{ width: "100%", height: "800px" }}
      src={`${CREATE_ROUTE}:diagramType/AdminPanelsConstructorEdit`}
    />
  );
};

export default AdminPanelsConstructorIftame;
