import { FC, useState } from "react";
import { ProductDocument } from "../models/Product";
import { useAppDispatch } from "../../../hooks/redux/hooks";
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
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

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
          disabled={count === 0}
          size="large"
          onClick={() => {
            setCount((prevCount) => {
              if (prevCount === 0) return 0;
              return prevCount - 1;
            });
            dispatch(decrementProduct(product));
          }}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          size="large"
          onClick={() => {
            setCount((prevCount) => {
              return prevCount + 1;
            });
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
