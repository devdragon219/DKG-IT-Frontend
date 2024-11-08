import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';

const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [ marketPlaceTopCategories, setMarketPlaceTopCategories] = useState()

    useEffect(()=>{
        if (apiData?.top_visited_categories){
            setMarketPlaceTopCategories(apiData?.top_visited_categories)
        }
    }, [apiData?.top_visited_categories])

    const dataProps = marketPlaceTopCategories?.data;
    const legendWidth = 80;
    const fontSizeYAxis = "12px";
    const labels = marketPlaceTopCategories?.labels;
    const title = marketPlaceTopCategories?.title;
    const colors = {
        value1: "#A6E3B6",
        value2: "#fdbf6f",
    }
    

    return (
        <VerticalBarForGeoMaps 
        data={{ originalData: { data:dataProps, title, colors, labels, fontSizeYAxis, 
                legendWidth } }} geoDashboard={"true"} />
    )
}

export default index