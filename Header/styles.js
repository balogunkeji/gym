import styled from "styled-components";

export const HeaderStyles = styled.div`
  width: calc(100vw - 200px);
  height: max-content;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;

  @media (max-width: 1000px) {
    width: calc(100vw - 70px);
  }
  @media (max-width: 800px) {
    width: 100vw;
  }

  .ant-layout-header {
    background-color: #ffffff;
    height: 100px;
    padding: 0 30px;
    @media (max-width: 700px) {
      padding: 0 10px;
    }
    @media (max-width: 800px) {
      height: 80px;
      background-color: #e5e5e5;
    }

    .header__sub__textWrap {
      h4 {
        font-size: 22px;
        color: #fb7007;
        font-weight: 500;
      }

      span {
        line-height: 5px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
      }
      img {
        cursor: pointer;
        transition: all 0.3s ease;

        @media (min-width: 800px) {
          display: none;
        }
      }
      @media (max-width: 800px) {
        span,
        h4 {
          display: none;
        }
      }
    }

    .backWrap {
      width: max-content;
      padding: 10px 0;
      display: none;
      position: absolute;
      right: 3%;

      span {
        color: #000000;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.3s ease;
        padding: 5px 15px;
        border: 2px solid #000000;
        border-radius: 10px;

        :hover {
          color: #78a431;
          border-color: #78a431;
        }
        svg {
          margin-bottom: -2px;
        }
      }

      @media (max-width: 800px) {
        display: ${({ activePath, parentRoutes, activeConversation }) =>
          !parentRoutes.includes(activePath) && "block"};
      }
    }

    .header__sub__otherInfoWrap {
      width: 200px;
      padding: 0 10px;
      border-radius: 22.5px;
      background-color: #f7f7f7;
      min-height: 60px;
      .accoutType {
        margin: 0 7px;
        min-width: 80px;
        max-width: 80px;
        width: max-content;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .arrowDown {
        transform: rotate(-90deg);
      }
      .profile__link {
        transition: all 0.3s ease;
        :hover {
          .accoutType {
            font-weight: bold;
          }
        }
      }

      @media (max-width: 800px) {
        width: max-content;
        padding: 0;
        background-color: transparent;
        visibility: ${({ activePath, parentRoutes, activeConversation }) =>
          !parentRoutes.includes(activePath) ||
          (!!activeConversation && activePath === "/conversations")
            ? "hidden"
            : "visible"};

        .accoutType,
        .arrowDown {
          display: none;
        }
      }

      .notificationsWrap {
        width: max-content;
        height: max-content;
        cursor: pointer;
        position: relative;
        margin-right: 10px;

        :hover {
          ::before {
            width: 12px;
            height: 12px;
          }
          .alert {
            animation-play-state: paused;
          }
        }
        .alert {
          animation: ring 15s ease infinite 3s;
        }
        ::before {
          content: "";
          z-index: 1;
          transition: all 0.3s ease;
          width: 10px;
          height: 10px;
          background-color: #fb7007;
          border: 1.2px solid #78a431;
          border-radius: 100%;
          position: absolute;
          right: -4px;
          top: -2px;
        }
      }
      @keyframes ring {
        0%,
        3.5%,
        100% {
          transform: rotateX(0);
        }
        .5%,
        1.5%,
        2.5% {
          transform: rotate(10deg);
        }
        1%,
        2%,
        3.0% {
          transform: rotate(-10deg);
        }
      }
      .avatarWrap {
        width: 35px;
        height: 35px;
        background-color: #78a431;
        border-radius: 100%;
        align-items: flex-end;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      .accoutType {
        color: #78a431;
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
`;
