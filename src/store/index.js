import {configureStore} from "@reduxjs/toolkit";
import list from "./list";
import item from "./item";
import user from "./user";
import snackbar from "./snackbar";
import {ENV_PRODUCTION} from "../config";

const rootReducer = {
    list,
    item,
    user,
    snackbar,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: !ENV_PRODUCTION,
});

export default store;
