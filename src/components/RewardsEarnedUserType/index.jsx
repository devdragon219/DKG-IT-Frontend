import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import LineChartSimple from '../LineChartSimple';

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ rewardsEarnedUserTypes, setRewardsEarnedUserTypes ] = useState({})

    useEffect(()=>{
        if (apiData){
            setRewardsEarnedUserTypes(apiData?.earned_by_user_types)
        }
    }, [apiData?.earned_by_user_types])

    const dataProps = rewardsEarnedUserTypes?.data;
    const yMin = rewardsEarnedUserTypes?.yMin;
    const yMax = rewardsEarnedUserTypes?.yMax;
    const labels = rewardsEarnedUserTypes?.labels;
    const title = rewardsEarnedUserTypes?.title;
    const colors = rewardsEarnedUserTypes?.colors || { colors: {
        "value1": "#548cd8",
        "value2": "#fc6262",
        "value3": "#6bbd4b",
        "value4": "#f9a35b",
        "value5": "#8a63d2"
    }};
    // data, labels, colors, title, yMin, yMax


    return (
        <LineChartSimple 
        data={{ originalData: { data:dataProps, title, colors, 
            labels, yMin, yMax } }} geoDashboard={"true"} />
    )

}

export default index