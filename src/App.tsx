import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from "./pages/checkout";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
