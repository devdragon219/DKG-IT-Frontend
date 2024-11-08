import React, { useEffect, useCallback, useState } from "react";
import PieChartLabels from "../PieChartLabels";
import { useFetchAmbassadorsStats } from "../LongevityAPI/useFetchAdminStats";


const index = () => {
    const { apiData } = useFetchAmbassadorsStats()
    const [ambassadorsTypesData, setAmbassadorsTypesData] = useState()

    useEffect(() => {
        if (apiData) {
            setAmbassadorsTypesData(apiData?.ambassadors_user_distribution)
        }
    }, [apiData?.ambassadors_user_distribution])

    const dataProps = ambassadorsTypesData?.data;
    const height = ambassadorsTypesData?.height ? ambassadorsTypesData?.height : 300;
    const title = ambassadorsTypesData?.title;
    // const selectedTheme = obj?.selectedTheme;
    return (
        <PieChartLabels
            data={{ originalData: { data: dataProps, height, title } }}
        // selectedTheme={selectedTheme}
        />
    );
};

export default index;
