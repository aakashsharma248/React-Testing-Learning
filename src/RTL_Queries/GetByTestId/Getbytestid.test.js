import { render, screen } from "@testing-library/react";
import Getbytestid from "./Getbytestid";

beforeEach(()=>{
  render(<Getbytestid />);
})

test("get by test id", () => {
  const inputBox = screen.getByTestId("btn2");
  expect(inputBox).toBeInTheDocument();
});

test("get by All test id", ()=>{
    const inputBox = screen.getAllByTestId("btn1");
    for(let i=0;i<inputBox.length;i++){
        expect(inputBox[i]).toBeInTheDocument()
    }
  })
