import React, { useEffect, useState } from 'react';
import useFetchAdminStats from '../LongevityAPI/useFetchAdminStats';
import PolarChartDesigner from "../PolarChart/index";


const index = () => {
    const { apiData } = useFetchAdminStats()
    const [ userAgeDistribution, setUserAgeDistribution ] = useState({
      title: '',
      data: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
          },
        ],
      },
    });

    useEffect(()=>{
        if (apiData?.count_users_by_age){
            setUserAgeDistribution(apiData?.count_users_by_age)
        }
    }, [apiData?.count_users_by_age])

    const dataProps = userAgeDistribution;
    const title = userAgeDistribution?.title;

    return (
      <PolarChartDesigner 
      data={{ originalData: { data:dataProps?.data, title } }} geoDashboard={true} />
    )
    
}

export default index