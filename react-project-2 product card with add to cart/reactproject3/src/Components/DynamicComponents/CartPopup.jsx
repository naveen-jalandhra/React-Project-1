import React, { useContext } from "react";
import { MyStore } from "../../Context/StoreContext";
import { useNavigate } from "react-router";

export const CartPopup = () => {
  const {
    CartItems,
    setRemoveCart,
    IncrementFnc,
    DecrementFnc,
    setCartSideBar,
    CartSideBar,
  } = useContext(MyStore);

  let navigation = useNavigate();

  return (
    <div className="fixed inset-0 top-0 bottom-0 z-50 flex justify-end">
      <div
        onClick={() => setCartSideBar(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px] "
      >
        <div className="relative z-10 w-full  max-w-[600px] h-full bg-black/70 backdrop-blur-[40px]  p-7 flex flex-col shadow-2xl overflow-hidden ">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
            <h2 className="text-lg font-bold text-white">Your Shopping Cart</h2>
            <button
              type="button"
              onClick={() => setCartSideBar(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer font-bold"
            >
              ✕
            </button>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex flex-col gap-4 h-full overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {CartItems.map((item) => {
              return item ? (
                <div
                  key={item?.id}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-xs transition-all hover:shadow-md"
                >
                  {/* 1. Left Side: Image & Title */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 p-1.5 border border-gray-100">
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="h-full w-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <h4
                        className="text-xs font-semibold text-gray-900 truncate"
                        title={item?.title}
                      >
                        {item?.title}
                      </h4>
                      <span className="text-xs font-bold text-indigo-600 mt-1">
                        ${(item?.price * (item?.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* 2. Right Side: Compact Quantity Controls & Remove */}
                  <div className="flex items-center gap-3">
                    {/* Mini Quantity Selector */}
                    <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 gap-2">
                      <button
                        onClick={() => DecrementFnc(item.id)}
                        className="text-gray-500 hover:text-black font-bold text-xs cursor-pointer px-1"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-gray-900 w-4 text-center">
                        {item?.quantity || 1}
                      </span>
                      <button
                        onClick={() => IncrementFnc(item?.id)}
                        className="text-gray-500 hover:text-black font-bold text-xs cursor-pointer px-1"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => setRemoveCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50 cursor-pointer"
                      title="Remove item"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p>Cart is empty</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              navigation("/Cart");
              setCartSideBar(!CartSideBar);
            }}
            type="button"
            className="w-full flex items-center justify-center gap-2.5 bg-indigo-600 text-white py-3.5 px-6 rounded-2xl font-inter font-semibold text-sm hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer group mt-4"
          >
            <span>View Full Cart</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
