import { render, screen } from "@testing-library/react"
import Getbydisplayvalue from "./Getbydisplayvalue"

test("get by display value",()=> {
  render(<Getbydisplayvalue />)
  const h1Tag = screen.getByDisplayValue("aakash");
  expect(h1Tag).toBeInTheDocument();
})

test("get All by display value",()=> {
    render(<Getbydisplayvalue />)
    const h1TagArray = screen.getAllByDisplayValue("aakash sharma");
    expect(h1TagArray.length).toBe(2);
    h1TagArray.forEach((h1Tag)=>{
        expect(h1Tag).toBeInTheDocument()
    })
  })