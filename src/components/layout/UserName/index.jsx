import React, {memo} from "react";
import {useSelector} from "react-redux";

const UserName = () => {
    const {userName = ''} = useSelector((state) => state.user);
    return (
        <>{userName}</>
    )
}


export default memo(UserName)