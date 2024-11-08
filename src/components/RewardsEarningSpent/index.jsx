import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats, useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';
import HorizontalBar from '../HorizontalBar';

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ rewardsSpentEarnedPerMonth, setTewardsSpentEarnedPerMonth] = useState()
    // Rewards Points spent/earned per month
    useEffect(()=>{
        if (apiData?.earned_spent_points_by_month){
            setTewardsSpentEarnedPerMonth(apiData?.earned_spent_points_by_month)
            console.log(apiData?.earned_spent_points_by_month)
        }
    }, [apiData?.earned_spent_points_by_month])

    const dataProps = rewardsSpentEarnedPerMonth?.data || [{},];
    const height = rewardsSpentEarnedPerMonth?.height || 200;
    const labels = rewardsSpentEarnedPerMonth?.labels || {uv:"", pv:""};
    const title = rewardsSpentEarnedPerMonth?.title || "Title Chart";
    const colors = rewardsSpentEarnedPerMonth?.colors || { "value1": "#7234de", "value2": "#548cd8" };

    return (
        <HorizontalBar 
        data={{ originalData: { data:dataProps, title, colors, labels, height } }} geoDashboard={true} />
    )
}

export default index