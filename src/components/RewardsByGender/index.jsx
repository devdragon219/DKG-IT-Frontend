import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import DoughnutChart from '../DoughnutChart';


const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ rewardGenderDistrubition, setRewardGenderDistrubition ] = useState()

    useEffect(()=>{
        if (apiData){
            setRewardGenderDistrubition(apiData?.earned_points_by_gender)
        }
    }, [apiData?.earned_points_by_gender])

    const dataProps = rewardGenderDistrubition?.data;
    const height = rewardGenderDistrubition?.height ? rewardGenderDistrubition?.height : 600;
    const width = rewardGenderDistrubition?.width ? rewardGenderDistrubition?.width : 600;
    const title = rewardGenderDistrubition?.title;



    return (
            <DoughnutChart 
            data={{ originalData: { data:dataProps, height, title, width } }} geoDashboard={"true"} />

    )
}

export default index