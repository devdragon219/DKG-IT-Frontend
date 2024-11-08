import React, { useEffect, useState } from 'react';
import useFetchAdminStats from '../LongevityAPI/useFetchAdminStats';
import DoughnutChart from '../DoughnutChart';

const index = () => {
    const { apiData } = useFetchAdminStats()
    const [ genderDistrubition, setGenderDistrubition ] = useState()

    useEffect(()=>{
        if (apiData){
            setGenderDistrubition(apiData?.gender_stats)
        }
    }, [apiData?.gender_stats])

    const dataProps = genderDistrubition?.data;
    const height = genderDistrubition?.height ? genderDistrubition?.height : 600;
    const width = genderDistrubition?.width ? genderDistrubition?.width : 600;
    const title = genderDistrubition?.title;



    return (
            <DoughnutChart 
            data={{ originalData: { data:dataProps, height, title, width } }} geoDashboard={"true"} />
    )
}

export default index