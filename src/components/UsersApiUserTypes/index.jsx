import React, { useEffect, useCallback ,useState } from "react";
import axios from "axios";
import PieChartLabels from "../PieChartLabels";
import useFetchAdminStats from "../LongevityAPI/useFetchAdminStats";


const index = () => {
  const { apiData } = useFetchAdminStats()
  const [ userTypesData, setUserTypesData ] = useState()

  useEffect(()=>{
    if (apiData){
      setUserTypesData(apiData?.count_users_by_type)
    }
  }, [apiData?.count_users_by_type])

  const dataProps = userTypesData?.data;
  const height = userTypesData?.height ? userTypesData?.height : 300;
  const title = userTypesData?.title;
  // const selectedTheme = obj?.selectedTheme;
  return (
    <PieChartLabels
      data={{ originalData: { data:dataProps, height, title } }}
      // selectedTheme={selectedTheme}
    />
  );
};

export default index;
