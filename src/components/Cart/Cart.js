import { Container } from "@material-ui/core";
import React from "react";
import CartItem from "./CardItem/CardItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart }) => {
  const cartItem = cart.line_items;

  if (!cartItem)
    return (
      <Container maxWidth="lg">
        <p>Loading...</p>
      </Container>
    );

  if (cartItem.length > 0)
    return (
      <Container
        maxWidth="lg"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
        }}
      >
        {cartItem.map((item) => (
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
