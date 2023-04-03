import HeaderComponent from "../features/products/components/Header.component";
import PaymentGateway from "../features/products/components/Payment.component";
import ProductComponent from "../features/products/components/Product.component";
import { useAppSelector } from "../hooks/redux/hooks";

const CartPage = () => {
  const { products, cart } = useAppSelector((state) => state.product);
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
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
          marginTop: "48px",
        }}
      >
        {products.map((product) => (
          <ProductComponent key={product._id} product={product} />
        ))}
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <hr style={{ marginTop: "16px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "20px",
          }}
        >
          <span style={{ marginRight: "16px" }}>
            Subtotal ({totalQty}) items:
          </span>
          <span style={{ marginBottom: "48px", fontWeight: 500 }}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        {totalQty > 0 && <PaymentGateway />}
      </div>
    </div>
  );
};

export default CartPage;
