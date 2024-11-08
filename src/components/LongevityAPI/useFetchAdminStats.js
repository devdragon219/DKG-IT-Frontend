import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LONGEVITY_API_URL = "https://app.longevity.group:8000/api" // Production Server
const LONGEVITY_TEST_API_URL = "https://app-test.longevity.group:8000/api" // Test Server
const LOCAL_API = "http://127.0.0.1:8000/api"

const useFetchAdminStats = () => {
    const [ apiData, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        try {
            const resp = await axios.get(`${LONGEVITY_API_URL}/admin-stats/users-stats/`)
            setData(resp?.data)
        } catch (Err) {
            console.log(Err)
        }
        }
        fetchData()
    }, [])
    


    return {
        apiData
    }
}

export default useFetchAdminStats


export const useFetchUserRewardsStats = () => {
    const [ apiData, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        try {
            const resp = await axios.get(`${LONGEVITY_API_URL}/admin-stats/rewards-stats/`)
            setData(resp?.data)
            
        } catch (Err) {
            console.log(Err)
        }
        }
        fetchData()
    }, [])
    


    return {
        apiData
    }
}


export const useFetchAmbassadorsStats = () => {
    const [ apiData, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        try {
            const resp = await axios.get(`${LONGEVITY_API_URL}/admin-stats/ambassadors-stats/`)
            setData(resp?.data)
        } catch (Err) {
            console.log(Err)
        }
        }
        fetchData()
    }, [])
    


    return {
        apiData
    }
}


export const useFetchMarketPlaceStats = () => {
    const [ apiData, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
        try {
            const resp = await axios.get(`${LONGEVITY_API_URL}/admin-stats/marketplace-stats/`)
            setData(resp?.data)
        } catch (Err) {
            console.log(Err)
        }
        }
        fetchData()
    }, [])
    


    return {
        apiData
    }
}