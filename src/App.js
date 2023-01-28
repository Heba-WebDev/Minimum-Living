import "./App.css";

//Components
import Home from "./Components/Home";
import Search from "./Components/Search";
import SharedLayout from "./Components/SharedLayout";
import { Route, Routes } from "react-router-dom";
import AllProperties from "./Components/AllProperties";

function App() {
  return (
    <Routes>
      
      <Route  path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      
      <Route path="/search" element={<Search />} />
      <Route path="/properties" element={<AllProperties />} />
      </Route>
      
    </Routes>
  );
}

export default App;
