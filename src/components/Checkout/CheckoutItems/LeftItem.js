import React from "react";
import { Button, Paper, Input, Typography } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

const customerInformationInputs = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "email", placeholder: "Email" },
];

const shippingDetailsInputs = [
  { name: "fullName", placeholder: "Full Name" },
  { name: "streetAddress", placeholder: "Street Address" },
  { name: "city", placeholder: "City" },
  { name: "code", placeholder: "Postal/ZIP Code" },
  { name: "country", placeholder: "Country" },
];

const paymentInformationInputs = [
  { name: "creditCardNumber", placeholder: "Credit Card Number" },
  { name: "expiryMonth", placeholder: "Expiry Month" },
  { name: "expiryYear", placeholder: "Expiry Year" },
  { name: "ccv", placeholder: "CCV" },
];

const LeftItem = ({ checkoutToken }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(checkoutToken);
  const history = useHistory();
  const onSubmit = () => {
    let path = `/checkout/${checkoutToken.id}`;
    history.push(path);
  };

  const createInputs = (arrayName) =>
    arrayName.map((input) => {
      return (
        <div key={input.name}>
          <Controller
            name={input.name}
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Input placeholder={input.placeholder} {...field} />
            )}
          />
          {errors[input.name] && (
            <Typography variant="body2" color="secondary">
              Require {input.placeholder}
            </Typography>
          )}
        </div>
      );
    });

  return (
    <Paper elevation={3} style={{ width: "45%" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          padding: 20,
          width: "45%",
        }}
      >
        <Typography variant="h6" color="primary">
          Customer information
        </Typography>
        {createInputs(customerInformationInputs)}

        <Typography variant="h6" color="primary">
          Shipping details
        </Typography>
        {createInputs(shippingDetailsInputs)}

        <Typography variant="h6" color="primary">
          Payment information
        </Typography>
        {createInputs(paymentInformationInputs)}

        <Button variant="contained" color="primary" type="submit">
          Confirm Order
        </Button>
      </form>
    </Paper>
  );
};

export default LeftItem;
