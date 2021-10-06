import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Products from "./Products";

const testData = [
  {
    name: "test1",
    media: { source: "/" },
    description: "testtest1 test1",
    id: 1,
    price: { formatted_with_symbol: "$11.11" },
  },
  {
    name: "test2",
    media: { source: "/" },
    description: "testtest2 test2",
    id: 2,
    price: { formatted_with_symbol: "$22.22" },
  },
];

describe("Products", () => {
  test("render component with products list", () => {
    const { getAllByText } = render(<Products products={testData} />);

    expect(getAllByText(/Add to cart/)).toHaveLength(2);
  });
});
