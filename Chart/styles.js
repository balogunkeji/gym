import styled from "styled-components";

export const BarChartMain = styled.section`
  background: ${({ barChartBk }) => barChartBk || "#fff"};
  position: relative;
  padding: 0 20px;
  border-radius: 28px;
  background: white;
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  min-height: 400px;

  @media (max-width: 500px) {
    padding: 0 10px;
  }

  .header {
    padding: 20px;

    span {
      color: #00000088;
      font-size: 13px;
      font-weight: bold;
    }
    .title {
      h2 {
        color: #8798ad;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  .canvas {
    padding-bottom: 20px;

    canvas {
      width: 400px;
      height: 300px;
    }
  }
`;

export const LineChartMain = styled.section`
  background: ${({ barChartBk }) => barChartBk || "#fff"};
  position: relative;
  .scrolling {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
export const LineChartWrap = styled("div")`
  padding: 20px 20px 20px 0;
  border-radius: 28px;
  background: white;
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  min-height: 400px;

  @media (max-width: 500px) {
    padding: 20px 0;
  }

  .header {
    padding: 20px;

    span {
      color: #00000088;
      font-size: 13px;
      font-weight: bold;
    }
    .title {
      h2 {
        color: #8798ad;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }

  canvas {
    width: 400px;
    height: 300px;
  }
`;

export const PieChartWrap = styled("div")`
  margin-top: 20px;
  padding: 0;
  border-radius: 28px;
  background: white;
  width: 100%;
  max-width: 600px;
  max-height: 200px;
  min-height: 200px;
  overflow: hidden;

  .canvas {
    width: 100%;
    height: 100%;
    canvas {
      height: 220px;
      width: 100%;
      margin-left: -20px;
    }

    @media (max-width: 400px) {
      canvas {
        margin-left: -20px;
      }
    }
  }
`;
