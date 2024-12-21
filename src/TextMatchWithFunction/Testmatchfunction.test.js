import { render, screen } from "@testing-library/react"
import Textmatchfunction from "./Textmatchfunction"

test("get by text with function", ()=> {
    render(<Textmatchfunction />)
    const text = screen.getByText((content, element)=>{
       return content.startsWith("Textmatch")
    })

    const text1 = screen.getByText((content, element)=>{
        return content.includes("Text")
     })
    expect(text).toBeInTheDocument()
    expect(text1).toBeInTheDocument()

})