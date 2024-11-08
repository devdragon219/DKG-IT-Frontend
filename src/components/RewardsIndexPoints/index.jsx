import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import KeyIndicatorsResp from "../KeyIndicatorsResp/index"

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ longevityPointsIndex, setLongevityPointsIndex] = useState()

    useEffect(() => {
        if (apiData) {
            setLongevityPointsIndex(apiData?.longevity_points_index)
        }
    }, [apiData?.longevity_points_index])

    const dataProps = longevityPointsIndex?.rows;
    const backgroundColor = longevityPointsIndex?.backgroundColor;
    const titleColor = longevityPointsIndex?.titleColor;
    const title = longevityPointsIndex?.title;



    return (
            <KeyIndicatorsResp
                data={{ originalData: { rows:dataProps, title, titleColor, backgroundColor } }} geoDashboard={"true"} />
    )
}

export default index