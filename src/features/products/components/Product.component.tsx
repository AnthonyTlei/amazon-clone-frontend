import { FC } from "react";
import { ProductDocument } from "../models/Product";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { decrementProduct, incrementProduct } from "../productSlice";

interface ProductComponentProps {
  product: ProductDocument;
}

const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.product);
  let qty = 0;
  const cartItem = cart.find((item) => item._id === product._id);
  if (cartItem) {
    qty = cartItem.quantity;
  }
  return (
    <Card sx={{ width: 300, minWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300.png/09f/fff"
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${product.price}
        </Typography>
        {product.description && (
          <Typography variant="body2" component="div" color="text.secondary">
            ${product.description}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          disabled={qty === 0}
          size="large"
          onClick={() => {
            dispatch(decrementProduct(product));
          }}
        >
          -
        </Button>
        <span>{qty}</span>
        <Button
          size="large"
          onClick={() => {
            dispatch(incrementProduct(product));
          }}
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductComponent;
