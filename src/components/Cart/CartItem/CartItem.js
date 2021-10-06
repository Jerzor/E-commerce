import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { StyledDiv } from "./CartItemStyles";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={item.name}
        height="200"
        image={item.media.source}
        title={item.name}
      />
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" align="center">
            {item.name}
          </Typography>
          <Typography variant="h6" align="center">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledDiv>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </StyledDiv>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
