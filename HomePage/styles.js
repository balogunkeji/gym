import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
  padding: 50px 10px;
  background-color: #e5e5e5;

  @media (max-width: 800px) {
    padding: 20px 0;
  }

  span {
    color: #00000088;
    /* line-height: 20px; */
  }
  .home__sub {
    /* top total boxes section */
    @media (max-width: 1000px) {
      justify-content: center;
    }
    .totalNumberBoxesWrap {
      @media (max-width: 1000px) {
        justify-content: center;
      }
      .totalNumberBoxes {
        background-color: #ffffff;
        border-radius: 29px;
        padding: 20px;
        max-width: 600px;
        overflow: hidden;
        margin-bottom: 20px;

        @media (max-width: 1280px) {
          min-height: 120px;
        }
        @media (max-width: 1100px) {
          width: 100%;
        }

        @media (max-width: 500px) {
          align-items: flex-start;
          padding: 20px 10px;
        }

        .iconWrap {
          background-color: #eeeeee;
          border-radius: 100%;
          min-width: 50px;
          margin-right: 10px;
        }
        .totalsTextButtonWrap {
          span {
            line-height: 15px;
            font-size: 13px;
          }

          .ant-btn {
            border-radius: 15px;
            border: none;
            height: 50px;
            padding: 0 15px;
            background-color: #78a431;
            font-size: 13px;
            font-weight: bold;
            transition: all 0.3s ease;
            :hover {
              background-color: #456d03;
            }
            span {
              color: #ffffff;
            }
          }
          @media (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;

            span {
              font-size: 10px;
              overflow-wrap: break-word;
              min-width: 30px;
            }
            a {
              width: 70%;
            }
            .ant-btn {
              margin-top: 20px;
              height: 35px;
              font-size: 10px;
              width: 100%;
            }
          }
          @media (max-width: 410px) {
            h4 {
              font-size: 16px;
            }
            .totalsSubText {
              width: 60%;
              line-height: 15px;
            }
          }
        }
      }
    }

    /* current balance section */
    .balanceBox {
      border-radius: 29px;
      background-color: #ffffff;
      @media (min-width: 650px) {
        max-width: 600px;
      }

      .topBalanceSection {
        background-color: #cbdfab;
        padding: 40px;
        border-radius: 29px;

        h5 {
          font-size: 14px;
        }
        h3 {
          line-height: 0;
          margin: 13px 0;
        }

        @media (max-width: 400px) {
          padding: 40px 10px;

          h3 {
            font-size: 20px;
          }
          h5 {
            font-size: 10px;
          }
        }

        .topUpWrap {
          background-color: #78a431;
          padding: 10px 15px;
          border-radius: 23px;
          transition: all 0.3s ease;
          :hover {
            background-color: #456d03;
          }
          .topUpPlus {
            margin-right: 10px;
          }

          span {
            min-width: 50px;
            color: #ffffff;
          }

          @media (max-width: 400px) {
            padding: 10px;

            img {
              width: 25px;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }

      .bottomBalanceSection {
        padding: 40px;
        background-color: #ffffff;
        border-radius: 29px;
        min-height: 170px;
        h4 {
          line-height: 0;
        }
        span {
          font-size: 10px;
          font-weight: bold;
          color: #00000088;
          line-height: 15px;
          max-width: 90%;
        }
        @media (max-width: 1200px) {
          padding: 40px 20px;
        }
        @media (max-width: 400px) {
          padding: 40px 10px;
          min-height: max-content;

          h3 {
            font-size: 20px;
          }
          h5 {
            font-size: 10px;
          }
        }
      }
    }

    /* pie chart section */
    .pieChartSection {
      padding: 20px;
      background-color: #ffffff;
      border-radius: 29px;

      .iconWrap {
        margin-right: 10px;
      }
      @media (min-width: 650px) {
        max-width: 600px;
      }

      @media (max-width: 400px) {
        padding: 20px 0;
        .pieTopSection {
          padding: 0 10px;

          .iconWrap {
            margin-right: 10px;
          }
          span {
            font-size: 10px;
          }
        }
      }
    }
    & > section {
      margin: 20px 0;
      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }
`;
