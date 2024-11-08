import React, { useMemo, useState } from "react";

import "./styles.css";
import MacroPanel from "./MacroPanel/MacroPanel";
import GridLayout from "./GridLayout";
import BottomPagination from "./BottomPagination";
import {
  initialLayouts,
  initialPages,
} from "../../pages/DashboardCreatPage/constants";

const DashboardConstructorNoCode = ({
  setLayouts,
  isEditMode,
  setPagesData,
  data,
}) => {
  console.log(data);
  const pagesData = data.originalData.pagesData;
  const layouts = data.originalData.layouts;

  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [gridWidth, setGridWidth] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTool, setSelectedTool] = useState(null);
  const selectedPageLayout = useMemo(() => {
    return layouts[currentPage - 1];
  }, [layouts, currentPage]);

  window.onmessage = function (e) {
    if (e.data.type === "SAVE_MESSAGE") {
      setPagesData((prevState) => {
        const temp = JSON.parse(JSON.stringify(prevState));

        temp[currentPage - 1][selectedTool] = {
          type: e.data.diagramType,
          data: e.data.data,
          blured: false,
        };

        return temp;
      });
    }
  };

  const macroPanelData = useMemo(() => {
    return pagesData[currentPage - 1].macro_panel.data;
  }, [pagesData, currentPage]);

  const macroPanelConfig = useMemo(() => {
    return pagesData[currentPage - 1].macro_panel.customizeSettings;
  }, [pagesData, currentPage]);

  const addPage = () => {
    setPagesData((prevState) => {
      return [...prevState, initialPages[0]];
    });
    setLayouts((prevState) => {
      return [...prevState, initialLayouts[0]];
    });

    setSelectedPage(pagesData.length + 1);
    setCurrentPage(pagesData.length + 1);
  };

  const removePage = (index) => {
    setPagesData((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 1);

      return newData;
    });

    setLayouts((prevState) => {
      const newLayout = [...prevState];
      newLayout.splice(index, 1);

      return newLayout;
    });

    setSelectedPage((prev) => Math.min(prev, pagesData.length - 1));
    setCurrentPage((prev) => Math.min(prev, pagesData.length - 1));
  };

  return (
    <div
      style={{
        height: isEditMode ? undefined : "100vh",
        position: "relative",
      }}
    >
      <MacroPanel
        currentBreakpoint={currentBreakpoint}
        data={macroPanelData}
        macroPanelConfig={macroPanelConfig}
        gridWidth={gridWidth}
      />
      <GridLayout
        layouts={selectedPageLayout}
        setLayouts={setLayouts}
        currentBreakpoint={currentBreakpoint}
        setCurrentBreakpoint={setCurrentBreakpoint}
        isEditMode={isEditMode}
        currentPage={currentPage}
        setSelectedTool={setSelectedTool}
        selectedTool={selectedTool}
        pagesData={pagesData}
        setPagesData={setPagesData}
        setGridWidth={setGridWidth}
      />
      <BottomPagination
        pagesData={pagesData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedPage={setSelectedPage}
        macroPanelConfig={macroPanelConfig}
        isEditMode={isEditMode}
        addPage={addPage}
        removePage={removePage}
        currentBreakpoint={currentBreakpoint}
      />
    </div>
  );
};

export default DashboardConstructorNoCode;
