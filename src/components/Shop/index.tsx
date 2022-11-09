import CardProduct from "../CardProduct";

import { Wrapper } from "./StyledCpmponents";

import { data } from "../../static/mocks";

interface ShopContainerProps {
  onAddProduct: (id: string) => void;
}

const Shop = ({ onAddProduct }: ShopContainerProps): JSX.Element => {
  return (
    <Wrapper>
      {data.map(({ id, image, name, description, price }) => (
        <CardProduct
          key={id}
          id={id}
          image={image}
          name={name}
          description={description}
          price={price}
          onAddProduct={onAddProduct}
        />
      ))}
    </Wrapper>
  );
};

export default Shop;
