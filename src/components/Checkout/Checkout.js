import React, { useEffect, useState } from "react";
import { CircularProgress, Container } from "@material-ui/core";

import { commerce } from "../../lib/commerce";

import LeftItem from "./CheckoutItems/LeftItem";
import RightItem from "./CheckoutItems/RightItem";

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState({});

  const generateCheckoutToken = () => {
    if (cart.line_items)
      if (cart.line_items.length) {
        commerce.checkout
          .generateToken(cart.id, { type: "cart" })
          .then((token) => {
            setCheckoutToken(token);
          })
          .catch((error) => {
            console.log("There was an error in generating a token", error);
          });
      }
  };

  useEffect(() => {
    generateCheckoutToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cart.line_items)
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

  return (
    <Container
      maxWidth="lg"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <LeftItem checkoutToken={checkoutToken} />
      <RightItem cart={cart} />
    </Container>
  );
};

export default Checkout;
