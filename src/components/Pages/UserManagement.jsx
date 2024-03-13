import React from "react";
import BannerSectionStyle1 from "../PageSection/BannerSection/BannerSectionStyle1";
import BlogSectionStyle2 from "../PageSection/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
import { Img12 } from "../../helpers/imageLink";
import Section from "../PageSection";

export default function UserManagement() {
  pageTitle("User Managemant");
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="User Managemant" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle1
          title="Don't Neglect Your Learning!"
          subTitle=""
          imgUrl={Img12}
        />
      </Section>
    </>
  );
}
