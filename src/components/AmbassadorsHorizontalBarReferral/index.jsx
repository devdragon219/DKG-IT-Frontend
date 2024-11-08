import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';
import HorizontalBar from '../HorizontalBar';

const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ ambassadorsReferrersPerQ, setTopAmbassadorsReferrers] = useState()
    // Ambassador referrals per Quarter
    useEffect(()=>{
        if (apiData?.ambassadors_and_referred_users_count){
            setTopAmbassadorsReferrers(apiData?.ambassadors_and_referred_users_count)
        }
    }, [apiData?.ambassadors_and_referred_users_count])

    const dataProps = ambassadorsReferrersPerQ?.data || [{},];
    const height = ambassadorsReferrersPerQ?.height || 200;
    const labels = ambassadorsReferrersPerQ?.labels || {uv:"", pv:""};
    const title = ambassadorsReferrersPerQ?.title || "Title Chart";
    const colors = ambassadorsReferrersPerQ?.colors || { "value1": "#7234de", "value2": "#548cd8" };

    return (
        <HorizontalBar 
        data={{ originalData: { data:dataProps, title, colors, labels, height } }} geoDashboard={true} />
    )
}

export default index