import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

const Product = ({ product, handleAddToCart }) => {
  return (
    <>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          height="200"
          image={product.media.source}
          title={product.name}
        />
        <CardActionArea style={{ flexGrow: 1 }}>
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
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            style={{ margin: "0 auto" }}
            onClick={() => handleAddToCart(product.id)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
