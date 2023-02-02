import "./App.css";
import { Route, Routes } from "react-router-dom";

//Components
import Home from "./Components/Home";
import Search from "./Components/Search";
import SharedLayout from "./Components/SharedLayout";
import AllProperties from "./Components/AllProperties";
import Error from "./Components/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/search" element={<Search />} />
        <Route path="/properties" element={<AllProperties />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
