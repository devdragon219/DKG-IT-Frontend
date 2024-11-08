import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
import PolarChartDesigner from "../PolarChart/index";


const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ ambassadorsAgeDistribution, setAmbassadorsAgeDistribution ] = useState({
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
        if (apiData?.ambassadors_age_range){
            setAmbassadorsAgeDistribution(apiData?.ambassadors_age_range)
        }
    }, [apiData?.ambassadors_age_range])

    const dataProps = ambassadorsAgeDistribution;
    const title = ambassadorsAgeDistribution?.title;

    return (
      <PolarChartDesigner 
      data={{ originalData: { data:dataProps?.data, title } }} geoDashboard={true} />
    )
    
}

export default index;