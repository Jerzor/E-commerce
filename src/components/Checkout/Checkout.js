import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

import { commerce } from "lib/commerce";

import LeftItem from "./CheckoutItems/LeftItem";
import RightItem from "./CheckoutItems/RightItem";

import { StyledContainer } from "./CheckoutStyles";

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

  if (!cart.line_items) {
    if (
      Object.keys(checkoutToken).length === 0 &&
      checkoutToken.constructor === Object
    )
      return (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      );
  }

  return (
    <StyledContainer>
      <LeftItem checkoutToken={checkoutToken} />
      <RightItem cart={cart} />
    </StyledContainer>
  );
};

export default Checkout;
