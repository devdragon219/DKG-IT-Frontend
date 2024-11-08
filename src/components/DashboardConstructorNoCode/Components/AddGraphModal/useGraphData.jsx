import { useState, useEffect } from "react";
import useFetchAdminStats, { useFetchAmbassadorsStats, useFetchUserRewardsStats } from "../../../LongevityAPI/useFetchAdminStats";

const useGraphData = (
  pagesData,
  page,
  editedGraph,
  layout,
  setPagesData,
  dispatch,
  setMockData,
  setOpen
) => {
  const [data, setData] = useState(null);
  const [selectedGraph, setSelectedGraph] = useState(null);
  const [blured, setBlured] = useState(false);
  const [binded, setBinded] = useState(false);
  const [defaultKey, setDefaultKey] = useState(0);

  const { apiData } = useFetchAdminStats()
  const { apiData:ambassador } = useFetchAmbassadorsStats()
  const { apiData:rewards } = useFetchUserRewardsStats()
  const [ generalStats, setGeneralStats] = useState({})

  useEffect(()=>{
    if (apiData?.general_stats && editedGraph === "macro_panel" && selectedGraph === "UsersGeneralStats") {
      setData({"originalData":apiData?.general_stats})
      setSelectedGraph("UsersGeneralStats")
      setGeneralStats(apiData?.general_stats)
      return
    }else if (ambassador?.general_stats && editedGraph === "macro_panel" && selectedGraph === "AmbassadorsGeneralStats") {
      setData({"originalData":ambassador?.general_stats})
      setSelectedGraph("AmbassadorsGeneralStats")
      setGeneralStats(ambassador?.general_stats)
      return
    }else if (rewards?.rewards_general_stats && editedGraph === "macro_panel" && selectedGraph === "RewardsGeneralStats") {
      setData({"originalData":rewards?.rewards_general_stats})
      setSelectedGraph("RewardsGeneralStats")
      setGeneralStats(rewards?.rewards_general_stats)
      return
    }
    }, [selectedGraph, editedGraph, pagesData, page, rewards?.rewards_general_stats, apiData?.general_stats, ambassador?.general_stats])

  useEffect(() => {
    if (editedGraph === "macro_panel") {
      setSelectedGraph("KeyParameters");
      return;
    }

    const pageData = pagesData?.[page]?.[editedGraph];
    if (pageData?.type && pageData?.data && editedGraph !== "macro_panel") {
      setData(pageData.data);
      setBlured(pageData.blured);
      setBinded(pageData.binded);
      setDefaultKey(pageData.defaultKey);
      setSelectedGraph(pageData.type);
    } else {
      setData(null);
      setBlured(false);
      setBinded(false);
      setDefaultKey(0);
      setSelectedGraph(null);
    }
  }, [editedGraph, pagesData, page, apiData?.general_stats]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = JSON.parse(JSON.stringify(pagesData));

    newData[page][editedGraph] = {
      type: selectedGraph,
      data: data,
      defaultKey: defaultKey,
      binded: binded,
      blured: blured,
    };

    setPagesData(newData);

    dispatch(
      setMockData(
        JSON.stringify({
          originalData: { data: newData, layout: layout },
        })
      )
    );

    setBinded(false);
    setData(null);
    setDefaultKey(0);
    setSelectedGraph(null);
    setOpen(false);
  };

  const uploadJson = (e, index) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (index !== undefined && binded) {
        if (data) {
          setData({ ...data, [index]: JSON.parse(e.target.result) });
          return;
        }
        setData({ [index]: JSON.parse(e.target.result) });

        return;
      }

      setData(JSON.parse(e.target.result));
    };
  };

  return [
    selectedGraph,
    setSelectedGraph,
    data,
    setData,
    blured,
    setBlured,
    handleSubmit,
    uploadJson,
    binded,
    setBinded,
    defaultKey,
    setDefaultKey,
  ];
};

export default useGraphData;
