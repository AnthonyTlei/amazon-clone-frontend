import HeaderComponent from "../features/products/components/Header.component";
import { useAppSelector, useAppDispatch } from "../hooks/redux/hooks";
import ProductComponent from "../features/products/components/Product.component";
import { useEffect } from "react";
import { getProducts } from "../features/products/productSlice";

const HomePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          marginTop: "48px"
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
