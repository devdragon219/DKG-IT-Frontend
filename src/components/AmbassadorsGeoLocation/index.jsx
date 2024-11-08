import React, { useEffect, useState } from 'react';
import useFetchAdminStats, { useFetchAmbassadorsStats, useFetchUserRewardsStats } from '../LongevityAPI/useFetchAdminStats';
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
    const { apiData } = useFetchAmbassadorsStats()
    const [ ambassadorsGeoLocationData, setAmbassadorsGeoLocationData] = useState({})

    useEffect(() => {
        if (apiData?.ambassadors_locations) {
            setAmbassadorsGeoLocationData(apiData?.ambassadors_locations)
        }
    }, [apiData?.ambassadors_locations])

    const dataProps = ambassadorsGeoLocationData?.originalData ? ambassadorsGeoLocationData?.originalData : defaultData?.originalData;
    const emtyCountries = "#f7f7f7"
    return (
        <GlobalMap
            data={{ originalData: { ...dataProps, emtyCountries } }} geoDashboard={true} />
    )


}

export default index