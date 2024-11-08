import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUserInfo } from "../store/user";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import { LOGIN_URL } from "../libs/auth";


const IsAuthenticatedOnly = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    useEffect(() => {
        if (window !== window.top) {
            console.log("This page is being iframed.");
            // Additional actions if the page is iframed
        } else {
            console.log("This page is not being iframed.");
            // Additional actions if the page is not iframed
        }
        const fetchUserInfo = async () => {
            const response = await dispatch(getUserInfo());
            if (response?.error) {
                setLoading(false);
                return <Navigate to="/authorization" replace />;
            }
            if (response?.payload) {
                setUser(response?.payload)
                setLoading(false);
                return;
            }
            setLoading(false);
        };

        fetchUserInfo();
    }, [dispatch]);

    if (loading) {
        return <Loader />; 
    }

    if (!user?.username) {
        window.location.href = LOGIN_URL;
        return
    }
    console.log("user: ", user)
    if ((user?.email && !user?.email.endsWith('@dkv.global')) && !user?.has_platform_access) {
        console.log("user: True: ", user)
        return <Navigate to="/authorization" replace />;
    }

    return <Outlet />;
};


export default IsAuthenticatedOnly
