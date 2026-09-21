import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../../Context/StoreContext";
import axios from "axios";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Check,
} from "lucide-react";
import { data, useNavigate, useParams } from "react-router";

export const ProductPage = () => {
  const [ProductData, setProductData] = useState("");
  const {
    CurrentProduct,
    CartItems,
    setCartItems,
    IncrementFnc,
    DecrementFnc,
  } = useContext(MyStore);

  let IsExist = CartItems.find((Item) => {
    return Item.id === ProductData.id;
  });

  // const [BtnToggle, setBtnToggle] = useState(false);
  let { id } = useParams();

  let navigate = useNavigate();
  useEffect(() => {
    let CurrentApiData = async () => {
      try {
        let CurrentProductData = await axios.get(
          `https://fakestoreapi.com/products/${CurrentProduct ? CurrentProduct : id}`,
        );
        setProductData(CurrentProductData.data);
      } catch (error) {
        console.log(error, "this is error naveen");
      }
    };
    CurrentApiData();
  }, [CurrentProduct || id]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-16 font-inter">
      {/* Back Button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-8 transition-colors w-fit"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Products</span>
      </button>

      {/* Main Product Container (Grid Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE: Product Image */}
        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex justify-center items-center relative group">
          <img
            src={ProductData.image}
            alt={ProductData.title}
            // mix-blend-multiply white background ko gayab kar deta hai!
            className="w-full max-w-[350px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* RIGHT SIDE: Product Details */}
        <div className="flex flex-col justify-center">
          {/* Category Tag */}
          <span className="uppercase text-xs tracking-widest font-bold text-indigo-600 mb-3 bg-indigo-50 w-fit px-3 py-1 rounded-full">
            {ProductData.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4 leading-tight">
            {ProductData.title}
          </h1>

          {/* Rating Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold text-yellow-700 text-sm">
                {ProductData.rating?.rate}
              </span>
            </div>
            <span className="text-gray-400 text-sm">
              ({ProductData.rating?.count} verified reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-4xl font-inter font-extrabold text-gray-900 mb-6">
            ${ProductData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {ProductData.description}
          </p>

          {/* Add to Cart & Buy Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* before btn  */}

            {!IsExist ? (
              <button
                onClick={() => {
                  setCartItems((prev) => {
                    return [...prev, { ...ProductData, quantity: 1 }];
                  });
                }}
                className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-xl flex justify-center items-center gap-2 font-inter font-semibold text-base hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            ) : (
              <div className="flex items-center justify-between bg-gray-100 border border-gray-200 rounded-xl px-4 py-2 w-36">
                <div
                  onClick={() => {
                    DecrementFnc(ProductData.id);
                  }}
                  className="text-gray-600 hover:text-indigo-600 font-bold transition-colors"
                >
                  -
                </div>

                <span className="font-semibold text-gray-800 text-base">
                  {IsExist.quantity}
                </span>

                <div
                  onClick={() => {
                    IncrementFnc(ProductData.id);
                  }}
                  className="text-gray-600 hover:text-indigo-600 font-bold transition-colors"
                >
                  +
                </div>
              </div>
            )}
            {/* buy btn  */}
            <button className="flex-1 bg-indigo-50 text-indigo-600 py-4 px-8 rounded-xl flex justify-center items-center gap-2 font-inter font-semibold text-base hover:bg-indigo-100 transition-colors">
              Buy it Now
            </button>
          </div>

          {/* Extra Features (Trust Badges) */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2 bg-gray-50 rounded-full text-gray-900">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2 bg-gray-50 rounded-full text-gray-900">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
