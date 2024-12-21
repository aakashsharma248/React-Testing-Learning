import { render, screen } from "@testing-library/react";
import QueryBy from "./QueryBy";

test("testing the query by", () => {
  render(<QueryBy />);
  const ele = screen.queryByText("QueryBy");
  expect(ele).toBeInTheDocument();
});

// Query Type
test("testing the query by", () => {
  render(<QueryBy />);
  const ele = document.querySelector("#parent");
  expect(ele).toBeInTheDocument();
});