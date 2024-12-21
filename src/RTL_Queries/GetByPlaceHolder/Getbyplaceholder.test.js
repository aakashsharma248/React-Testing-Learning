import { render, screen } from "@testing-library/react";
import Getbyplaceholder from "./Getbyplaceholder";

beforeEach(()=>{
  render(<Getbyplaceholder />);
})

test("get by place holder text", () => {
  const inputBox = screen.getByPlaceholderText("enter user name");
  expect(inputBox).toBeInTheDocument();
});

test("get by All place holder text", ()=>{
    const inputBox = screen.getAllByPlaceholderText("enter user password");
    for(let i=0;i<inputBox.length;i++){
        expect(inputBox[i]).toBeInTheDocument()
    }
  })
