import React, { useEffect, useState } from 'react';
import useFetchAdminStats from '../LongevityAPI/useFetchAdminStats';
import VerticalBarForGeoMaps from '../VerticalBarForGeoMaps';

const index = () => {
    const { apiData } = useFetchAdminStats()
    const [ userRolesData, setUserRolesData] = useState()

    useEffect(()=>{
        if (apiData){
            setUserRolesData(apiData?.count_users_by_roles)
        }
    }, [apiData?.count_users_by_roles])

    const dataProps = userRolesData?.data;
    const legendWidth = 80;
    const fontSizeYAxis = "12px";
    const labels = userRolesData?.labels;
    const title = userRolesData?.title;
    const colors = {
        value1: "#1f78b4",
        value2: "#F78E81",
    }


    return (
        <VerticalBarForGeoMaps 
        data={{ originalData: { data:dataProps, title, colors, labels, fontSizeYAxis, 
                legendWidth } }} geoDashboard={"true"} />
    )
}

export default index