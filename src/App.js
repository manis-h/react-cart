import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import Tshirt from "./components/Tshirt";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/clothing" element={<Tshirt/>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
