import React, { useEffect, useRef, useState } from "react";
import { CREATE_ROUTE } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { setDataFromComponent } from "../../store/item";

const UkMapChart = (props) => {
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
      if (e.data.type === "backgroundColor") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            backgroundColor: e.data.backgroundColor,
          },
        };
        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "colors") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            colors: e.data.colors,
          },
        };
        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "borderEnabled") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            borderEnabled: e.data.borderEnabled,
          },
        };
        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "title") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            title: e.data.title,
          },
        };
        dispatch(setDataFromComponent(data));
      }

      if (e.data.type === "legendItems") {
        const data = {
          ...props.data,
          originalData: {
            ...props.data.originalData,
            legendItems: e.data.legendItems,
          },
        };
        dispatch(setDataFromComponent(data));
      }
    };
  }, [data]);

  console.log(props);

  return (
    <iframe
      ref={iFrameRef}
      title="UkMapChart"
      style={{ width: "100%", height: "800px" }}
      src={`${CREATE_ROUTE}:diagramType/UkMapChartEdit`}
    />
  );
};

export default UkMapChart;
