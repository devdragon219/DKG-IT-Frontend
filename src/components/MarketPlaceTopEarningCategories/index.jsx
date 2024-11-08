import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import PieChartLabels from "../PieChartLabels";
import { useFetchMarketPlaceStats } from "../LongevityAPI/useFetchAdminStats";


const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [ topPurchasedCategories, setTopPurchasedCategories] = useState()

    useEffect(() => {
        if (apiData) {
            setTopPurchasedCategories(apiData?.top_purchased_categories)
        }
    }, [apiData?.top_purchased_categories])

    const dataProps = topPurchasedCategories?.data;
    const height = topPurchasedCategories?.height ? topPurchasedCategories?.height : 300;
    const title = topPurchasedCategories?.title;
    // const selectedTheme = obj?.selectedTheme;
    return (
        <PieChartLabels
            data={{ originalData: { data: dataProps, height, title } }}
        // selectedTheme={selectedTheme}
        />
    );
};

export default index;
