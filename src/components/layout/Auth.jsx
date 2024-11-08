import {useDispatch} from "react-redux";
import {LOGIN_URL, shouldRedirectToLogin} from "../../libs/auth";
import {useEffect} from "react";
import {getUserInfo} from "../../store/user";


export const Auth = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo()).then(data => {
      if (shouldRedirectToLogin(data?.payload?.username)) {
        window.location.href = LOGIN_URL;
      }
    });
  }, []);
  return (<>{children}</>)
}
