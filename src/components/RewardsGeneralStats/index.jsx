import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import MacroPanel from "../GeoDashboardV2/Components/MacroPanel/index";

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ rewardsPointsGeneralStats, setRewardsPointsGeneralStats] = useState()
    useEffect(()=>{
        if (apiData?.general_stats){
            setRewardsPointsGeneralStats(apiData?.general_stats)
        }
    }, [apiData?.general_stats])

    const dataProps = rewardsPointsGeneralStats?.data || [{},];
    const title = rewardsPointsGeneralStats?.title || [{},];

    return (
        <MacroPanel
        data={{ originalData: { data:dataProps, title } }} geoDashboard={true} />
    )
}

export default index