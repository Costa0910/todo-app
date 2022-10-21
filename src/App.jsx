import { Route, Routes } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import Home from "./components/Home";
import Active from "./components/Active";
import Completed from "./components/Completed";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavLinks />}>
          <Route index element={<Home />} />
          <Route path="active" element={<Active />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
