import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import {
  StyledCard,
  StyledCardActionArea,
  StyledButton,
} from "./ProductStyles";

const Product = ({ product, handleAddToCart }) => {
  return (
    <>
      <StyledCard>
        <CardMedia
          component="img"
          alt={product.name}
          height="200"
          image={product.media.source}
          title={product.name}
        />
        <StyledCardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
              gutterBottom
            />
            <Typography variant="h6">
              {product.price.formatted_with_symbol}
            </Typography>
          </CardContent>
        </StyledCardActionArea>
        <CardActions>
          <StyledButton
            size="medium"
            color="primary"
            variant="contained"
            onClick={() => handleAddToCart(product.id)}
          >
            Add to cart
          </StyledButton>
        </CardActions>
      </StyledCard>
    </>
  );
};

export default Product;
