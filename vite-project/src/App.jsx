import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/Nopage";
import Mydata from "./context/data/Mydata";
import Login from "./pages/registration/Login";
import Singup from "./pages/registration/Singup";
import Productinfo from "./pages/productinfo/Productinfo";
import Updateproduct from "./pages/admin/pages/Updateproduct";
import Addproduct from "./pages/admin/pages/Addproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./pages/allproducts/Allproducts";
function App() {
  return (
    <Mydata>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteforAdmin>
                <Dashboard />
              </ProtectedRouteforAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteforAdmin>
                <Addproduct />
              </ProtectedRouteforAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteforAdmin>
                <Updateproduct />
              </ProtectedRouteforAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Mydata>
  );
}

export default App;
//user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
//admin
export const ProtectedRouteforAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "rohanmisraa2002@gmail.com") {
    return children;
  } else {
    return <Navigate to={"login"} />;
  }
};
