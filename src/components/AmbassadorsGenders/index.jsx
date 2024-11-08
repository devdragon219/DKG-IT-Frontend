import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from "../LongevityAPI/useFetchAdminStats";
import DoughnutChart from '../DoughnutChart';


const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ ambassadorsGenderDistrubition, setAmbassadorsGenderDistrubition ] = useState()

    useEffect(()=>{
        if (apiData){
            setAmbassadorsGenderDistrubition(apiData?.ambassadors_gender_distribution)
        }
    }, [apiData?.ambassadors_gender_distribution])

    const dataProps = ambassadorsGenderDistrubition?.data;
    const height = ambassadorsGenderDistrubition?.height ? ambassadorsGenderDistrubition?.height : 600;
    const width = ambassadorsGenderDistrubition?.width ? ambassadorsGenderDistrubition?.width : 600;
    const title = ambassadorsGenderDistrubition?.title;

    return (
            <DoughnutChart 
            data={{ originalData: { data:dataProps, height, title, width } }} geoDashboard={"true"} />

    )
}

export default index