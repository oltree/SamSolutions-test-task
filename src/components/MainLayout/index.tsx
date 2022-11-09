import { useState, useCallback } from "react";

import cloneDeep from "lodash/cloneDeep";

import Cart from "../Cart";
import Header from "../Header";
import Shop from "../Shop";

import { Wrapper, Main } from "./StyledCpmponents";

import { ICartProduct } from "../../types";

import { data } from "../../static/mocks";

const MainLayout = (): JSX.Element => {
  const [products, setProducts] = useState<ICartProduct[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event?: React.SyntheticEvent | Event) => setOpen(!open);

  const handleAddProduct = useCallback((id: string): void => {
    setProducts((state) => {
      const productsCopy = cloneDeep(state);

      const findProductInData = data.find((product) => product.id === id);

      const findProductInCart = productsCopy.find(
        (product) => product.id === id
      );

      if (findProductInCart) {
        findProductInCart.quantity += 1;
      } else if (findProductInData) {
        const newProduct = { ...findProductInData, quantity: 1 };

        productsCopy.push(newProduct);
      }

      return productsCopy;
    });
  }, []);

  const handleRemove = useCallback((id: string): void => {
    setProducts((state) => {
      const productsCopy = cloneDeep(state);

      const productIndexToRemove = productsCopy.findIndex(
        (product) => product.id === id
      );

      productsCopy.splice(productIndexToRemove, 1);

      return productsCopy;
    });
  }, []);

  const handleCheckout = (): void => {
    setProducts([]);

    handleClose();
  };

  return (
    <Wrapper>
      <Header />

      <Main>
        <Shop onAddProduct={handleAddProduct} />
        <Cart
          products={products}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
          open={open}
          onClose={handleClose}
        />
      </Main>
    </Wrapper>
  );
};

export default MainLayout;
