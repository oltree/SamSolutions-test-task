import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { StyledCard, PriceContainer } from "./StyledComponents";

import { ICartProduct } from "../../types";

interface CardProductProps extends Omit<ICartProduct, "quantity"> {
  onAddProduct: (id: string) => void;
}

const CardProduct = ({
  id,
  image,
  name,
  description,
  price,
  onAddProduct,
}: CardProductProps): JSX.Element => {
  return (
    <StyledCard>
      <CardMedia
        sx={{
          cursor: "pointer",
          transition: "0.4s all",
          "&:hover": { transform: "scale(0.8)" },
        }}
        height={230}
        component="img"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <PriceContainer>
        <Typography variant="h6" component="div">
          $ {price} USD
        </Typography>

        <Button onClick={() => onAddProduct(id)} size="medium">
          Buy
        </Button>
      </PriceContainer>
    </StyledCard>
  );
};

export default CardProduct;
