import styled from "styled-components";
import "./reset.css";

function App() {
  return (
    <Phone>
      <Header>
        <ul class="header__list">
          <li class="header__list-item header__list-item--inverted">All</li>
          <li class="header__list-item">Advertising</li>
          <li class="header__list-item">Dev & Data Science</li>
          <li class="header__list-item">Goals</li>
          <li class="header__list-item">IOS Development</li>
        </ul>
      </Header>
      <Cards>
        <div class="cards__card">
          <h2 class="card__title">The Making of Modern Art</h2>
          <Process>
            <span>63%</span>
            <ProcessBar completed={"63"}>
              <div class="process__bar-completed"></div>
              <div class="process__bar-left"></div>
            </ProcessBar>
          </Process>
        </div>
        <div class="cards__card">
          <h2 class="card__title">Mobile Interfaces Advanced</h2>
          <div className="card__footer">
            <span class="price">Free</span>
            <span class="length">2</span>
          </div>
        </div>
        <div class="cards__card">
          <h2 class="card__title">
            Graphic Design. <br />
            Professium
          </h2>
          <div className="card__footer">
            <span class="price">$199/month</span>
            <span class="length">9 months</span>
          </div>
        </div>
        <div class="cards__card">
          <h2 class="card__title">Web Design Junior</h2>
          <div className="card__footer">
            <span class="price">Free</span>
            <span class="length">3</span>
          </div>
        </div>
        <div class="cards__card">
          <h2 class="card__title">Inclusive Web Design</h2>
          <div className="card__footer">
            <span class="price">$99/mon</span>
            <span class="length">3</span>
          </div>
        </div>
        <div class="cards__card">
          <h2 class="card__title">Machine Learning</h2>
          <div className="card__footer">
            <span class="price">$199/month</span>
            <span class="length">9 months</span>
          </div>
        </div>
      </Cards>
    </Phone>
  );
}

export default App;

const Phone = styled.div`
  background-color: black;
  width: 420px;
  height: 95%;
  border-radius: 40px;
  padding: 50px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.header`
  overflow-x: auto;
  .header__list {
    display: flex;
    gap: 10px;
    color: white;
    width: max-content;
    &-item {
      border: 1px solid gray;
      padding: 10px;
      border-radius: 20px;
    }
    &-item--inverted {
      color: black;
      background-color: white;
      font-weight: 500;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  color: black;
  overflow-y: auto;
  .cards__card {
    border: 1px solid gray;
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    .card__title {
      font-size: 28px;
    }
    .card__footer {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      > span {
        border: 1px solid black;
        border-radius: 15px;
        background-color: white;
        color: black;
        padding: 8px 12px;
      }
    }
    &:nth-child(2n) {
      .card__footer span:first-child {
        background-color: #fedd2d;
      }
    }
    &:nth-child(2n + 1) {
      .card__footer span:first-child {
        background-color: #e9aefc;
      }
    }
    &:nth-child(3n) {
      grid-column: span 2;
    }
    &:first-child {
      background-color: #292d32;
      color: white;
    }
    &:nth-child(2) {
      background-color: white;
    }
    &:nth-child(3) {
      background-color: #f8fdb6;
    }
    &:nth-child(4) {
      background-color: #b9a8f7;
    }
    &:nth-child(5) {
      background-color: #fed1d1;
    }
    &:nth-child(6) {
      background-color: #d2fedd;
    }
  }
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProcessBar = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `${props.completed}fr ${100 - props.completed}fr`};
  grid-template-rows: 5px;
  .process__bar-completed {
    background-color: white;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .process__bar-left {
    background-color: gray;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
