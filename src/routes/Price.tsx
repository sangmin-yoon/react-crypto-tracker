import { useLocation } from "react-router";
import styled from "styled-components";

const PriceWrapper = styled.div`
  height: 100%;
`;

const PriceItem = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(porps) => porps.theme.textColor};
  margin-bottom: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 15px;
    &:last-child {
      font-weight: bold;
    }
  }
`;

interface RouteState {
  dayP: number;
  sevenP: number;
  volume: number;
  marketcap: number;
}

function Price() {
  const { state } = useLocation<RouteState>();

  return (
    <PriceWrapper>
      <PriceItem>
        <span>시가총액</span>
        <span> $ {state.marketcap}</span>
      </PriceItem>
      <PriceItem>
        <span>7일간 변동률</span>
        <span> {state.sevenP} %</span>
      </PriceItem>
      <PriceItem>
        <span>24시간 변동률</span>
        <span> {state.dayP} %</span>
      </PriceItem>
      <PriceItem>
        <span>24시간 거래량</span>
        <span> $ {state.volume}</span>
      </PriceItem>
    </PriceWrapper>
  );
}

export default Price;
