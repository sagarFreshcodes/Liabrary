import React, { useEffect, useState } from "react";
import Pagination from "../../Pagination";
import Post from "../../Post";
import Spacing from "../../Spacing";
import UserTable from "./UserTable/UserTable";
import { StoreUserApiResponce } from "../../../reduxStore/Action/userApiAction";
import { useDispatch, useSelector } from "react-redux";
import { ManageComponent } from "../../../helpers/designHelper";

export default function BlogSectionStyle2() {
  const UserState = useSelector((state) => state.user);
  const Loader = UserState?.userListLoader ?? false;
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  const LoadData = () => {
    dispatch(StoreUserApiResponce());
  };
  useEffect(() => {
    LoadData();
  }, []);
  const AllPropes = {
    TableData: userList,
    Loader: Loader,
    LoadData: LoadData,
  };
  useEffect(() => {
    setUserList(UserState?.userListResponse?.data?.data ?? []);
  }, [UserState]);
  const Test = () => {
    console.log(userList || []);
    console.log(UserState?.userListResponse);
  };
  return (
    <div className="container" onClick={Test}>
      <div className="row cs_row_gap_50">
        <ManageComponent
          list={userList}
          loader={Loader}
          content={
            <>
              <UserTable AllPropes={AllPropes} />
            </>
          }
        />
      </div>
      <Spacing md="110" lg="70" />
      {/* <Pagination /> */}
    </div>
  );
}
