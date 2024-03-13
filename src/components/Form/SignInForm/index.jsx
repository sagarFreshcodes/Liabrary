import React, { useState } from "react";
import {
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../../helpers/functionHelper";
import { ButtonLoader } from "../../../helpers/designHelper";
import { StoreLoginUserData } from "../../../reduxStore/Action/userApiAction";
import { useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../../helpers/apiConstant";

export default function SignInForm({ label, btnText, btnArrowUrl }) {
  const [loader, setLoader] = useState(false);
  const Navigation = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "admin@yopmail.com",
    password: "Tagline@123",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const onSubmit = () => {
    const submitData = {
      email: formData?.email,
      password: formData?.password,
    };

    setLoader(true);

    POST_API({
      endPoint: `${SIGN_IN}`,
      body: submitData,
    })
      .then((res) => {
        ToastSuccess(res);
        setLoader(false);
        scrollToTop();
        const { role, accessToken, email, name } = res?.data?.data ?? {};

        const UserData = {
          accessToken: accessToken,
          role: role,
          email: email,
          name: name,
        };
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("UserInfo", JSON.stringify(UserData));
        // Navigation(`/${BOOK_LIST_ROUTE}`);
        dispatch(StoreLoginUserData(UserData));
      })
      .catch((err) => {
        ToastError(err);
        setLoader(false);
      });
  };
  return (
    <>
      {label && <p>Your Email</p>}
      <div action="#" className="cs_newsletter_form">
        <input
          type="email"
          className="cs_form_field"
          placeholder="example@email.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div action="#" className="cs_newsletter_form">
        <input
          type="password"
          className="cs_form_field"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          className="cs_btn cs_style_1"
          disabled={loader}
          onClick={onSubmit}
        >
          {/* {loader ? <ButtonLoader /> : ""} */}
          <span>{btnText}</span>
          <i>
            {loader ? (
              <span className="loaderUp">
                <ButtonLoader />
              </span>
            ) : (
              <img src={btnArrowUrl} alt="Icon" />
            )}
            {loader ? (
              <span className="loaderUp">
                <ButtonLoader />
              </span>
            ) : (
              <img src={btnArrowUrl} alt="Icon" />
            )}
            {/* <img src={btnArrowUrl} alt="Icon" /> */}
          </i>
        </button>
      </div>
    </>
  );
}
