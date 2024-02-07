import axios from "axios";
import { useState } from "react";
import NewsList from "./components/NewsList";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=18275904569742d3bf96f9437df74bc4"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <NewsList />;
};

export default App;
