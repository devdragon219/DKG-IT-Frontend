import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@mui/base";
import HeaderConstructor from "./HeaderConstructor";
import SectionConstructor from "./SectionConstructor";
import { mockData } from "./mockData";

const PageBuilder = (props) => {
  let dataProps = props?.data?.originalData;
  const { isEditMode } = props;

  const [logoBase64, setLogoBase64] = useState(dataProps?.logoBase64 || "");
  const [headerData, setHeaderData] = useState(dataProps?.headerData || []);
  const [dataSource, setDataSource] = useState(dataProps?.dataSource || []);

  useEffect(() => {
    window.onmessage = function (e) {
      if (e?.data?.originalData) {
        setLogoBase64(e.data.originalData.logoBase64);
        setHeaderData(e.data.originalData.headerData);
        setDataSource(e.data?.originalData?.dataSource);
      }
    };
  }, []);

  useEffect(() => {
    window.top.postMessage({ logoBase64: logoBase64, type: "logoBase64" }, "*");
  }, [logoBase64]);

  useEffect(() => {
    window.top.postMessage({ headerData: headerData, type: "headerData" }, "*");
  }, [headerData]);

  useEffect(() => {
    window.top.postMessage({ dataSource: dataSource, type: "dataSource" }, "*");
  }, [dataSource]);

  useEffect(() => {
    if (isEditMode) {
      return;
    }
  }, [dataProps, isEditMode]);

  return (
    <div>
      <HeaderConstructor
        isEditMode={isEditMode}
        logoBase64={logoBase64}
        setLogoBase64={setLogoBase64}
        headerData={headerData}
        setHeaderData={setHeaderData}
      />
      <SectionConstructor
        isEditMode={isEditMode}
        dataSource={dataSource}
        setDataSource={setDataSource}
      />
    </div>
  );
};

export default PageBuilder;
