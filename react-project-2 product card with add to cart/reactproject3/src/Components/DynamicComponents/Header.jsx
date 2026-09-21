import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router"; // Ensure it's react-router-dom
import {
  Home,
  Package,
  Info,
  Briefcase,
  Image as ImageIcon,
  Phone,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { MyStore } from "../../Context/StoreContext";
import { CartPopup } from "./CartPopup";

export const Header = () => {
  let navigate = useNavigate();

  const { CartSideBar, setCartSideBar, setLoggedin } = useContext(MyStore);

  // Helper function to handle active link styling
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-indigo-600 bg-indigo-50/50 font-semibold"
        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-100/50"
    }`;

  let handleLogout = () => {
    setLoggedin(false);
    localStorage.removeItem("AllUsers");
    localStorage.removeItem("CurrentEmail");
  };

  return (
    /* 
      GLASSMORPHISM EFFECT: 
      fixed top-0 (stays on top), bg-white/60 (semi-transparent white), 
      backdrop-blur-md (blurs whatever is behind it)
    */
    <div className=" top-0 w-full fixed z-50 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <header className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* LOGO (Using font-poppins) */}
        <div className="flex w-[140px] font-bold text-gray-900 font-poppins tracking-tight cursor-pointer">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="./public/logoipsum-426.png"
            alt="SiteLogo"
          />
        </div>

        {/* NAVIGATION (Using font-inter) */}
        <nav>
          <ul className="flex items-center gap-2 text-sm font-inter">
            <li>
              <NavLink to="/" className={navLinkStyles}>
                <Home className="w-4 h-4" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkStyles}>
                <Package className="w-4 h-4" /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyles}>
                <Info className="w-4 h-4" /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkStyles}>
                <Briefcase className="w-4 h-4" /> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkStyles}>
                <ImageIcon className="w-4 h-4" /> Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={navLinkStyles}>
                <Phone className="w-4 h-4" /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* 
          ACTION BUTTON
          Note: Changed navigate path to "/cart" to match the text. 
          Change it back to "/contact-us" if that was intentional.
        */}
        <button
          onClick={() => {
            navigate("/Cart");
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-inter text-sm font-medium rounded-full hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <ShoppingCart className="w-4 h-4" />
          Go to Cart
        </button>
        <button
          onClick={() => {
            setCartSideBar(!CartSideBar);
          }}
          type="button"
          className="overflow-hidden col-span-2 w-[40px]  h-[40px] flex items-center justify-center gap-2.5 bg-gray-900 text-white  px-1 py-1 rounded-xl font-inter font-semibold text-sm hover:bg-indigo-600 shadow-sm hover:shadow transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl bg-red-600/80 text-white font-semibold text-sm hover:bg-red-700 active:scale-[0.98] transition-all shadow-md cursor-pointer"
        >
          Logout
        </button>
      </header>
    </div>
  );
  fh - dvh;
};
