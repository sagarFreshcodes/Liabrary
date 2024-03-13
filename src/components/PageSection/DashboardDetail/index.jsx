import React from "react";
import parse from "html-react-parser";
import FunFactSection from "../FunFactSection";

export default function DashboardDetail({ title, subTitle, bgUrl, AllProps }) {
  const ShawArray = (data) => {
    const { adminDashboardData } = AllProps || {
      adminDashboardData: {
        todaysIssued: 0,
        todaysDue: 0,
        totalIssued: 1,
        dueMissed: 1,
      },
    };
    const arrayObj = [
      {
        number: adminDashboardData?.todaysIssued ?? "0",
        title: "Todays Issued",
        value: "todaysIssued",
      },
      {
        number: adminDashboardData?.todaysDue ?? "0",
        title: "Todays Due",
        value: "todaysDue",
      },
      {
        number: adminDashboardData?.totalIssued ?? "0",
        title: "Total Issued",
        value: "totalIssued",
      },
      {
        number: adminDashboardData?.dueMissed ?? "0",
        title: "Due Missed",
        value: "dueMissed",
      },
    ];

    return arrayObj;
  };
  return (
    <section className="cs_hero cs_style_1">
      <div
        className="cs_hero_wrap cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
            </p>
          </div>
          <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15">
            <FunFactSection
              bgUrl="images/about/fun_fact_bg.jpeg"
              data={ShawArray()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
