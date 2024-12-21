import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Userevent from "./Userevent";

test("testing the userEvent", async () => {
  render(<Userevent />);
  const btn = screen.getByText("Click Me");
  await userEvent.click(btn); // Use directly without setup
  expect(screen.getByText("hello")).toBeInTheDocument();
});
