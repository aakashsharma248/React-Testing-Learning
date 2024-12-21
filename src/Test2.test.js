import { fireEvent, render, screen } from "@testing-library/react";
import Test2 from "./Test2";
import { act } from "react";


//  Will get run everytime before running every test of a file only
beforeEach(()=>{
    console.log("** before each hook");
})

//Will get run only once before all the testcases of this file only
beforeAll(()=>{
    console.log("**before all hook**")
})

// Will get run everytime after running every test of a file only
afterEach(()=>{
    console.log("** after each hook**");
})

//Will get run only once after all the testcases of a file only
afterAll(()=>{
    console.log("**after all hook**")
})
describe("Check the input box", () => {
  test("testing the input box 1", () => {
    render(<Test2 />);
    const inputBox = screen.getByRole("textbox");
    const placeholderText = screen.getByPlaceholderText("Enter User Name");
    expect(inputBox).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("name", "username");
    expect(inputBox).toHaveAttribute("id", "userId");
  });

  test("testing the input box 1", () => {
    render(<Test2 />);
    const inputBox = screen.getByRole("textbox");
    const placeholderText = screen.getByPlaceholderText("Enter User Name");
    expect(inputBox).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("name", "username");
    expect(inputBox).toHaveAttribute("id", "userId");
    expect(inputBox).toHaveAttribute("value", "aakash");
  });

  // using the nested describe here
  describe("Check the Event Change methods", () => {
    // for the onChange event testing
    test("Check the onChange event", () => {
        render(<Test2 />);
        const inputRef = screen.getByRole("textbox");
        fireEvent.change(inputRef, { target: { value: "a" } });
      expect(inputRef.value).toBe("aakash");
    });

    test("check the onClick event", ()=> {
        render(<Test2 />)
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(screen.getByText("Updated Data")).toBeInTheDocument()
    })
  });
});

// These testcases will be skipped and in the terminal the count will be showed
describe.skip("input box", () => {
  test("testing the input box 1", () => {
    render(<Test2 />);
    const inputBox = screen.getByRole("textbox");
    const placeholderText = screen.getByPlaceholderText("Enter User Name");
    expect(inputBox).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("name", "username");
    expect(inputBox).toHaveAttribute("id", "userId");
  });

  test("testing the input box 1", () => {
    render(<Test2 />);
    const inputBox = screen.getByRole("textbox");
    const placeholderText = screen.getByPlaceholderText("Enter User Name");
    expect(inputBox).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("name", "username");
    expect(inputBox).toHaveAttribute("id", "userId");
  });
});
