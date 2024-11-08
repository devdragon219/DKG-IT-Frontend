import React, { useEffect, useState } from 'react';
import { useFetchMarketPlaceStats } from '../LongevityAPI/useFetchAdminStats';
import PolarChartDesigner from "../PolarChart/index";


const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [visitorsAgeDistribution, setVisitorsAgeDistribution] = useState({
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
        if (apiData?.visitors_by_age_range) {
            setVisitorsAgeDistribution(apiData?.visitors_by_age_range)
        }
    }, [apiData?.visitors_by_age_range])

    const dataProps = visitorsAgeDistribution;
    const title = visitorsAgeDistribution?.title;

    return (
        <PolarChartDesigner
            data={{ originalData: { data: dataProps?.data, title } }} geoDashboard={true} />
    )

}

export default index