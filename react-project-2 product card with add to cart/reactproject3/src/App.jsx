import React, { useContext } from "react";

import { Header } from "./Components/DynamicComponents/Header";
import { Footer } from "./Components/DynamicComponents/Footer";
import { MyStore } from "./Context/StoreContext";
import { CartPopup } from "./Components/DynamicComponents/CartPopup";
import { UserLogin } from "./routes/Register&Login/UserLogin";
import { UserRegister } from "./routes/Register&Login/UserRegister";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  const { CartSideBar, Loggedin } = useContext(MyStore);
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <AppRoutes />

        {CartSideBar && <CartPopup />}
      </main>
      <Footer />
    </>
  );
};
