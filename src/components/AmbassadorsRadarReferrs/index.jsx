import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
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
    const { apiData } = useFetchAmbassadorsStats()
    const [ numUsersReferred, setNumUsersReferred ] = useState({})

useEffect(() => {
    if (apiData?.users_referred_by_ambassadors) {
        setNumUsersReferred(apiData?.users_referred_by_ambassadors)
    }
}, [apiData?.users_referred_by_ambassadors])

const dataProps = numUsersReferred?.data ? numUsersReferred?.data : defaultData?.data;
const title = numUsersReferred?.title ? numUsersReferred.title : "Number of Users Referred by each Ambassador";
const height = 300;


return (
    <RadarChartDesigner
        data={{ originalData: { data:dataProps, title, height } }} geoDashboard={true} />
)


}

export default index