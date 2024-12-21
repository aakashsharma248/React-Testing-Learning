import { render, screen } from "@testing-library/react"
import Getbytext from "./Getbytext"

test("get by text",()=>{
    render(<Getbytext />)
    const btn = screen.getByText(/button 2/i);
    expect(btn).toBeInTheDocument();
})

test("get by All text",()=>{
    render(<Getbytext />)
    const btns = screen.getAllByText(/button 1/i);
    for(let i=0;i<btns.length;i++){
        expect(btns[i]).toBeInTheDocument()
    }
})