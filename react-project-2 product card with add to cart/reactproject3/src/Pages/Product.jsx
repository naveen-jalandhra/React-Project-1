import React from "react";
import { ProductCard } from "../Components/DynamicComponents/ProductCard";
import { useContext } from "react";
import { MyStore } from "../Context/StoreContext";

export const Product = () => {
  let { ProductData, setProductData } = useContext(MyStore);
  return (
    <div className="grid grid-cols-1 max-w-7xl  items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  p-5">
      {ProductData.map((items) => {
        return <ProductCard key={items.id} Product={items} />;
      })}
    </div>
  );
};
