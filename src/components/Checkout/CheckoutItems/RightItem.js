import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { StyledPaper } from "../CheckoutStyles";
import styled from "styled-components";
import "./style.css";

const StyledItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media (min-width: 500px) {
    flex-direction: row;
  }
  @media (min-width: 750px) {
    flex-direction: column;
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const RightItem = ({ cart }) => {
  return (
    <StyledPaper elevation={3}>
      <Card style={{ border: "none" }}>
        <CardContent>
          <Typography color="primary" variant="h5" gutterBottom>
            Order Summary
          </Typography>
          {cart.line_items.map((item) => (
            <StyledItemMenu key={item.id}>
              <img
                src={item.media.source}
                alt={item.name}
                style={{ width: 60, height: 60, marginRight: 15 }}
              />
              <Typography variant="subtitle1">
                {item.quantity} x {item.name}
              </Typography>
              <Typography variant="subtitle1" className="summaryPrice">
                {item.line_total.formatted_with_symbol}
              </Typography>
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
