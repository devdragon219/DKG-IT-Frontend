import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from "../LongevityAPI/useFetchAdminStats";
import DoughnutChart from '../DoughnutChart';


const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [ visitorsGenderDistrubition, setVisitorsGenderDistrubition ] = useState()

    useEffect(()=>{
        if (apiData?.visitors_percentage_by_gender){
            setVisitorsGenderDistrubition(apiData?.visitors_percentage_by_gender)
        }
    }, [apiData?.visitors_percentage_by_gender])

    const dataProps = visitorsGenderDistrubition?.data;
    const height = visitorsGenderDistrubition?.height ? visitorsGenderDistrubition?.height : 600;
    const width = visitorsGenderDistrubition?.width ? visitorsGenderDistrubition?.width : 600;
    const title = visitorsGenderDistrubition?.title;

    return (
            <DoughnutChart 
            data={{ originalData: { data:dataProps, height, title, width } }} geoDashboard={"true"} />

    )
}

export default index