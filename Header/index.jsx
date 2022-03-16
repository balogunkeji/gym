import React, { useContext, useEffect } from "react";
import { Layout, Typography } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { HeaderStyles } from "./styles";
import BellIcon from "../../assets/svgs/bell.svg";
import PersonIcon from "../../assets/svgs/avatar1.svg";
import ArrowIcon from "../../assets/svgs/arrow.svg";
import { BiArrowBack as BackIcon } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import MobileMenuIcon from "../../assets/svgs/mobileMenuIcon.svg";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import { getCurrentUser } from "../../network/auth";
import { LoadingOutlined } from "@ant-design/icons";
import { CURRENT_USER } from "../../context/types";
import { useQuery } from "react-query";

const DashboardHeader = ({
  pageHeader,
  pageSubHeader,
  setShowMobileSideBar,
}) => {
  const {
    dispatch,
    state: { activeConversation, user },
  } = useContext(MainContext);
  let { isLoading, data } = useQuery("user", () => getCurrentUser());

  useEffect(() => {
    dispatch({ type: CURRENT_USER, payload: data && data });
  }, [data, dispatch]);

  const history = useHistory();
  const { Header } = Layout;
  const { Text, Title } = Typography;
  const notifications = { maessages: "20" };
  const activePath = window.location.pathname;

  const parentRoutes = [
    "/",
    "/recipes",
    "/products",
    "/user",
    "/surveys",
    "/team",
    "/whatsapp-messaging",
    "/conversations",
  ];

  return (
    <HeaderStyles
      activePath={activePath}
      parentRoutes={parentRoutes}
      activeConversation={activeConversation}
    >
      <Header>
        <FlexibleDiv
          className="header__sub"
          height="100%"
          justifyContent="space-between"
        >
          <FlexibleDiv
            width="max-content"
            flexDir="column"
            height="max-content"
            className="header__sub__textWrap"
            alignItems="flex-start"
          >
            <Title level={4}>{pageHeader} </Title>
            <Text>{pageSubHeader || "Overview"}</Text>
            <img
              src={MobileMenuIcon}
              alt=""
              onClick={() => setShowMobileSideBar(true)}
            />
          </FlexibleDiv>

          {/* back icon for sub screens mobile view  */}
          <FlexibleDiv
            justifyContent="flex-end"
            className="backWrap"
            onClick={() => history.goBack()}
          >
            <Text>
              <BackIcon /> Back
            </Text>
          </FlexibleDiv>

          {/* right section for large screen */}
          <FlexibleDiv
            justifyContent="space-evenly"
            width="max-content"
            height="max-content"
            className="header__sub__otherInfoWrap"
            flexWrap="nowrap"
          >
            <FlexibleDiv className="notificationsWrap" width="max-content">
              <img
                src={BellIcon}
                alt=""
                className={!!notifications && "alert"}
              />
            </FlexibleDiv>
            {isLoading ? (
              <LoadingOutlined />
            ) : (
              <Link to="/profile" className="profile__link">
                <FlexibleDiv flexWrap="nowrap">
                  <FlexibleDiv className="avatarWrap">
                    <img src={user?.profilePicture || PersonIcon} alt="" />
                  </FlexibleDiv>
                  <Text className="accoutType">{user?.name}</Text>

                  <img src={ArrowIcon} alt="" className="arrowDown" />
                </FlexibleDiv>
              </Link>
            )}
          </FlexibleDiv>
        </FlexibleDiv>
      </Header>
    </HeaderStyles>
  );
};

export default DashboardHeader;
