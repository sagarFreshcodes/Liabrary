import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import AddBook from "../../Form";

export default function AddEditBookSaction({
  bgUrl,
  imgUrl,
  sectionTitle,
  sectionTitleUp,
  AllProps,
}) {
  return (
    <section
      className="cs_appointment_section_1 cs_bg_filed EditBook"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className="container">
        <div className="cs_height_132" />
        <div className="cs_appointment_img">
          <img src={imgUrl} alt="Appointment" />
        </div>
        <div className="row">
          <div className="offset-lg-6 col-lg-6">
            <SectionHeading
              title={sectionTitle}
              titleUp={sectionTitleUp}
              AllProps={AllProps}
            />
            <Spacing md="57" />
            <AddBook AllProps={AllProps} />
          </div>
        </div>
        <div className="cs_height_120" />
      </div>
    </section>
  );
}
