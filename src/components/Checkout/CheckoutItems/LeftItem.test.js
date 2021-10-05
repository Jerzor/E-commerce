import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LeftItem from "./LeftItem";
import { Confirmation } from "components/index";

//TypeError: Cannot read property 'history' of undefined.
//I had to mock useHistory hook in jest
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("LeftItem", () => {
  const fillInputForTest = (placeholderName, value) => {
    fireEvent.change(screen.getByPlaceholderText(placeholderName), {
      target: { value },
    });
  };

  test("simple input validation", async () => {
    const { getByText, queryByText } = render(<LeftItem />);

    await act(async () => {
      fillInputForTest("First Name", "Test");

      fireEvent.submit(getByText("Confirm Order"));
    });

    expect(queryByText(/Require First Name/)).not.toBeInTheDocument();
  });

  test("all valid data in form", async () => {
    const mockSave = jest.fn();

    const { getByText, queryByText } = render(
      <LeftItem checkoutToken={mockSave} />,
      <Confirmation />
    );

    await act(async () => {
      fillInputForTest("First Name", "Test");
      fillInputForTest("Last Name", "Test");
      fillInputForTest("Email", "test@test.pl");

      fillInputForTest("Full Name", "Test Test");
      fillInputForTest("Street Address", "Test");
      fillInputForTest("City", "Test");
      fillInputForTest("ZIP Code", "00-000");
      fillInputForTest("Country", "Test");

      fillInputForTest("Credit Card Number", "4242424242424242");
      fillInputForTest("Expiry Month", "12");
      fillInputForTest("Expiry Year", "2021");
      fillInputForTest("CCV", "333");

      fireEvent.submit(getByText("Confirm Order"));
    });

    expect(queryByText(/Require/)).not.toBeInTheDocument();
  });
});
