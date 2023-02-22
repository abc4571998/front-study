import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(0);
  const [value, setValue] = useState(0);
  const [dollar, setDollar] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    setDollar(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    convertCoins();
  };
  const convertCoins = () => {
    if (selectCoin === 0) setValue(0);
    else setValue(dollar / selectCoin);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <form action="" onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              placeholder="Enter your dollars"
            />
            <select
              onChange={(e) => {
                if (e.target.selectedIndex === 0) setSelectCoin(0);
                else
                  setSelectCoin(
                    coins[e.target.selectedIndex - 1].quotes.USD.price
                  );
              }}
            >
              <option>select coin</option>
              {coins.map((coin) => (
                <option id={coin.quotes.USD.price} key={coin.id}>
                  {coin.name} ({coin.symbol} : {coin.quotes.USD.price})
                </option>
              ))}
            </select>
            <button>Convert</button>
          </form>
          <h3>You can buy {value} coins!</h3>
        </div>
      )}
    </div>
  );
}

export default App;
