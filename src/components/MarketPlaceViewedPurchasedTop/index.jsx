import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';
import HorizontalBar from '../HorizontalBar';

const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [marketPlaceViewdPurchasedTopStats, setMarketPlaceViewdPurchasedTopStats] = useState()
    // Ambassador referrals per Quarter
    useEffect(() => {
        if (apiData?.most_viewed_purchased_offers) {
            setMarketPlaceViewdPurchasedTopStats(apiData?.most_viewed_purchased_offers)
        }
    }, [apiData?.most_viewed_purchased_offers])

    const dataProps = marketPlaceViewdPurchasedTopStats?.data?.reduce((acc, currentItem) => {
        // Shorten the name to the first 5 characters
        const shortenedName = currentItem.name.toLowerCase().substring(0, 7);

        // Add the modified item to the accumulator
        acc.push({ ...currentItem, name: shortenedName });
        // Capitalize the first letter of the shortened name

        return acc;
    }, []) || [{},];
    const height = marketPlaceViewdPurchasedTopStats?.height || 200;
    const labels = marketPlaceViewdPurchasedTopStats?.labels || { uv: "", pv: "" };
    const title = marketPlaceViewdPurchasedTopStats?.title || "Title Chart";
    const colors = { "value1": "#7234de", "value2": "#548cd8" };
    const rotateLabels = 0;

    return (
        <HorizontalBar
            data={{ originalData: { data: dataProps, title, colors, labels, height, rotateLabels } }} geoDashboard={true} />
    )
}

export default index