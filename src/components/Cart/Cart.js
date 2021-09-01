import {
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const cartItems = cart.line_items;

  if (!cartItems)
    return (
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <CircularProgress size={80} />
      </Container>
    );

  if (cartItems.length > 0)
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: 20,
            marginBottom: 50,
          }}
        >
          {cartItems.map((item) => (
            <CartItem
              item={item}
              key={item.name}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div
            style={{
              display: "flex",
              width: 360,
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              style={{ width: 170, height: 50 }}
              onClick={() => handleEmptyCart()}
            >
              Empty cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ width: 170, height: 50 }}
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        </div>
      </Container>
    );
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center">
        You have no items in your shopping cart, start adding some!
      </Typography>
    </Container>
  );
};

export default Cart;
