import React from "react";
import { useHistory } from "react-router-dom";
import {
  ConfirmationContainer,
  StyledTypography,
  StyledButton,
} from "./ConfirmationStyles";

const Confirmation = ({ handleEmptyCart }) => {
  const history = useHistory();
  const confirm = () => {
    handleEmptyCart();
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <ConfirmationContainer>
      <StyledTypography variant="h2" gutterBottom>
        Payment accepted
      </StyledTypography>

      <StyledButton variant="contained" onClick={confirm}>
        Back to shop
      </StyledButton>
    </ConfirmationContainer>
  );
};

export default Confirmation;
