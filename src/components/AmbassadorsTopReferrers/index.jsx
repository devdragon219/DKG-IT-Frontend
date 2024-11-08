import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';

const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ topAmbassadorsReferrers, setTopAmbassadorsReferrers] = useState()

    useEffect(()=>{
        if (apiData?.top_referral_ambassadors){
            setTopAmbassadorsReferrers(apiData?.top_referral_ambassadors)
        }
    }, [apiData?.top_referral_ambassadors])

    const dataProps = topAmbassadorsReferrers?.data;
    const legendWidth = 80;
    const fontSizeYAxis = "12px";
    const labels = topAmbassadorsReferrers?.labels;
    const title = topAmbassadorsReferrers?.title;
    const colors = {
        value1: "#A4D2DE",
        value2: "#fdbf6f",
    }
    

    return (
        <VerticalBarForGeoMaps 
        data={{ originalData: { data:dataProps, title, colors, labels, fontSizeYAxis, 
                legendWidth } }} geoDashboard={"true"} />
    )
}

export default index