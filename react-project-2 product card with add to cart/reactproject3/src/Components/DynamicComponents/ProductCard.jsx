import React from "react";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react"; // Using Lucide icons like the header
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MyStore } from "../../Context/StoreContext";

export const ProductCard = ({ Product }) => {
  let navigate = useNavigate();
  const {
    setCurrentProduct,
    CartItems,
    setCartItems,
    IncrementFnc,
    DecrementFnc,
  } = useContext(MyStore);

  let IsExiste = CartItems.find((Item) => Item.id === Product.id);

  return (
    <div
      onClick={() => {
        navigate(`/product/${Product.id}`);
        setCurrentProduct(Product.id);
      }}
      className="w-full max-w-sm bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
    >
      <div className="relative h-64 bg-gray-50/50 p-6 flex justify-center items-center overflow-hidden">
        <img
          src={Product.image}
          alt={Product.title}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 capitalize shadow-sm border border-gray-200">
          {Product.category}
        </span>
      </div>

      <div className="p-5 grid grid-cols-[1fr_auto] gap-y-3 gap-x-4 items-center">
        <h3 className="font-poppins font-semibold text-gray-900 text-lg line-clamp-1 col-start-1 col-end-2">
          {Product.title}
        </h3>
        <p className="font-inter font-bold text-indigo-600 text-xl col-start-2 col-end-3 justify-self-end">
          ${Product.price}
        </p>

        <div className="flex items-center gap-1.5 col-span-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">
            {Product.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({Product.rating.count} reviews)
          </span>
        </div>

        {!IsExiste ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCartItems((prev) => [...prev, { ...Product, quantity: 1 }]);
              // CartCheck(Product.id);
            }}
            className="mt-2 col-span-2 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-inter font-medium text-sm hover:bg-indigo-600 transition-colors duration-300 active:scale-[0.98]"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="mt-2 col-span-2 w-full flex items-center justify-between bg-gray-50 border border-gray-200/80 rounded-xl p-1.5 shadow-sm"
          >
            <button
              onClick={() => {
                DecrementFnc(Product.id);
              }}
              type="button"
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition-all duration-200 shadow-xs active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-3">
              <ShoppingCart className="w-4 h-4 text-indigo-600" />
              <span className="font-inter font-bold text-gray-900 text-sm">
                {IsExiste.quantity}
              </span>
            </div>

            <button
              onClick={() => {
                IncrementFnc(Product.id);
              }}
              type="button"
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition-all duration-200 shadow-xs active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
