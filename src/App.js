import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
// import NavBarComponent from "./Components/Navbar/NavBarComponent";
import Home from "./Components/Home/Home";
import Pokedex from "./Components/Pokedex/Pokedex";
import Types from "./Components/Types/Types";
import NavBarComponent from "./Components/Layout/NavBarComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<Pokedex />}></Route>
        <Route path="/types" element={<Types />}></Route>
        <Route path="/types/:typeId" element={<Pokedex />}></Route>
        <Route path="*" element={<h1>Error 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
