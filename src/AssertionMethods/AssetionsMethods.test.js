import { render, screen } from "@testing-library/react"
import AssertionsMethods from "./AssertionsMethods"

test("trying assertions methods", ()=> {
  render(<AssertionsMethods />)
  const inputRef = screen.getByRole("textbox");
  expect(inputRef).toHaveValue("aakash sharma")
  expect(inputRef).toBeEnabled();
  // expect(inputRef).toBeDisabled();
  expect(inputRef).toHaveAttribute("id");
  expect(inputRef).toHaveAttribute("data-test");
  // to check class attribute the class name
  expect(inputRef).toHaveClass("test-style");
  expect(inputRef).toHaveClass("dummy");
})