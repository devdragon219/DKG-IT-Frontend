import React, { useEffect, useState } from 'react';
import useFetchAdminStats, { useFetchMarketPlaceStats, useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
import GlobalMap from '../GlobalMap/GlobalMap';

const defaultData = {
    "title": "THIS IS MY TITLE",
    "backgroundColor": "transparent",
    "fontColor": "black",
    "hoverColor": "#3b729f",
    "projectionConfig": {
        "center": [
            20,
            8
        ],
        "scale": 200
    },
    "countryNames": {
    },
    "colors": {
    }
}



const index = () => {
    const { apiData } = useFetchMarketPlaceStats()
    const [ visitorsGeoLocationData, setVisitorsGeoLocationData] = useState({})

    useEffect(() => {
        if (apiData?.marketplace_visitors_by_countries) {
            setVisitorsGeoLocationData(apiData?.marketplace_visitors_by_countries)
        }
    }, [apiData?.marketplace_visitors_by_countries])

    const dataProps = visitorsGeoLocationData?.originalData ? visitorsGeoLocationData?.originalData : defaultData?.originalData;
    const emtyCountries = "#f7f7f7"
    return (
        <GlobalMap
            data={{ originalData: { ...dataProps, emtyCountries } }} geoDashboard={true} />
    )


}

export default index