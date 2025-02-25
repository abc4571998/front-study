import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
