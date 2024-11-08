import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from '../LongevityAPI/useFetchAdminStats';
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
    const { apiData } = useFetchMarketPlaceStats()
    const [topCategoriesGenders, setTopCategoriesGenders] = useState({})

    useEffect(() => {
        if (apiData?.top_categories_by_gender) {
            setTopCategoriesGenders(apiData?.top_categories_by_gender)
        }
    }, [apiData?.top_categories_by_gender])

    const dataProps = topCategoriesGenders?.data ? topCategoriesGenders?.data : defaultData?.data;
    const title = topCategoriesGenders?.title ? topCategoriesGenders.title : "Top Categories By Gender";
    const height = 300;


    return (
        <RadarChartDesigner
            data={{ originalData: { data: dataProps, title, height } }} geoDashboard={true} />
    )


}

export default index;