import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";

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
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 30 }}
    >
      <LeftItem />
      {/* <RightItem cart={cart} /> */}
      {console.log(checkoutToken)}
    </Container>
  );
};

export default Checkout;
