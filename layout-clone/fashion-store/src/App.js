import styled from "styled-components";
import "./reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Phone>
      <Header>
        <div class="header__left">
          <FontAwesomeIcon icon={faChevronLeft} />
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div class="header__title">MY CART</div>
        <div class="header__right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </Header>
      <TotalSection>
        <span class="total__price">$3550</span>
        <span class="total__subtitle">based on your 5 items</span>
      </TotalSection>
      <ItemWrapper>
        <Item>
          <Info>
            <div class="info-col">
              <div class="info-col__title">
                pop <br />
                temple <br />
                print <br />
                t- <br />
                shirt
              </div>
              <div class="info-col__subtitle">versace limited 2021</div>
            </div>
            <div class="info-col">
              <div class="info-col__price">$1990</div>
              <div class="info-col__price-subtitle">$995 per piece</div>
            </div>
          </Info>
          <Spec>
            <div class="spec-item">
              <span class="spec-item__title">SIZE</span>
              <span class="spec-item__value">48 - L</span>
            </div>
            <div class="spec-item">
              <span class="spec-item__title">QT</span>
              <span class="spec-item__value">2 pcs</span>
            </div>
          </Spec>
          <img src="https://source.unsplash.com/random" class="item__photo" />
        </Item>
        <Item>
          <Info>
            <div class="info-col">
              <div class="info-col__title">
                pop <br />
                temple <br />
                print <br />
                t- <br />
                shirt
              </div>
              <div class="info-col__subtitle">versace limited 2021</div>
            </div>
            <div class="info-col">
              <div class="info-col__price">$1990</div>
              <div class="info-col__price-subtitle">$995 per piece</div>
            </div>
          </Info>
          <Spec>
            <div class="spec-item">
              <span class="spec-item__title">SIZE</span>
              <span class="spec-item__value">48 - L</span>
            </div>
            <div class="spec-item">
              <span class="spec-item__title">QT</span>
              <span class="spec-item__value">2 pcs</span>
            </div>
          </Spec>
          <img src="https://source.unsplash.com/random" class="item__photo" />
        </Item>
      </ItemWrapper>
    </Phone>
  );
}

export default App;

const Phone = styled.div`
  background-color: #c6caca;
  height: 95%;
  width: 420px;
  border-radius: 10px;
  border: 5px solid black;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

const Header = styled.div`
  padding: 40px 20px 20px;
  display: flex;
  justify-content: space-between;
  > div {
    width: 33%;
  }
  .header__left {
    display: flex;
    gap: 1rem;
  }
  .header__title {
    display: flex;
    justify-content: center;
    font-weight: 800;
  }
  .header__right {
    display: flex;
    justify-content: flex-end;
  }
`;

const TotalSection = styled.section`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 800;
  align-items: end;
  background-color: #1f1414;
  color: white;
  .total__price {
    font-size: 25px;
  }
  .total__subtitle {
    font-size: 15px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.section`
  position: relative;
  border-top: 3px solid #1f1414;
  background-color: #d7dbdb;
  .item__photo {
    width: 185px;
    height: 220px;
    position: absolute;
    bottom: 0;
    left: 50%;
    border: 3px solid #1f1414;
    object-fit: cover;
  }
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .info-col {
    font-weight: 800;
    padding: 30px 20px;
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
    .info-col__title {
      font-size: 35px;
      text-transform: uppercase;
    }
    .info-col__price {
      font-size: 25px;
    }
    .info-col__subtitle,
    .info-col__price-subtitle {
      font-size: 15px;
    }
  }
`;
const Spec = styled.div`
  display: flex;
  border-top: 3px solid #1f1414;
  border-bottom: 3px solid #1f1414;
  .spec-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    font-weight: 800;
    font-size: 15px;
    &:last-child {
      border-left: 3px solid #1f1414;
    }
  }
`;
