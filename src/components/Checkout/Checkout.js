import React, { useEffect, useState } from "react";

import { commerce } from "../../lib/commerce";

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState({});

  const generateCheckoutToken = () => {
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

  return <div>Checkout</div>;
};

export default Checkout;
