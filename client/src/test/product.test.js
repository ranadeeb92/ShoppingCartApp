import { render, screen } from "@testing-library/react";
import React from "react";
import Product from "../components/Product";

describe("Procudt", () => {
  beforeEach(() => {
    let product = {
      _id: 2,
      title: "Apple 10.5-Inch iPad Pro",
      quantity: 0,
      price: 649.99,
    };
    render(<Product product={product} />);
  });
  it("Product has title", () => {
    let title = screen.getByRole("heading", { level: 3 });
    expect(title).toHaveTextContent("Apple 10.5-Inch iPad Pro");
  });
});
