import React from "react";
import { Button, Input, Typography } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledForm, StyledPaper } from "../CheckoutStyles";

// ========== FORM VALIDATION ==========
const thisYear = new Date().getFullYear();

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),

  fullName: yup.string().required(),
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  zipCode: yup
    .string()
    .required()
    .matches(/(\d\d-\d\d\d)/)
    .max(6),
  country: yup.string().required(),

  creditCardNumber: yup
    .string()
    .required()
    .matches(/^(([\d]{16})|(([\d]{4})+\s?){4})$/)
    .max(19),
  expiryMonth: yup.number().required().integer().min(1).max(12),
  expiryYear: yup
    .number()
    .required()
    .integer()
    .min(thisYear)
    .max(thisYear + 2),
  ccv: yup
    .string()
    .required()
    .matches(/(\d\d\d)/)
    .max(3),
});

// ========== INPUTS ARRAYS ==========
const customerInformationInputs = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "email", placeholder: "Email" },
];

const shippingDetailsInputs = [
  { name: "fullName", placeholder: "Full Name" },
  { name: "streetAddress", placeholder: "Street Address" },
  { name: "city", placeholder: "City" },
  { name: "zipCode", placeholder: "ZIP Code" },
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
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const onSubmit = () => {
    let path = `/checkout/token=${checkoutToken.id}`;
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
    <StyledPaper elevation={3}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
      </StyledForm>
    </StyledPaper>
  );
};

export default LeftItem;
