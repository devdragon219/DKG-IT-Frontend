import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats, useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';
import HorizontalBar from '../HorizontalBar';
import MacroPanel from "../GeoDashboardV2/Components/MacroPanel/index";

const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ ambassadorGeneralStats, setAmbassadorGeneralStats] = useState()
    useEffect(()=>{
        if (apiData?.general_stats){
            setAmbassadorGeneralStats(apiData?.general_stats)
        }
    }, [apiData?.general_stats])

    const dataProps = ambassadorGeneralStats?.data || [{},];
    const title = ambassadorGeneralStats?.title || [{},];

    return (
        <MacroPanel
        data={{ originalData: { data:dataProps, title } }} geoDashboard={true} />
    )
}

export default index