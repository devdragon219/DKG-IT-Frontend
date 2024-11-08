import React, { useEffect, useState } from 'react';
import useFetchAdminStats, { useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
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
    const { apiData } = useFetchAdminStats()
    const [ usersGeoLocationData, setUsersGeoLocationData] = useState({})

    useEffect(() => {
        if (apiData) {
            setUsersGeoLocationData(apiData?.users_by_country)
        }
    }, [apiData?.users_by_country])

    const dataProps = usersGeoLocationData?.originalData ? usersGeoLocationData?.originalData : defaultData?.originalData;
    const emtyCountries = "#f7f7f7"
    return (
        <GlobalMap
            data={{ originalData: { ...dataProps, emtyCountries } }} geoDashboard={true} />
    )


}

export default index