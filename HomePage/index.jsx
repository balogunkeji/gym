import React from "react";
import DashboardLayout from "../../../components/Layout";
import { HomeStyles } from "./styles";
import { FlexibleDiv, Section } from "../../../components/Box/styles";
import { Typography, Button } from "antd";
import { LineChart, BarChart, PieChart } from "../../../components/Chart";
import {
  lineChartData,
  barChartData,
  pieChartData,
} from "../../../utils/dataHelpers/homeChartData";
import UserIcon from "../../../assets/svgs/user-green.svg";
import SalesIcon from "../../../assets/svgs/sales-lead.svg";
import PlusIcon from "../../../assets/svgs/plusIcon.svg";
import { Link } from "react-router-dom";
import CookingIcon from "../../../assets/svgs/pieChartCooking.svg";

const Home = () => {
  const { Text, Title } = Typography;
  return (
    <DashboardLayout pageHeader="Dashboard">
      <HomeStyles>
        <FlexibleDiv justifyContent="space-between" className="home__sub">
          {/* total number boxes wrap */}
          <Section
            justifyContent="space-between"
            className="totalNumberBoxesWrap"
          >
            {/* left total boxes */}
            <Section
              width="47%"
              className="totalNumberBoxes"
              justifyContent="space-between"
              flexWrap="nowrap"
            >
              <FlexibleDiv width="50px" height="50px" className="iconWrap">
                <img alt="" src={UserIcon} />
              </FlexibleDiv>
              <FlexibleDiv
                width="85%"
                justifyContent="space-between"
                flexWrap="nowrap"
                className="totalsTextButtonWrap"
              >
                <FlexibleDiv
                  flexDir="column"
                  className="totalsTextWrap"
                  width="max-content"
                  alignItems="flex-start"
                >
                  <Title level={4}>100</Title>
                  <Text>Total number of Users</Text>
                </FlexibleDiv>
                <Link to="/users">
                  <Button>View More</Button>
                </Link>
              </FlexibleDiv>
            </Section>

            {/* right total boxes */}
            <Section
              width="47%"
              className="totalNumberBoxes"
              justifyContent="space-between"
              flexWrap="nowrap"
            >
              <FlexibleDiv width="50px" height="50px" className="iconWrap">
                <img alt="" src={SalesIcon} />
              </FlexibleDiv>
              <FlexibleDiv
                width="85%"
                justifyContent="space-between"
                flexWrap="nowrap"
                className="totalsTextButtonWrap"
              >
                <FlexibleDiv
                  flexDir="column"
                  className="totalsTextWrap"
                  width="max-content"
                  alignItems="flex-start"
                >
                  <Title level={4}>1546 Sales Lead </Title>
                  <Text className="totalsSubText">
                    Total Number of Click through to the ecommerce website
                  </Text>
                </FlexibleDiv>
              </FlexibleDiv>
            </Section>
          </Section>

          {/* bar chart */}
          <Section width="47%">
            <BarChart
              lineBkCol="#78A43155"
              title="CHATBOT INTERACTION -"
              subHeaderText="Section with the most Requests"
              barChartData={barChartData}
            />
          </Section>

          {/* line chart */}
          <Section width="47%">
            <LineChart
              lineBkCol="#78A43155"
              headerText="No. of requests"
              subHeaderText="INTERACTION PERIOD - When Users interact with the Chatbot"
              lineChartData={lineChartData}
            />
          </Section>

          {/* current balance */}
          <Section width="47%" className="balanceBox" flexDir="column">
            <FlexibleDiv
              className="topBalanceSection"
              justifyContent="space-between"
            >
              <FlexibleDiv
                flexDir="column"
                alignItems="flex-start"
                width="max-content"
              >
                <Title level={5}>WhatsApp Messaging Credit</Title>
                <Title level={3}>&#8358; 24,000</Title>
              </FlexibleDiv>
              <Link to="/topup">
                <FlexibleDiv
                  width="max-content"
                  className="topUpWrap"
                  flexWrap="nowrap"
                >
                  <FlexibleDiv className="topUpPlus" width="max-content">
                    <img alt="" src={PlusIcon} />
                  </FlexibleDiv>
                  <Text>Top Up</Text>
                </FlexibleDiv>
              </Link>
            </FlexibleDiv>

            <FlexibleDiv
              className="bottomBalanceSection"
              justifyContent="space-between"
              flexWrap="nowrap"
            >
              <FlexibleDiv
                width="max-content"
                flexDir="column"
                alignItems="flex-start"
              >
                <Text> Incoming & Outgoing messages</Text>
                <Title level={4}>40,0000</Title>
              </FlexibleDiv>
              <FlexibleDiv
                width="max-content"
                flexDir="column"
                alignItems="flex-start"
              >
                <Text>Estimated Message Left</Text>
                <Title level={4}>10,0000</Title>
              </FlexibleDiv>
            </FlexibleDiv>
          </Section>

          {/* pie chart section */}
          <Section width="47%" className="pieChartSection" flexDir="column">
            <FlexibleDiv
              flexWrap="nowrap"
              justifyContent="space-between"
              className="pieTopSection"
            >
              <FlexibleDiv width="50px" height="50px" className="iconWrap">
                <img alt="" src={CookingIcon} />
              </FlexibleDiv>

              <FlexibleDiv
                width="85%"
                flexDir="column"
                className="totalsTextWrap"
                alignItems="flex-start"
              >
                <Title level={4}>200 </Title>
                <Text className="totalsSubText">
                  Number of Recipes and engagement comparison
                </Text>
              </FlexibleDiv>
            </FlexibleDiv>
            <PieChart pieChartData={pieChartData} />
          </Section>
        </FlexibleDiv>
      </HomeStyles>
    </DashboardLayout>
  );
};

export default Home;
