import React, { useEffect, useState } from 'react';
import useFetchAdminStats from '../LongevityAPI/useFetchAdminStats';
import MacroPanel from "../GeoDashboardV2/Components/MacroPanel/index";

const index = () => {
    const { apiData } = useFetchAdminStats()
    const [ usersGeneralStats, setUsersGeneralStats] = useState()

    useEffect(()=>{
        if (apiData?.general_stats){
            setUsersGeneralStats(apiData?.general_stats)
        }
    }, [apiData?.general_stats])

    const dataProps = usersGeneralStats?.data || [{},];
    const title = usersGeneralStats?.title || [{},];

    return (
        <MacroPanel
        data={{ originalData: { data:dataProps, title } }} geoDashboard={true} />
    )
}

export default index