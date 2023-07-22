import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  PrivateRoute,
  SingleProduct,
  Products,
  Error,
  Checkout,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
