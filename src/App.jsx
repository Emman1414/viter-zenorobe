import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Clothes from "./components/pages/backend/clothes/Clothes";
import { StoreProvider } from "./components/pages/backend/store/storeContext";
import Home from "./components/pages/frontend/home/Home";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Category from "./components/pages/backend/category/Category";
import Login from "./components/pages/backend/access/Login";
import SetPassword from "./components/pages/backend/access/SetPassword";
import ForgotPassword from "./components/pages/backend/access/ForgotPassword";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/product/:slug" element= {<ProductInfo/>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/clothes" element={<Clothes />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/setpassword" element={<SetPassword />} />
          <Route path="/admin/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
