import React, { useEffect, useState } from 'react';
import { useFetchAmbassadorsStats } from '../LongevityAPI/useFetchAdminStats';
import PolarChartDesigner from "../PolarChart/index";


const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ambassadorsTopCountries, setAmbassadorsTopCountries] = useState({
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
        if (apiData?.top_ambassador_countries) {
            setAmbassadorsTopCountries(apiData?.top_ambassador_countries)
        }
    }, [apiData?.top_ambassador_countries])

    const dataProps = ambassadorsTopCountries;
    const title = ambassadorsTopCountries?.title;

    return (
        <PolarChartDesigner
            data={{ originalData: { data: dataProps?.data, title } }} geoDashboard={true} />
    )

}

export default index;