import { Contact, Home } from "lucide-react";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Product } from "../Pages/Product";
import { About } from "../Pages/About";
import { Services } from "../Pages/Services";
import { Gallery } from "../Pages/Gallery";
import { ProductPage } from "../Components/DynamicComponents/ProductPage";
import { Cart } from "../Pages/Cart";
import { SecurityRouting } from "./SecurityRouting";
import { UserRegister } from "./Register&Login/UserRegister";
import { UserLogin } from "./Register&Login/UserLogin";
import { MyStore } from "../Context/StoreContext";
import { HomePage } from "../Pages/Home";

export const AppRoutes = () => {
  const { Loggedin } = useContext(MyStore);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={
          <SecurityRouting>
            <Product />
          </SecurityRouting>
        }
      />
      <Route
        path="/about"
        element={
          <SecurityRouting>
            <About />
          </SecurityRouting>
        }
      />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/register"
        element={Loggedin ? <Navigate to={"/products"} /> : <UserRegister />}
      />
      <Route
        path="/login"
        element={Loggedin ? <Navigate to={"/products"} /> : <UserLogin />}
      />
    </Routes>
  );
};
