import { render, screen } from "@testing-library/react";
import Getbyalttext from "./Getbyalttext";

test("get by alt text",()=>{
 render(<Getbyalttext />)
 const altText = screen.getByAltText("alternateText");
 expect(altText).toBeInTheDocument();
})

test("get All by alt text",()=> {
    render(<Getbyalttext />)
    const altTextArray = screen.getAllByAltText("alternateTextArray");
    expect(altTextArray.length).toBe(2);
    altTextArray.forEach((altText)=>{
        expect(altText).toBeInTheDocument()
    })
  })