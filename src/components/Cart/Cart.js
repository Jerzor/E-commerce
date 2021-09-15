import { CircularProgress, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import { StyledFlexContainer } from "../Products/ProductsStyles";
import { DivGrid, DivFlex, StyledButton } from "./CartStyles";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const cartItems = cart.line_items;

  if (!cartItems)
    return (
      <StyledFlexContainer>
        <CircularProgress size={80} />
      </StyledFlexContainer>
    );

  if (cartItems.length > 0)
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
        <DivGrid>
          {cartItems.map((item) => (
            <CartItem
              item={item}
              key={item.name}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </DivGrid>
        <DivFlex>
          <Typography variant="h4" gutterBottom>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <DivFlex divWidth>
            <StyledButton
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => handleEmptyCart()}
            >
              Empty cart
            </StyledButton>
            <StyledButton
              variant="contained"
              color="primary"
              size="medium"
              component={Link}
              to="/checkout"
            >
              Checkout
            </StyledButton>
          </DivFlex>
        </DivFlex>
      </Container>
    );
  return (
    <Container>
      <Typography variant="h5" align="center">
        You have no items in your shopping cart, start adding some!
      </Typography>
    </Container>
  );
};

export default Cart;
