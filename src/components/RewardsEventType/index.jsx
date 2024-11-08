import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import RadarChartDesigner from '../RadarChartDesigner/RadarChartDesigner';

const defaultData = {
    "name": "Radar Chart",
    "title": "Title Text",
    "fontSize": "24px",
    "height": 300,
    "beginAtZero": false,
    "stepSize": 20,
    "data": {
        "labels": [],
        "datasets": [
            {
                "label": "Demo Datasets",
                "data": [
                ],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            }
        ]
    }
}

const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [rewardsPointsEventType, setRewardsPointsEventType] = useState({})

useEffect(() => {
    if (apiData) {
        setRewardsPointsEventType(apiData?.earned_points_by_event_type)
    }
}, [apiData?.earned_points_by_event_type])

const dataProps = rewardsPointsEventType?.data ? rewardsPointsEventType?.data : defaultData?.data;
const title = rewardsPointsEventType?.title ? rewardsPointsEventType.title : "Reward Points Earned by Event Types";
const height = 300;


return (
    <RadarChartDesigner
        data={{ originalData: { data:dataProps, title, height } }} geoDashboard={true} />
)


}

export default index