import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { StyledPaper } from "../CheckoutStyles";
import { StyledItemMenu, StyledTypography, StyledImg } from "../CheckoutStyles";

const RightItem = ({ cart }) => {
  return (
    <StyledPaper elevation={3}>
      <Card>
        <CardContent>
          <Typography color="primary" variant="h5" gutterBottom>
            Order Summary
          </Typography>
          {cart.line_items.map((item) => (
            <StyledItemMenu key={item.id}>
              <StyledImg src={item.media.source} alt={item.name} />
              <Typography variant="subtitle1">
                {item.quantity} x {item.name}
              </Typography>
              <StyledTypography variant="subtitle1">
                {item.line_total.formatted_with_symbol}
              </StyledTypography>
            </StyledItemMenu>
          ))}
          <Typography variant="h6">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
        </CardContent>
      </Card>
    </StyledPaper>
  );
};

export default RightItem;
