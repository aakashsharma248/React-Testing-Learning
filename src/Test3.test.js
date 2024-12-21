import { getAllByRole, getByRole, render, screen } from "@testing-library/react";
import Test3 from "./Test3";

TODO: getByRole 

test("get by role", ()=> {
    render(<Test3 />)
    const box = screen.getByRole("textbox",{name: "User Name1"});
    expect(box).toBeInTheDocument();
    expect(box).toHaveValue("hello");
    expect(box).toBeDisabled();
})
 
// there can be a situation where multiple elements have the same role, so to resolve that problem we 
// can give some extra attribute to that 

test("get button of same role", ()=> {
    render(<Test3 />)
    const btn = screen.getByRole("button",{name: "button1"});
    expect(btn).toBeInTheDocument();
})

test("get textbox by name", ()=> {
    render(<Test3 />)
    const inputBox = screen.getByRole("textbox",{name: "User Name2"});
    expect(inputBox).toBeInTheDocument();
})

TODO: getAllByRole

// this will give us the array of buttons then we can iterate over that and fetch the values accordingly
test("test all button", ()=> {
    render(<Test3 />)
    const btns = screen.getAllByRole("button");
    expect(btns[0]).toBeInTheDocument();
})

test("test all button", ()=> {
    render(<Test3 />)
    const btns = screen.getAllByRole("button");
    for(let i=0;i<btns.length;i++){
        const btn = btns[i];
        expect(btn).toBeInTheDocument();
    }
})