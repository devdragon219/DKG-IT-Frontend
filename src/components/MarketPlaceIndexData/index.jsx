import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from '../LongevityAPI/useFetchAdminStats';
import KeyIndicatorsResp from "../KeyIndicatorsResp/index"

const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [ marketPlaceIndexData, setMarketPlaceIndexData ] = useState()

    useEffect(()=>{
        if (apiData?.categories_top_index){
            setMarketPlaceIndexData(apiData?.categories_top_index)
        }
    }, [apiData?.categories_top_index])

    const dataProps = marketPlaceIndexData?.rows;
    const backgroundColor = marketPlaceIndexData?.backgroundColor;
    const titleColor = marketPlaceIndexData?.titleColor;
    const title = marketPlaceIndexData?.title;



    return (
                <KeyIndicatorsResp
            data={{ originalData: { rows:dataProps, title, titleColor, backgroundColor } }} geoDashboard={"true"} />
    )
}

export default index