import { Container } from "@material-ui/core";
import React from "react";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart }) => {
  const cartItems = cart.line_items;

  if (!cartItems)
    return (
      <Container maxWidth="lg">
        <p>Loading...</p>
      </Container>
    );

  if (cartItems.length > 0)
    return (
      <Container
        maxWidth="lg"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
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
      </Container>
    );
  return (
    <Container maxWidth="lg">
      <p>There is no items.</p>
    </Container>
  );
};

export default Cart;
