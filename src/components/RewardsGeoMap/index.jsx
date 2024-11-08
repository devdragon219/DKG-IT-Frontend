import React, { useEffect, useState } from 'react';
import { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
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
        "GRL": "Greenland 1 Users",
        "ITA": "Italy 1 Users",
        "ESP": "Spain 1 Users"
    },
    "colors": {
        "Greenland": "#235775",
        "Italy": "#235775",
        "Spain": "#235775"
    }
}



const index = () => {
    const { apiData } = useFetchUserRewardsStats()
    const [ rewardsGeoLocationData, setRewardsGeoLocationData] = useState({})

    useEffect(() => {
        if (apiData) {
            setRewardsGeoLocationData(apiData?.earned_points_by_country)
        }
    }, [apiData?.earned_points_by_country])

    const dataProps = rewardsGeoLocationData?.originalData ? rewardsGeoLocationData?.originalData : defaultData?.originalData;
    const emtyCountries = "#f7f7f7"
    return (
        <GlobalMap
            data={{ originalData: { ...dataProps, emtyCountries } }} geoDashboard={true} />
    )


}

export default index