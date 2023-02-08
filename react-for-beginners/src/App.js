import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onClick = () => {
    setValue((counter) => counter + 1);
  };

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="hello" />

      <hr />
      <h1>{counter}</h1>
      <button onClick={onClick} className={styles.Btn}>
        +1
      </button>

      <hr />
      <input
        type="text"
        onChange={onChange}
        placeholder="Search keyword"
        value={keyword}
      />
      <h2>{keyword}</h2>
    </div>
  );
}

export default App;
