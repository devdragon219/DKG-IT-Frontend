import {
  OLD_WIDGET_ROUTE,
  PRODUCT_ROUTE,
  TOOL_ROUTE,
  USER_GUIDE_ROUTE,
  WIDGET_ROUTE
} from "../constants/routes";
import {ENV_BACKEND_URL} from "../config";

export const PUBLIC_ROUTES = [
  WIDGET_ROUTE,
  OLD_WIDGET_ROUTE,
  PRODUCT_ROUTE,
  TOOL_ROUTE,
  USER_GUIDE_ROUTE,
]

export const LOGIN_URL = `/login/`;

const backendURL = ENV_BACKEND_URL;
export const hasLocalBackend = () => {
  return backendURL.indexOf("localhost") !== -1;
}

export const isLocalhost = () => {
  return window.location.href.indexOf("localhost") !== -1;
}

export const shouldRedirectToLogin = (username) => {
  const requiresAuth = !username && !PUBLIC_ROUTES.some(route => window.location.pathname.indexOf(route) !== -1)
  if (requiresAuth && isLocalhost() && !hasLocalBackend()) {
    // no redirect if FE runs locally and uses tools.dkv.global API
    // used for local development without local API at localhost:8000 (django)
    return false;
  }

  return requiresAuth
}
