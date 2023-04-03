import { useState } from "react";
import HeaderComponent from "../features/products/components/Header.component";
import { useAppSelector, useAppDispatch } from "../hooks/redux/hooks";
import ProductComponent from "../features/products/components/Product.component";

const HomePage = () => {
  const { cart, products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  return (
    <div>
      <HeaderComponent />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductComponent key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
