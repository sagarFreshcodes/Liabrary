import React, { useEffect, useState } from "react";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import BannerSectionStyle1 from "../PageSection/BannerSection/BannerSectionStyle1";
import AddEditBookSaction from "../PageSection/AddEditBookSaction/AddEditBookSaction";
import { pageTitle } from "../../helpers/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../helpers/functionHelper";
import { Img10, Img11, Img14 } from "../../helpers/imageLink";
import { StoreUserApiResponce } from "../../reduxStore/Action/userApiAction";
import Section from "../PageSection";
import BookDetailsSection from "../PageSection/BookDetailsSection";

export default function BookDetails() {
  const BookListState = useSelector((state) => state.book);
  const [userList, setUserList] = useState([]);
  const UserState = useSelector((state) => state.user);
  const accessToken = useSelector(
    (state) => state?.user?.userData?.accessToken
  );
  const dispatch = useDispatch();
  const IsAdmin = UserState?.IsAdmin;
  const [bookData, setBookData] = useState({});
  const [action, setAction] = useState("");
  const [viewOption, setViewOption] = useState(true);
  const { _id, updatedAt, name, currentAvailability, createdAt, author } =
    bookData;

  const AllProps = {
    bookData: bookData || {},
    BookListState: BookListState,
    action: action,
    viewOption: viewOption,
    IsAdmin: IsAdmin,
    userList: userList,
  };
  const test = () => {
    console.log("UserState", userList);
  };
  pageTitle("Doctor Details");

  useEffect(() => {
    setBookData(BookListState?.selectedRecord?.data ?? {});
    setAction(BookListState?.selectedRecord?.type ?? "");
    if (["edit", "add"].includes(BookListState?.selectedRecord?.type)) {
      setViewOption(false);
    } else {
      setViewOption(true);
    }
  }, [BookListState]);

  const LoadData = () => {
    dispatch(StoreUserApiResponce());
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    setUserList(UserState?.userListResponse?.data?.data ?? []);
  }, [UserState]);
  return (
    <>
      <BreadcrumbStyle2 />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <BookDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl={Img11}
          userList={userList}
          IsAdmin={IsAdmin}
          viewOption={viewOption}
          bookData={bookData}
          name={name ?? "Book"}
          department={currentAvailability ? "Available" : "Unavailable"}
          designation={author ?? "Dr. J. thomson"}
          description={`Last Updated: ${formatDate(updatedAt)}`}
          social={[
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
          ]}
        />
      </Section>
      {!viewOption ? (
        <Section bottomMd={200} bottomLg={150} bottomXl={110}>
          <AddEditBookSaction
            bgUrl="/images/home_2/appointment_bg.svg"
            imgUrl={Img14}
            sectionTitle="Book Details"
            sectionTitleUp="WRITE HERE"
            AllProps={AllProps}
          />
        </Section>
      ) : (
        ""
      )}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle1
          title="Don't Neglect Your Learning!"
          subTitle="Schedule a consultation with one of our experienced library professionals today!"
          imgUrl={Img10}
          AllProps={AllProps}
        />
      </Section>
    </>
  );
}
