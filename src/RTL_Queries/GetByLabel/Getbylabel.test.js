import { render, screen } from "@testing-library/react"
import Getbylabel from "./Getbylabel"

test("get by label text", ()=>{
  render(<Getbylabel/>)
  const inputBox = screen.getByLabelText("User Name");
  expect(inputBox).toBeInTheDocument()
})

test("get by All label text", ()=>{
    render(<Getbylabel/>)
    const inputBox = screen.getAllByLabelText("User Password");
    for(let i=0;i<inputBox.length;i++){
        expect(inputBox[i]).toBeInTheDocument()
    }
  })