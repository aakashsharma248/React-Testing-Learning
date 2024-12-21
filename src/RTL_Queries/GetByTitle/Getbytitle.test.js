import { render, screen } from "@testing-library/react"
import Getbytitle from "./Getbytitle"

test("get by title value",()=> {
  render(<Getbytitle />)
  const h1Tag = screen.getByTitle("firstName");
  expect(h1Tag).toBeInTheDocument();
})

test("get All by title value",()=> {
    render(<Getbytitle />)
    const h1TagArray = screen.getAllByTitle("fullName");
    expect(h1TagArray.length).toBe(2);
    h1TagArray.forEach((h1Tag)=>{
        expect(h1Tag).toBeInTheDocument()
    })
  })