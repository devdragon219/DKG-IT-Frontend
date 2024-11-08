/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { setMockData } from "../../store/item";
import { useDispatch } from "react-redux";

import ToolsColection from "../ToolsColection";

import AddPageToolModal from "./AddPageTool";

const ToolsColectionWrapper = ({ isEditMode, data }) => {
  const dispatch = useDispatch();

  const [isAddSectionToolModalOpen, setIsAddSectionToolModalOpen] =
    useState(false);
  const [dataSource, setDataSource] = useState(
    data?.originalData?.dataSource || []
  );

  useEffect(() => {
    if (!isEditMode && data?.originalData) {
      setDataSource(data?.originalData?.dataSource);
    }
  }, [data, isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: {
              dataSource,
            },
          })
        )
      );
    }
  }, [dataSource]);

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        marginBottom: isEditMode ? "20px" : "0px",
        height: "100vh",
      }}
    >
      {isEditMode ? (
        <Button
          onClick={() => {
            setIsAddSectionToolModalOpen(true);
          }}
        >
          Add Tool
        </Button>
      ) : (
        <></>
      )}

      <AddPageToolModal
        isAddSectionToolModalOpen={isAddSectionToolModalOpen}
        setIsAddSectionToolModalOpen={setIsAddSectionToolModalOpen}
        dataSource={dataSource}
        setDataSource={setDataSource}
      />
      {dataSource.length > 0 ? (
        <ToolsColection dataSource={dataSource} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToolsColectionWrapper;
