import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helpers/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD, TRNSACTION } from "../../helpers/apiConstant";
import { GET_API, ToastError } from "../../helpers/functionHelper";
import { StoreAdminDashboardData } from "../../reduxStore/Action/userApiAction";
import DashboardDetail from "../PageSection/DashboardDetail";

export default function Home() {
  pageTitle("Dashboard");

  const [dashboardData, setDashboardData] = useState({});
  const [loader, setLoader] = useState(false);
  const UserState = useSelector((state) => state.user);
  const { userData, adminDashboardData } = UserState || {
    userData: {},
    adminDashboardData: {},
  };
  const dispatch = useDispatch();
  pageTitle("Profile");

  const StoreDashboardData = () => {
    setLoader(true);
    GET_API(DASHBOARD)
      .then((response) => {
        dispatch(StoreAdminDashboardData(response?.data?.data ?? []));
        setDashboardData(response?.data?.data ?? []);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        ToastError(error);
      });
  };

  const AllProps = {
    dashboardData: dashboardData,
    loader: loader,
    userData: userData,
    adminDashboardData: adminDashboardData,
  };
  useEffect(() => {
    StoreDashboardData();
  }, []);

  const test = () => {
    console.log(userData, UserState);
  };
  return (
    <>
      <DashboardDetail
        AllProps={AllProps}
        title="Your Partner in Knowledge and Education"
        subTitle="We are committed to providing you with the best library resources and services to support your learning and research endeavors."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img.png"
      />
    </>
  );
}
