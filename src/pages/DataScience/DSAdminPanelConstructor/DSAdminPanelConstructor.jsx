import React, {Suspense, useEffect} from "react";
import Loader from "../../../components/Loader";
import {getItemBySlug} from "../../../store/item";
import {useDispatch, useSelector} from "react-redux";
import AdminPanelsConstructorIftame from "../../../components/AdminPanelsConstructor";


export const  DSAdminPanelConstructor = () => {
  const dispatch = useDispatch();
  const {data, status} = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(getItemBySlug("ds"));
  }, []);

  console.log(data, status)
  return (
    <Suspense fallback={<Loader/>}>
      {status === "loading" && <Loader />}
      { status === "succeeded" && <AdminPanelsConstructorIftame data={data} isEditMode={false}/>}
    </Suspense>
  )
}
