import "./App.css";
import { Route, Routes } from "react-router-dom";


//Components
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import SharedLayout from "./Components/SharedLayout";
import AllProperties from "./Pages/AllProperties";
import Error from './Pages/Error';
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
