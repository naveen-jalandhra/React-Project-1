import React, { useContext, useEffect } from "react";
import { MyStore } from "../Context/StoreContext";

export const Cart = () => {
  const { CartItems, setCartItems, RemoveCart, setRemoveCart } =
    useContext(MyStore);

  let IncreaseFnc = (ItemId) => {
    setCartItems((prev) =>
      prev.map((Item) => {
        if (Item.id === ItemId) {
          return { ...Item, quantity: Item.quantity + 1 };
        }
        return Item;
      }),
    );
  };

  let DecreaseFnc = (ItemId) => {
    setCartItems((prev) =>
      prev.map((Item) => {
        if (Item.id === ItemId) {
          return {
            ...Item,
            quantity:
              Item.quantity > 1 ? Item.quantity - 1 : (Item.quantity = 1),
          };
        }
        return Item;
      }),
    );
  };

  let TotalFnc = () => {
    let Total = CartItems.reduce((Sum, Item) => {
      return ((Sum + Item.price * Item.quantity) * 100) / 100;
    }, 0);
    console.log(Total);

    return Total.toFixed(2);
  };

  let TotalAmount = TotalFnc();

  return (
    <main className="font-poppins antialiased mt-24 max-w-5xl mx-auto px-4 sm:px-6 pb-24">
      {/* Header */}
      <div className="mb-8 border-b border-gray-100 pb-5">
        <h1 className="text-[26px] font-bold tracking-tight text-gray-900">
          Review Your Bag
        </h1>
        <p className="mt-1 text-[13px] text-gray-500">
          You have {CartItems.length} item(s) in your shopping bag.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Section: Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {CartItems.map((item) => (
            <div
              key={item?.id}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)]"
            >
              {/* Image & Details Wrapper */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <figure className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden rounded-[18px] bg-[#F9F9FB] p-2">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>

                <div className="flex flex-col justify-center flex-1">
                  <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {item?.category}
                  </span>
                  <h3
                    className="text-[13.5px] font-semibold leading-snug text-gray-900 line-clamp-1 max-w-[220px] sm:max-w-[240px]"
                    title={item?.title}
                  >
                    {item?.title}
                  </h3>
                  <span className="mt-2 text-[15px] font-bold text-black sm:hidden">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Right Side: Quantity & Price Controls */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                {/* Quantity Selector */}
                <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 shadow-inner">
                  <button
                    onClick={() => DecreaseFnc(item.id)}
                    className="flex h-5 w-5 items-center justify-center text-gray-500 hover:text-black transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-[12.5px] font-semibold text-gray-900">
                    {item?.quantity || 1}
                  </span>
                  <button
                    onClick={() => IncreaseFnc(item?.id)}
                    className="flex h-5 w-5 items-center justify-center text-gray-500 hover:text-black transition-colors font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Price (Desktop) */}
                <span className="hidden sm:block text-[16px] font-bold tracking-tight text-black min-w-[70px] text-right">
                  ${(item?.price * (item?.quantity || 1)).toFixed(2)}
                </span>

                {/* Remove Button */}
                <button
                  onClick={() => setRemoveCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
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
          ))}
        </div>

        <div className="w-full lg:w-[360px] flex-shrink-0">
          <div className="sticky top-28 rounded-[28px] bg-white border border-gray-100 p-7 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)]">
            <h2 className="text-[16px] font-bold tracking-tight text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-[13px] text-gray-500 border-b border-gray-100 pb-6 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  {TotalAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">
                  Free Delivery
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-semibold text-gray-900">$0.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-[15px] font-bold text-gray-900">
                Total Amount
              </span>
              <span className="text-[24px] font-extrabold tracking-tight text-black">
                {TotalAmount}
              </span>
            </div>

            <button className="w-full h-12 rounded-full bg-black text-[14px] font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95">
              Proceed to Checkout
            </button>

            {/* Secure Badge */}
            <div className="mt-6 flex justify-center items-center gap-2 text-[10.5px] text-gray-400 uppercase tracking-widest font-bold">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure Encrypted Checkout
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
