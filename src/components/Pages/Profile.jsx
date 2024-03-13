import React, { useEffect, useState } from "react";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import AboutSectionStyle2 from "../PageSection/AboutSection/AboutSectionStyle2";
import FeaturesSectionStyle3 from "../PageSection/FeaturesSection/FeaturesSectionStyle3";
import { pageTitle } from "../../helpers/PageTitle";
import { TRNSACTION } from "../../helpers/apiConstant";
import { GET_API, ToastError } from "../../helpers/functionHelper";
import { StoreUsertransactionData } from "../../reduxStore/Action/userApiAction";
import { useDispatch, useSelector } from "react-redux";
import { Img13 } from "../../helpers/imageLink";
import Section from "../PageSection";

export default function Profile() {
  const [transactionData, setTransactionData] = useState({});
  const [loader, setLoader] = useState(false);
  const UserState = useSelector((state) => state.user);
  const { userData, usertransactionData } = UserState || {
    userData: {},
    usertransactionData: [],
  };

  const dispatch = useDispatch();
  pageTitle("Profile");

  const StoretransactionData = () => {
    setLoader(true);
    console.log("StoreBookApiResponce test1");
    GET_API(TRNSACTION)
      .then((response) => {
        dispatch(StoreUsertransactionData(response?.data?.data ?? []));
        setTransactionData(response?.data?.data ?? []);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        ToastError(error);
      });
  };

  const AllProps = {
    transactionData: usertransactionData,
    loader: loader,
    userData: userData,
    usertransactionData: usertransactionData,
  };
  useEffect(() => {
    StoretransactionData();
  }, []);

  const Test = () => {
    console.log("transactionData  ", transactionData);
    console.log("usertransactionData totle", usertransactionData);
  };

  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title={userData?.name ?? "User"}
          subTitle={`Role: ${userData?.role}` ?? "Role: User"}
          email={`Email: ${userData?.email}` ?? "user@gmail.com"}
          imgUrl={Img13}
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        {usertransactionData && usertransactionData.length == 0 ? (
          <>
            {" "}
            <div class="cs_iconbox_8_wrap cs_radius_30 NoRecordBox">
              <h3> No any Transaction Found</h3>
            </div>
          </>
        ) : (
          <FeaturesSectionStyle3
            sectionTitle="Transaction"
            sectionTitleUp="All TYPE OF"
            AllProps={AllProps}
          />
        )}
      </Section>
    </>
  );
}
