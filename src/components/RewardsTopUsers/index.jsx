import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ TopRewardedUsers, setTopRewardedUsers ] = useState()

    useEffect(()=>{
        if (apiData){
            setTopRewardedUsers(apiData?.most_earned_users)
        }
    }, [apiData?.most_earned_users])

    const dataProps = TopRewardedUsers?.data;
    const legendWidth = 80;
    const fontSizeYAxis = "12px";
    const labels = TopRewardedUsers?.labels;
    const title = TopRewardedUsers?.title;
    const colors = {
        value1: "#B1C8DC",
        value2: "#fdbf6f",
    }


    return (
        <VerticalBarForGeoMaps 
        data={{ originalData: { data:dataProps, title, colors, labels, fontSizeYAxis, 
                legendWidth } }} geoDashboard={"true"} />
    )
}

export default index