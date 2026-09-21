import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const MyStore = createContext();

export let StoreContextFnc = ({ children }) => {
  const [ProductData, setProductData] = useState([]);
  const [CurrentProduct, setCurrentProduct] = useState(null);
  const [RemoveCart, setRemoveCart] = useState("");

  // +++++++++++++
  // set use account are there
  const [UserAccounts, setUserAccounts] = useState(() => {
    return JSON.parse(localStorage.getItem("AllUsers")) || [];
  });
  // const [LoginDetail, setLoginDetail] = useState("");
  const [Loggedin, setLoggedin] = useState(() => {
    return localStorage.getItem("userData") === "true";
  });

  useEffect(() => {
    // ✨ Safety Check: Agar UserAccounts undefined hai ya array nahi hai, toh save mat karo!
    if (!UserAccounts) return;

    console.log(UserAccounts);
    localStorage.setItem("AllUsers", JSON.stringify(UserAccounts));
  }, [UserAccounts]);

  let LoginCheckup = (UserData) => {
    let IsExist = UserAccounts.find((User) => {
      return (
        // User.Email === LoginDetail.Email &&
        // User.Password === LoginDetail.Password
        User.Email === UserData.Email && User.Password === UserData.Password
      );
    });
    if (IsExist) {
      setLoggedin(true);
      localStorage.setItem("CurrentEmail", IsExist.Email);
    } else {
      alert("loggin details are wrong");
      localStorage.removeItem("CurrentEmail");
      setLoggedin(false);
    }
  };

  // useEffect(() => {
  //   LoginCheckup();
  // }, [LoginDetail]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(Loggedin));
  }, [Loggedin]);

  // -------------

  const [CartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("CartData")) || [],
  );

  useEffect(() => {
    localStorage.setItem("CartData", JSON.stringify(CartItems));
  }, [CartItems]);

  const [CartSideBar, setCartSideBar] = useState(false);

  let ApiProductData = async () => {
    try {
      let ApiData = await axios.get("https://fakestoreapi.com/products");
      setProductData(ApiData.data);
    } catch (error) {
      console.log("there is a error", error);
    }
  };

  useEffect(() => {
    ApiProductData();
  }, []);

  useEffect(() => {
    let RemoveCartFnc = (ItemId) => {
      setCartItems((prev) =>
        prev.filter((Items) => {
          return Items.id !== ItemId;
        }),
      );
    };
    RemoveCartFnc(RemoveCart);
  }, [RemoveCart]);

  // insrease and descrease global fucntions

  let IncrementFnc = (ItemId) => {
    setCartItems((prev) => {
      return prev.map((Item) => {
        return Item.id === ItemId
          ? { ...Item, quantity: Item.quantity + 1 }
          : Item;
      });
    });
  };

  let DecrementFnc = (ItemId) => {
    setCartItems((Prev) => {
      return Prev.map((Item) => {
        return Item.id === ItemId
          ? {
              ...Item,
              quantity: Item.quantity > 1 ? Item.quantity - 1 : 0,
            }
          : Item;
      }).filter((Item) => Item.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        ProductData,
        setProductData,
        CurrentProduct,
        setCurrentProduct,
        CartItems,
        setCartItems,
        RemoveCart,
        setRemoveCart,
        IncrementFnc,
        DecrementFnc,
        CartSideBar,
        setCartSideBar,
        Loggedin,
        setLoggedin,
        UserAccounts,
        setUserAccounts,
        // LoginDetail,
        // setLoginDetail,
        LoginCheckup,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
