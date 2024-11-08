import React, { useEffect, useState } from 'react';
import useFetchAdminStats, { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
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
    const { apiData } = useFetchAdminStats()
    const [ userEngagements, setUserEngagements ] = useState({})

useEffect(() => {
    if (apiData?.count_user_engaments) {
        setUserEngagements(apiData?.count_user_engaments)
    }
}, [apiData?.count_user_engaments])

const dataProps = userEngagements?.data ? userEngagements?.data : defaultData?.data;
const title = userEngagements?.title ? userEngagements.title : "Users Engagements";
const height = 300;


return (
    <RadarChartDesigner
        data={{ originalData: { data:dataProps, title, height } }} geoDashboard={true} />
)


}

export default index