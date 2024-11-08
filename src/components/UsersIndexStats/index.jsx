import React, { useEffect, useState } from 'react';
import useFetchAdminStats from '../LongevityAPI/useFetchAdminStats';
import KeyIndicatorsResp from "../KeyIndicatorsResp/index"

const index = () => {
    const { apiData } = useFetchAdminStats()
    const [ userIndex, setUserIndex ] = useState()

    useEffect(()=>{
        if (apiData){
            setUserIndex(apiData?.user_creation_counts)
        }
    }, [apiData?.user_creation_counts])

    const dataProps = userIndex?.rows;
    const backgroundColor = userIndex?.backgroundColor;
    const titleColor = userIndex?.titleColor;
    const title = userIndex?.title;



    return (
                <KeyIndicatorsResp
            data={{ originalData: { rows:dataProps, title, titleColor, backgroundColor } }} geoDashboard={"true"} />
    )
}

export default index