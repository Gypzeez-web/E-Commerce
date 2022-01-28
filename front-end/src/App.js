import TopBar from "./Admin-Dashboard/components/topbar/TopBar.js";
import "./App.css";
import SideBar from "./Admin-Dashboard/components/sidebar/SideBar.js";
import Home from "./Admin-Dashboard/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
