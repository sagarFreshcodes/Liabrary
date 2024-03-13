import React from "react";
import { pageTitle } from "../../helpers/PageTitle";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "../../helpers/imageLink";
import GallerySection from "../PageSection/GallerySection";
import BannerSectionStyle3 from "../PageSection/BannerSection/BannerSectionStyle3";
import Section from "../PageSection";

const galleryData = [
  { imgUrl: Img6 },
  { imgUrl: Img5 },
  { imgUrl: Img4 },
  { imgUrl: Img2 },
  { imgUrl: Img3 },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={Img1}
        title="Welcome to <br />Library Management System"
        subTitle="Your Partner in Knowledge and Education"
      />
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
    </>
  );
}
