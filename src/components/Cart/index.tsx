import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import SnackbarWithAlert from "../Snackbar";
import {
  StyledCard,
  EmptyCart,
  WrapperProducts,
  Product,
  ProductWrapper,
  ProductName,
  ProductFields,
  Field,
  ProductButton,
} from "./StyledComponents";

import { ICartProducts } from "../../types";

interface CartProps extends ICartProducts {
  open: boolean;
  onCheckout: () => void;
  onRemove: (id: string) => void;
  onClose: (event?: React.SyntheticEvent | Event) => void;
}

const Cart = ({
  open,
  products,
  onRemove,
  onCheckout,
  onClose,
}: CartProps): JSX.Element => {
  const totalPrice = products.reduce(
    (result, product) => result + product.quantity * product.price,
    0
  );

  return (
    <StyledCard>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Cart
        </Typography>

        {!products.length ? (
          <EmptyCart>
            Your shopping cart is empty. If you see something you would like to
            add to your shopping cart when shopping.
          </EmptyCart>
        ) : (
          <WrapperProducts>
            {products.map((product) => (
              <Product key={product.id}>
                <ProductWrapper>
                  <ProductName>{product.name}</ProductName>

                  <ProductFields>
                    <Field>$ {product.price} USD</Field>
                    <Field>х {product.quantity}</Field>
                  </ProductFields>
                </ProductWrapper>

                <ProductButton onClick={() => onRemove(product.id)}>
                  <ClearIcon />
                </ProductButton>
              </Product>
            ))}
          </WrapperProducts>
        )}
      </CardContent>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Total: $ {totalPrice}
        </Typography>

        <Button disabled={!products.length} onClick={onCheckout}>
          CHECKOUT
        </Button>

        <SnackbarWithAlert
          timeAlert={3000}
          textAlert="Your order is accepted!"
          severity="success"
          open={open}
          onClose={onClose}
        />
      </CardContent>
    </StyledCard>
  );
};

export default Cart;
