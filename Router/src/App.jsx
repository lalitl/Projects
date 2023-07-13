import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import SharedLayout from "./Pages/SharedLayout";
import SingleProduct from "./Pages/SingleProduct";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SharedProduts from "./Pages/SharedProduts";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
