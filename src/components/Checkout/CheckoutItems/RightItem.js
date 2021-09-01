import React from "react";
import { Card, CardContent, Paper, Typography } from "@material-ui/core";

const RightItem = ({ cart }) => {
  return (
    <Paper elevation={3} style={{ width: "35%", height: "100%" }}>
      <Card style={{ border: "none" }}>
        <CardContent>
          <Typography color="primary" variant="h5" gutterBottom>
            Order Summary
          </Typography>
          {cart.line_items.map((item) => (
            <div key={item.id} style={{ display: "flex", margin: "20px 0" }}>
              <img
                src={item.media.source}
                alt={item.name}
                style={{ width: 60, height: 60, marginRight: 15 }}
              />
              <Typography variant="subtitle1">
                {item.quantity} x {item.name}
              </Typography>
              <Typography style={{ marginLeft: "auto" }} variant="subtitle1">
                {item.line_total.formatted_with_symbol}
              </Typography>
            </div>
          ))}
          <Typography variant="h6">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default RightItem;
