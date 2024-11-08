import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import PolarChartDesigner from "../PolarChart/index";


const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [rewardsAgeDistribution, setRewardsAgeDistribution] = useState({
        title: '',
        data: {
            labels: [],
            datasets: [
                {
                    label: '',
                    data: [],
                },
            ],
        },
    });

    useEffect(() => {
        if (apiData?.age_range_earned_points) {
            setRewardsAgeDistribution(apiData?.age_range_earned_points)
        }
    }, [apiData?.age_range_earned_points])

    const dataProps = rewardsAgeDistribution;
    const title = rewardsAgeDistribution?.title;

    return (
        <PolarChartDesigner
            data={{ originalData: { data: dataProps?.data, title } }} geoDashboard={"true"} />
    )

}

export default index